import SpotifyService from './spotify.service';

class SpotifyController {

  constructor( SpotifyService ) {
    "ngInject";
    this.SpotifyService = SpotifyService

    // Initial state.
    this.loading      = false
    this.searchResult = {}
    this.searchType   = "artist"
  }

  /**
   * Fetch artist data based on the searchTerm.
   * The SpotifyService is required.
   */
  getSpotifyData( searchTerm ) {
    console.log("getSpotifyData was called");

    this.loading = true

    this.SpotifyService.getSpotifyData( searchTerm, this.searchType )
    .then ( searchResult => {
      this.searchResult = searchResult
    })
    .finally( () => {
      this.loading = false
    })

  } // end getSpotifyData

  /**
   * Clears artist data and search key.
   */
  clearData() {
    this.searchResult = {}
  }

  /**
   * Handles the selectino of search type.
   */
  onSelected( selectedItem ) {
    console.log("selectedItem: %s", selectedItem);
    this.searchType = selectedItem
  }
}

export default SpotifyController;
