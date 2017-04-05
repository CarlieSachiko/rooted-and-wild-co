(function() {
'use strict';

angular.module('app', ['ui.router', 'ngAnimate', 'ngResource', 'angularUtils.directives.dirPagination'])
  .config(configRoutes)
  .run(runBlock);

runBlock.$inject = ['$rootScope', '$state', 'UserService'];

function runBlock($rootScope, $state, UserService) {
  $rootScope.$on('$stateChangeStart', function(evt, toState) {
    if (toState.loginRequired && !UserService.isLoggedIn()) {
      evt.preventDefault();
      $state.go('shop.login');
    }
  });
}

configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

function configRoutes($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.interceptors.push('AuthInterceptor');

  $urlRouterProvider.otherwise('/home/index');

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
      controller: 'BlogController as blogCtrl'
    })
    .state('home.show-blog', {
      url: '/blog/:postTitle/:postId',
      templateUrl: 'templates/show-blog.html',
      controller: 'ShowBlogController as showBlogCtrl'
    })
    .state('home.work', {
      url: '/work',
      templateUrl: 'templates/work.html',
      controller: 'MainController as mainCtrl'
    })
    .state('home.contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html',
      controller: 'ContactController as contactCtrl'
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

    .state('shop.show-bouquet', {
      url: '/details/:bouqId',
      templateUrl: 'templates/shop/show-bouquet.html',
      controller: 'ShowBouqController as showBouqCtrl'
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
      loginRequired: true
    })

    .state('shop.confirm-order', {
      url: '/confirm/:orderId',
      templateUrl: 'templates/shop/confirm-order.html',
      controller: 'ConfirmController as confirmCtrl',
      loginRequired: true
    })

    .state('shop.order-history', {
      url: '/order_history',
      templateUrl: 'templates/shop/order-history.html',
      controller: 'OrderHistoryController as orderCtrl',
      loginRequired: true
    });
}

})();
