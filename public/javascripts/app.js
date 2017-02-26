(function() {
'use strict';

angular.module('app', ['ui.router', 'ngAnimate', 'ngResource'])
  .config(configRoutes)
  .run(runBlock);

runBlock.$inject = ['$rootScope', '$state', 'UserService'];

function runBlock($rootScope, $state, UserService) {
  $rootScope.$on('$stateChangeStart', function(evt, toState) {
    if (toState.loginRequired && !UserService.isLoggedIn()) {
      evt.preventDefault();
      $state.go('login');
    }
  });
}

configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('shop-home', {
      url: '/home',
      templateUrl: 'templates/shop/home.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/shop/users/login.html',
      controller: 'UserController as userCtrl'
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/shop/users/signup.html',
      controller: 'UserController as userCtrl'
    })

    .state('favorites', {
      url: '/favorites',
      templateUrl: 'templates/shop/users/favorites.html',
      controller: 'UserController as userCtrl',
      loginRequired: true
    })

    .state('orders', {
      url: '/order_history',
      templateUrl: 'templates/shop/users/orders.html',
      controller: 'UserController as userCtrl',
      loginRequired: true
    });

  $urlRouterProvider.otherwise('/home');
}



})();
