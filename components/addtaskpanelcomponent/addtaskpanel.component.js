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
    template: '<div style="display:inline;">'
        + '<input ng-model="task" class="form-control" type="text" placeholder="Task..." style="width:70%; display:inline; margin-right:15px;" ng-keypress="$event.keyCode == 13 ? $ctrl.addData() : null">'
        + '<button class="btn btn-secondary" style="vertical-align: initial; display:inline;" ng-click="$ctrl.addData()">Add new task</button>'
        + '</div>',
    controller: AddTaskPanelController
  });