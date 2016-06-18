import SpotifyService from './spotify.service';

class SpotifyController {

  constructor( $location, SpotifyService ) {
    "ngInject";
    this._SpotifyService = SpotifyService
    this._$location      = $location

    this.name         = "ng spotify search"
    this.loading      = false
    this.searchResult = {}
    this.searchType   = "artist"
  }

  /**
   * Fetch artist data based on the searchTerm.
   * The SpotifyService is required.
   */
  getSpotifyData( searchTerm ) {

    // Modify the location hash.
    // https://docs.angularjs.org/guide/$location
    if (searchTerm.length < 1) {
      this._$location.hash( "" )
    } else {
      this._$location.hash( "searching-for-" + searchTerm + "-by-" + this.searchType )
    }

    this.loading = true

    this._SpotifyService.getSpotifyData( searchTerm, this.searchType )
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
    this._$location.hash( "" )
  }

  /**
   * Handles the selectino of search type.
   */
  onSelected( selectedItem ) {
    // console.log("selectedItem: %s", selectedItem);
    this.searchType = selectedItem
  }
}

export default SpotifyController;
