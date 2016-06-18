import template from './spotify.html';
import controller from './spotify.controller';
import './spotify.styl';

let spotifyComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default spotifyComponent;
