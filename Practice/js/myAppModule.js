//Craete a new module
var myAppModule = angular.module('myAppModule',[]);

myAppModule.filter('stripDashes', function(){
    return function(txt){
        return txt.split('-').join(' ');
    };
});

myAppModule.filter('toTitleCase', function(){
    return function (str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
});

myAppModule.controller('MyFilterDemoCtrl',function($scope) {
    var employees = ['Chris Grant', 'Monica Grant', 'Chistopher Grant', 'Jennifer Grant'];

    var someData= {
        firstName: 'JENNA',
        surname: 'GRANT',
        dateJoined: new Date(2010, 2, 23),
        consumption: 123.456789,
        plan: 'super-basic-plan',
        monthlyUsageHistory: [123.659855,
                                89.645222,
                                97.235644,
                                129.555555,
                                188.699855,
                                65.652545,
                                123.659855,
                                89.645222,
                                97.235644,
                                129.55555,
                                188.699855,
                                65.652545]
    };

    //place model data into scope
    $scope.ourEmployees = employees;
    $scope.data = someData;

   

    }
);

//or 
angular.module('myAppModule').controller('MyFilterDemoctrl', function($scope)
{
    //controller code here
})


