"use strict";

{
    angular.module('app')
        .controller("ToDoController", function(){
            const $ctrl = this;
            
            $ctrl.list=[];
            $ctrl.add = function() {
                console.log($ctrl.toDo)
                $ctrl.list.push($ctrl.toDo)
            };
            
            $ctrl.remove = function(index) {
                $ctrl.list.splice(index,1);
            };
               
            var classApp = angular.module('classApp', []);

classApp.controller('classCtrl', function ($scope) {
	$scope.isActive = false;
  $scope.activeButton = function() {
    $scope.isActive = !$scope.isActive;
  }  
});
        });

       
}