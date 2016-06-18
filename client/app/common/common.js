import angular from 'angular';
import Navbar from './navbar/navbar';
import AppFooter from './appFooter/appFooter';

let commonModule = angular.module('app.common', [
  Navbar.name,
  AppFooter.name
]);

export default commonModule;
