TaskListController.$inject = ['$scope', 'dataservice'];
function TaskListController($scope, dataservice) {
  this.data = dataservice.getList();
  $scope.dataservice = dataservice;
  // this.filter = dataservice.getFilter();
  this.removeData = function(indx){
    dataservice.removeIndex(indx)
  }
}


app.
  component('taskList', {
    templateUrl: "components/tasklistcomponent/tasklist.template.html",
    controller: TaskListController
  });