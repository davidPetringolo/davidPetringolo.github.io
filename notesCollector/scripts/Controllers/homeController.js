/**
 * Created by David on 20/05/2016.
 */


angular.module('notesCollector').controller('homeController', function($scope, $state){

    $scope.disabledBtn = true;
    $scope.todos = [
        {
            'title': "make some todos!",
            'done': false
        }
    ];

    $scope.addTodo = function() {

        $scope.todos.push({
            'title': $scope.newTodo,
            'done': false
        });
        $scope.newTodo = "";
    };

    $scope.clearCompleted = function() {

        $scope.todos = $scope.todos.filter(function(item) {
            return !item.done;
        });

    };


    $scope.btnRef = function() {
        var checkFilter = $scope.todos.filter(function(checkedEl) {
            return checkedEl.done;
        });
        if(checkFilter.length > 0)
            $scope.disabledBtn = false;
        else
            $scope.disabledBtn = true;
    };

    var l = localStorage.getItem('todo');
});