import angular from 'angular';
import Home from './home/home';
import Spotify from './spotify/spotify';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Home.name,
  Spotify.name,
  About.name,
]);

export default componentModule;
