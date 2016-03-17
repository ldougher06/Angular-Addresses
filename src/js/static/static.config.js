angular
  .module('angularAddresses')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/static/landing.html'
      })
      .when('/contact', {
        templateUrl: 'js/static/contact.html'
      })
      .when('/about', {
        templateUrl: 'js/static/about.html'
      })
      .otherwise({
        templateUrl: 'js/static/404.html'
      });
  });
