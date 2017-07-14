(function(){
  'use strict';
  angular.module('myFirstApp',[])
  .controller('MyFirstController',function($scope){
     $scope.name="ravi teja";
     $scope.sayHello=function(){
       return "Hello Coursera";
     };

  });
})();
