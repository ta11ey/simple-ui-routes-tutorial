angular.module('ui-Route-Example').controller('mainCtrl', function($scope, $location){
	$scope.isActive = function(route) {
        						return route === $location.path();
							}


	$scope.toggle1=true;
	$scope.toggle2=false;
	
	$scope.buttonToggle1=function(){
							$scope.toggle1=true;
							$scope.toggle2=false;
	}
	$scope.buttonToggle2=function(){
							$scope.toggle2=true;
							$scope.toggle1=false;
	}})
	
	