// var Handlebars = require("hbsfy/runtime");
// var Application = require('./classes/routers/Application.js')

// // function init() {
// // 	Window.Application = new Application();
// // 	Backbone.history.start(); //router aanmaken en starten

// // 	var collection = new FeedbackCollection({
// // 		box_id: 1
// // 	});

// // 	collection.fetch();
// // }


// function init() {
// 	console.log($.getJSON('settings.php'));
// 	$.getJSON('settings.php').done(function(result){
// 		Window.settings = result;
// 		Window.Application = new Application()
// 		Backbone.history.start()
// 	});
// }

// init();

fallback.load({
	jQuery: [
		'//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
		'js/vendor/jquery.min.js'
	],
	'$.fn.modal': [
		'//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js',
		'js/vendor/bootstrap.min.js'
	]
	
}, {
	shim: {
		'$.fn.modal': ['jQuery'],
		'lazy': ['jQuery'],
		'extra': ['jQuery'],
	}
});

fallback.ready(function(){
});

var Handlebars = require("hbsfy/runtime");


function init() {
	$.getJSON('settings.php').done(function(result){
		window.settings = result;
		var Application = require('./classes/routers/Application.js');
		Window.Application = new Application();
		Backbone.history.start();
	});
}

init();