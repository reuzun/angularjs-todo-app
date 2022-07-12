TaskListController.$inject = ['dataservice'];
function TaskListController(dataservice) {
  this.data = dataservice.getList();
  // this.filter = dataservice.getFilter();
  this.removeData = function(indx){
    dataservice.removeIndex(indx)
  }
}


app.
  component('taskList', {
    template: '<ul><li ng-repeat="x in $ctrl.data track by $index">{{x}}<button class="btn btn-danger" style="background-color:transparent;border:none;color:red;" ng-click="$ctrl.removeData($index)">X</button></li></ul>',
    controller: TaskListController
  });