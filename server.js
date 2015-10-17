var express = 		require('express'),
 	bodyParser = 	require('body-parser'),
 	cors = 			require('cors'),
 	mongoose = 		require('mongoose'),
 	port = 8080;
	 
	 
var app = express().use(express.static(__dirname + '/'));


app.use(bodyParser.json());
app.use(cors());


app.listen(port, function(){
		console.log('your humble server on port ' + port)
})