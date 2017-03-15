//$scope variable added as paramter to controller function
//this is where we assign all our controller variables and make them
//available within the #content DIV
app.controller("MainController", function($scope){
  $scope.understand = "I now understand how the scope works!";
});

