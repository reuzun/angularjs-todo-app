AddTaskPanelController.$inject = ['$scope', 'dataservice'];
function AddTaskPanelController($scope, dataservice) {
  $scope.task = "";
  this.addData = function(){
    if($scope.task == "") return;
    dataservice.addData($scope.task)
    $scope.task = "";
  }
}


app.
  component('addTaskPanel', {
    templateUrl: "components/addtaskpanelcomponent/addtaskpanel.template.html",
    controller: AddTaskPanelController
  });