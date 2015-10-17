# simple-ui-routes-tutorial
Welcome to my simple introduction to UI Routes! If you clone the files and start the server you will have a working example of nested UI Routes! (make sure you remember to install the dependencies if you haven't already)

 The general community is moving to UI-routes from Ng-routes because of the ability to create nested and sister routes.

This tutorial will walk you through the steps to set up a simple app that has nested routes.

Feel free to message me with any questions, This is my first tutorial so I am open to any feedback. 


# Things To Know

  -How to set up a server
  
  -Basic angular
  
  -basic JS
  
# 1. Set up the server
       Install the dependencies
         1. npm init to create your package.json
         2. go to your terminal and install the dependencies with npm install --save 'dependencies'
                 *express
                 *cors
                 *body-parser
         3. test 
#2. Create index.html 
     1.Remember to include your ng-app name in your <html> tag
     2. include your <script> tags to link to your angular app files
     3. angular and Ui-Router CDN
          <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>
     4. Insert your base <ui-viw></ui-view tag in your <body> tag
           the location you enter this tag is the place in you html that the template you load in your route will show.
#3. Create app.js
     1. Set up your app and inject 'ui.router' after your app name
     2. Make $stateProvider the parameter of the callback function in app.config
 
#4. TEST!!!
    Make sure that your app is opening in your browser and all the necessary files are being found!
    You can also take this time to creat the two button that we'll be clicking to take us to the two parent routes

#5. Setting up the Main Routes
    now the fun part.
    1. on the $stateProvider object, we want to give a .state function
    2. Inside of this function the first parameter we give it will be the name of the route (you'll see in just a sec what this does.)
    3. The second parameter of .state is an object with 3 properties we'll be dealing with for now 
         url:
         templateUrl:
         controller:
    4. The 'url:'   is the href we will link to from our link in the html
    5. templateUrl: is going to be the actual file we want to serve up when the url is hit. Make sure you are navigating to this from wherever you declare your ng-app.
    6. And finally the controller: is the controller we want to use for each route.

#6. Setting up Child Routes
    This is where Ui-router really begins to shine.
    1. create another .state property and instead of a completely new name in the first parameter attach your new child route onto the parent route your wish like so  'parentroute.childroute'.
    2. voila!
    3. this route will now change the view in the <ui-view> in the html of the of the parent route
    4. anything that you attach to that parent route will subsequently change the <ui-view> of that route

#7. Setting up other main routes
     1. To create other main routes, instead of attaching to the parent route, when you declare the new '.state' just use a new 'name'!
