(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope,
                       $filter,
                       $injector) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(DIController));
}

function AnnonateMe(name, job, blah) {
  return "Blah!";
}

console.log(DIController.toString());

})();

/*
!function(){"use strict";function n(o,e,a){o.name="Yaakov",o.upper=function(){var n=e("uppercase");o.name=n(o.name)},console.log(a.annotate(n))}angular.module("DIApp",[]).controller("DIController",n),console.log(n.toString())}();

*/
