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

configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

function configRoutes($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.interceptors.push('AuthInterceptor');

  $urlRouterProvider.otherwise('/root');
  $urlRouterProvider.when('/home', '/home/index');
  $urlRouterProvider.when('/shop', '/shop/index');

  $stateProvider

    // HOME STATES
    .state('root', {
      url: '/root',
      templateUrl: 'templates/root.html',
      controller: 'MainController as mainCtrl'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'MainController as mainCtrl'
    })
    .state('home.index', {
      url: '/index',
      templateUrl: 'templates/index.html',
      controller: 'MainController as mainCtrl'
    })
    .state('home.about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'MainController as mainCtrl'
    })
    .state('home.blog', {
      url: '/blog',
      templateUrl: 'templates/blog.html',
      controller: 'MainController as mainCtrl'
    })
    .state('home.work', {
      url: '/work',
      templateUrl: 'templates/work.html',
      controller: 'MainController as mainCtrl'
    })
    .state('home.contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html',
      controller: 'MainController as mainCtrl'
    })

    // SHOP STATES
    .state('shop', {
      url: '/shop',
      templateUrl: 'templates/shop/shop.html',
      controller: 'ShopNavController as shopNavCtrl'
    })
    .state('shop.index', {
      url: '/index',
      templateUrl: 'templates/shop/home.html',
      controller: 'BouquetController as bouqCtrl'
    })

    .state('shop.show_bouquet', {
      url: '/details/:bouqId',
      templateUrl: 'templates/shop/show_bouquet.html',
      controller: 'DetailController as detailCtrl'
    })

    .state('shop.login', {
      url: '/login',
      templateUrl: 'templates/shop/login.html',
      controller: 'UserController as userCtrl'
    })

    .state('shop.signup', {
      url: '/signup',
      templateUrl: 'templates/shop/signup.html',
      controller: 'UserController as userCtrl'
    })

    .state('shop.cart', {
      url: '/cart',
      templateUrl: 'templates/shop/cart.html',
      controller: 'CartController as cartCtrl'
    })

    .state('shop.checkout', {
      url: '/checkout',
      templateUrl: 'templates/shop/checkout.html',
      controller: 'CheckoutController as checkoutCtrl',
    })

    .state('shop.confirm-order', {
      url: '/confirm',
      templateUrl: 'templates/shop/confirm-order.html',
      controller: 'ConfirmController as confirmCtrl'
    })

    .state('shop.order-history', {
      url: '/order_history',
      templateUrl: 'templates/shop/order-history.html',
      controller: 'OrderHistoryController as orderCtrl',
      loginRequired: true
    });
}

})();
