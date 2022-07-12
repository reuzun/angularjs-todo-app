SearchPanelController.$inject = ['$scope', 'dataservice'];
function SearchPanelController($scope, dataservice) {
    $scope.filter = ""

    this.filterData = function () {
        if ($scope.filter == "") return;
    }
}


app.
    component('searchPanel', {
        template: '<div style="display:inline;">'
            + '<input ng-change="filterData()" ng-model="filter" class="form-control" type="text" placeholder="Search..." style="width:70%; display:inline; margin-right:15px;" ng-keypress="$event.keyCode == 13 ? $ctrl.addData() : null">'
            + '</div>',
        controller: SearchPanelController
    });