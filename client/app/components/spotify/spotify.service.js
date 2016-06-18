// import angular from 'angular';

let SpotifyService = ( $http, $q ) => {
  "ngInject";
  // console.log("SpotifyService was called");

  let getSpotifyData = (searchTerm, searchType) => {
    // Default params.
    searchTerm = searchTerm || ""
    searchType = searchType || "artist"

    // Creates a Deferred object which represents a task which will finish in the future.
    // https://docs.angularjs.org/api/ng/service/$q
    let deferred = $q.defer();

    // NOTE:
    // * The type field expects a singular word.
    let url = [
      "https://api.spotify.com/v1/search?type=" + searchType,
      "&artist&q=" + searchTerm
    ].join('')

    $http.get( url )
    .then( function( response ) {
      // NOTE:
      // * response.data is an object of items.
      // * In response.data, the key corresponding to the search type is plural.
      deferred.resolve( response.data[ searchType + 's' ] )
      // console.log( response.data );
    })
    .catch( function( reason ) {
      deferred.reject( "Error fetching artist data: " + reason );
      // console.log( reason );
    })

    return deferred.promise
  };

  return { getSpotifyData };
};

export default SpotifyService;
