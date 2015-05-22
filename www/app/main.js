define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');
    var angular = require('angular');

    print(messages.getHello());


    var app = angular.module('app', []);


    app.controller('myCtrl', function($scope){
        $scope.variable = "Hello Angular.";
    });

});
