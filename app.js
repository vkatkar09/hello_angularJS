(function() {
    var app = angular.module("test",['ngRoute', 'ui.router']);

    app.config(function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'home'
            })
    });

}());
