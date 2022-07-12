// Setting the app variable by using module function of angular.
var app = angular.module("toDoApp", [])

app.service("dataservice", function(){
    var todolist = [];

    this.addData = function(data){
        todolist.unshift(data);
    }

    this.removeIndex = function(indx){
        todolist.splice(indx, 1);
    }

    this.getList = function() {
        return todolist;
    }

});