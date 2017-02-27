(function() {
'use strict';

angular.module('app', ['ui.router', 'ngAnimate', 'ngResource'])
  .config(configRoutes);

configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

function configRoutes($stateProvider, $urlRouterProvider, $httpProvider) {

  // $httpProvider.interceptors.push('AuthInterceptor');

  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'MainController as mainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'MainController as mainCtrl'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'templates/blog.html',
      controller: 'MainController as mainCtrl'
    })
    .state('work', {
      url: '/work',
      templateUrl: 'templates/work.html',
      controller: 'MainController as mainCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html',
      controller: 'MainController as mainCtrl'
    })



  $urlRouterProvider.otherwise('/');
}



})();
