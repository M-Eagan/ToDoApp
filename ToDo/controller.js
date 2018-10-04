"use strict";

{
    angular.module('app')
        .controller("TodoController", function(){
            const $ctrl = this;
            
            $ctrl.list=[];
            $ctrl.add = function() {
                console.log($ctrl.toDos)
                $ctrl.list.push($ctrl.toDos)

            };
            
            $ctrl.remove = function(index) {
                $ctrl.list.splice(index,1);
            };
        });
}