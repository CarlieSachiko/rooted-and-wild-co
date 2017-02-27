(function() {
'use strict';

angular.module('shopApp', ['ui.router', 'ngAnimate', 'ngResource'])
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

configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

function configRoutes($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.interceptors.push('AuthInterceptor');

  $stateProvider

    .state('shop-home', {
      url: '/',
      templateUrl: 'templates/shop/home.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/shop/login.html',
      controller: 'UserController as userCtrl'
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/shop/signup.html',
      controller: 'UserController as userCtrl'
    })

    .state('cart', {
      url: '/cart',
      templateUrl: 'templates/shop/cart.html',
      controller: 'UserController as userCtrl'
    })

    .state('favorites', {
      url: '/favorites',
      templateUrl: 'templates/shop/favorites.html',
      controller: 'UserController as userCtrl',
      loginRequired: true
    })

    .state('orders', {
      url: '/order_history',
      templateUrl: 'templates/shop/orders.html',
      controller: 'UserController as userCtrl',
      loginRequired: true
    });

  $urlRouterProvider.otherwise('/');
}



})();
