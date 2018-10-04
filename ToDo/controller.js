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
            $ctrl.list = ['Buy Groceries', 'Laundry', 'Pay Bills'];     
        });

       
}