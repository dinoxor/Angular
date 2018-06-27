function MyFirstCtrl($scope) {
    // populate teh employees variables with some model data
    var employees = ['Chris Grant', 'Monica Grant', 'Chistopher Grant', 'Jennifer Grant'];

    //place model data into scope
    $scope.ourEmployees = employees;
};

