"use strict";

{
    angular.module('app')
        .controller("ToDoController", function(){
            const $ctrl = this;
            
            $ctrl.list=[
                {ToDo: "Groceries" , done: false},
                {ToDo: "Walk the Dog", done: true},
                {ToDo: "Clean Up", done: false},
                {ToDo: "Laundry", done: false},
            ];
            $ctrl.add = function(ToDo) {
                // console.log($ctrl.toDo)
                $ctrl.list.push({ToDo:$ctrl.toDo, done: false});
            };
            
            $ctrl.remove = function(index) {
                $ctrl.list.splice(index,1);
            };
               
            // $ctrl.completeTask = (index) => {
            //     $ctrl.toDoTasks[index].done = true;
            // }


    });
    }