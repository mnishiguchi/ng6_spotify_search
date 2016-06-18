// import angular from 'angular';

let SpotifyService = ( $http, $q ) => {
  "ngInject";
  console.log("SpotifyService was called");

  let getSpotifyData = (searchTerm, searchType) => {
    // Default params.
    searchTerm = searchTerm || ""
    searchType = searchType || "artist"

    // Creates a Deferred object which represents a task which will finish in the future.
    // https://docs.angularjs.org/api/ng/service/$q
    let deferred = $q.defer();
    let url = [
      "https://api.spotify.com/v1/search?type=" + searchType,
      "&artist&q=" + searchTerm
    ].join('')

    $http.get( url )
    .then( function( response ) {
      // NOTE: response.data is an object of artist data.
      deferred.resolve( response.data )
      console.log(response.data);
    })
    .catch( function( reason ) {
      deferred.reject( "Error fetching artist data: " + reason );
      console.log(reason);
    })

    return deferred.promise
  };

  return { getSpotifyData };
};

export default SpotifyService;
