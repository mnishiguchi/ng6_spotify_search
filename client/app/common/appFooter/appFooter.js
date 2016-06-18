import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appFooterComponent from './appFooter.component';

let appFooterModule = angular.module('appFooter', [
  uiRouter
])

.component('appFooter', appFooterComponent);

export default appFooterModule;
