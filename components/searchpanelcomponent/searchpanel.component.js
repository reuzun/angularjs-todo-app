SearchPanelController.$inject = ['$scope', 'dataservice'];
function SearchPanelController($scope, dataservice) {
    $scope.query = "";

    this.filterData = function () {
        dataservice.setFilter($scope.query);
    }
}

app.
    component('searchPanel', {
        template: '<div style="display:inline;">'
            + '<input ng-model="query" ng-change="$ctrl.filterData()"  ng-model="filter" class="form-control" type="text" placeholder="Search..." style="width:70%; display:inline; margin-right:15px;" ng-keypress="$event.keyCode == 13 ? $ctrl.addData() : null">'
            + '</div>',
        controller: SearchPanelController
    });