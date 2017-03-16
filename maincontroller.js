//$scope variable added as paramter to controller function
//this is where we assign all our controller variables and make them
//available within the #content DIV
app.controller("MainController", function($scope){
  $scope.selectedPerson = 0;
  $scope.selectedGenre = null;
  $scope.people = [
    { id: 0, name: 'Roy', music: ['Hip Hop', 'Rock', 'EDM' ], live: true },
    { id: 1, name: 'Harold', music: ['K-Pop' ], live: false },
    { id: 2, name: 'Alex', music: ['Hip Hop', 'Rock', '80s' ], live: true },
    { id: 3, name: 'Chang', music: ['Hip Hop', 'Rock' ], live: true },
    { id: 4, name: 'Steve', music: ['Hip Hop', 'Pop', 'EDM'], live: true }
  ];
  $scope.newPerson = null;
  $scope.addNew = function(){
    if($scope.newPerson != null && $scope.newPerson != ""){
      $scope.people.push({ id: $scope.people.length, name: $scope.newPerson, live: true, music: [] });
    }
  }
  $scope.removeLast = function(){
    $scope.people.splice(-1,1);
  }
});

