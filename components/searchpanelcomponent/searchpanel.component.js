SearchPanelController.$inject = ['$scope', 'dataservice'];
function SearchPanelController($scope, dataservice) {
    $scope.query = "";

    this.filterData = function () {
        dataservice.setFilter($scope.query);
    }
}

app.
    component('searchPanel', {
        templateUrl: "components/searchpanelcomponent/searchpanel.template.html",
        controller: SearchPanelController
    });