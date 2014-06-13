angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "main.html"
    })
  
  .state('second', {
      url: "/second",
      templateUrl: "second.html"
    })
  
  .state('third', {
      url: "/third",
      templateUrl: "third.html"
    });


   $urlRouterProvider.otherwise("/main");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});
