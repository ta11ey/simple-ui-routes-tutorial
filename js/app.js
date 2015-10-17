var app = angular.module('ui-Route-Example', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/')
	
	$stateProvider
		
		.state('cats', {
				url:'/cats',
				templateUrl:'js/templates/cats/mainCat.html',
				controller: 'mainCtrl'
			})
			.state('cats.happy', {
				url:'/happycat',
				templateUrl: 'js/templates/cats/happyCat.html'
			})
			.state('cats.grumpy', {
				url:'/grumpycat',
				templateUrl: 'js/templates/cats/grumpyCat.html'
			})
			.state('cats.bob', {
				url:'/bobcat',
				templateUrl: 'js/templates/cats/bobCat.html'
			})
			
		.state('dogs', {
				url:'/dogs',
				templateUrl:'js/templates/dogs/mainDog.html',
				controller: 'mainCtrl'
			})
				.state('dogs.taco', {
					url:'/tacodog',
					templateUrl: 'js/templates/dogs/tacoDog.html'
				})
				.state('dogs.hot', {
					url:'/hotdog',
					templateUrl: 'js/templates/dogs/hotDog.html'
				})
				.state('dogs.under', {
					url:'/underdog',
					templateUrl: 'js/templates/dogs/underDog.html'
				})
})