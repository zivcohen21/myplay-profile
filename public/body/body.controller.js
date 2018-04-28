angular.module('body', []);
function BodyController ($scope, $http, $location) {

    $scope.update = false;

    $scope.getDetails = function () {
        $http.get('api/getDetails').success(function(data) {
            console.log('success: ' + data.name);
            $scope.user = data;

        })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.setDetails = function () {

        var userDetails = {
            name: document.getElementById("name").value,
            lastName: document.getElementById("lastName").value,
            password: document.getElementById("password").value,
            newPassword: document.getElementById("newPassword").value,
            phone: document.getElementById("phone").value
        };
        $http.post('api/setDetails', userDetails)
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.updatePic = function () {
        $scope.update = !$scope.update;
    };

    $scope.fileSelected = function () {
        $scope.isFileSelected = true;
    }

}

