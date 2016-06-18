import angular from 'angular';
import uiRouter from 'angular-ui-router';
import spotifyComponent from './spotify.component';
import SpotifyService from './spotify.service';

let spotifyModule = angular.module('spotify', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('spotify', {
      url: '/spotify',
      template: '<spotify></spotify>'
    });
})

.component('spotify', spotifyComponent)
.factory('SpotifyService', SpotifyService)

export default spotifyModule;
