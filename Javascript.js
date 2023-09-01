var app = angular.module('studentApp', []);

app.controller('studentController', ['$scope', function($scope) {
  $scope.submit = function() {
    if ($scope.studentForm.$valid) {
      const formData = {
        name: $scope.Name,
        country: $scope.Country,
        email: $scope.Email,
        phone: $scope.Phone,
        message: $scope.Message
      };

      fetch('https://contactform139-api.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(responseData => {
        console.log('Response from server:', responseData);
        // Handle success here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error here
      });
    }
  };

  $scope.isFormInvalid = function() {
    return $scope.studentForm.$invalid;
  };

  $scope.reset = function() {
    $scope.Name = '';
    $scope.Country = '';
    $scope.Email = '';
    $scope.Phone = '';
    $scope.Message = '';

    $scope.studentForm.$setPristine();
    $scope.studentForm.$setUntouched();
  };
}]);
