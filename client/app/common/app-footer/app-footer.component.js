import template from './appFooter.html';
import controller from './appFooter.controller';
import './appFooter.styl';

let appFooterComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default appFooterComponent;
