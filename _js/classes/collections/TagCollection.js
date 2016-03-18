var Tag = require('../models/Tag.js');

var TagCollection = Backbone.Collection.extend({

	model: Tag,
	url: window.settings.httpRoot + 'api/tags',

	initialize: function(options){
		if(options){
			this.id = options.project_id;
		}

	},

	array: [],

	boolean: false,

	// filterTags: function(query){
	// 	var array = this.array;
	// 	var boolean = this.boolean;
	// 	var input = [];
	// 	var html = [];

	// 	// for (var j = 0; j < document.getElementsByTagName('li').length; j++) {	

	// 	// 	// document.querySelectorAll('.tag li h2').className = 'hidden';

	// 	// 	// input.push(document.querySelectorAll('.tag li h2')[j].innerHTML);
	// 	// 	// html.push(document.querySelectorAll('.tag li h2')[j]);

	// 	// 	var rslt = $('.filter').val().split(" ");

	// 	// }

	// 	var str = String($('.filter').val());
	// 	// pattern = new RegExp("\\b" + str.replace(/ +/g, "\\b.*\\b") + "\\b", "i");
	// 	pattern = new RegExp("(?=.*" + str.replace(/ +/g, ")(?=.*") + ").*", "g");
	// 	// (?=.*flyer)(?=.*dedeyne).*
			
	// 	// for(i=0; i<input.length; i++) {

	// 	// 	console.log(input[i]);
	// 	// 	if(res=input[i].match(pattern)) {

	// 	// 		for (var k = 0; k < html.length; k++) {
	// 	// 			console.log(html[k]);
	// 	// 			html[k].classList.add('hidden');
	// 	// 			if (html[k].innerHTML === input[i]) {
	// 	// 				console.log(html[k]);
	// 	// 				html[k].classList.remove("hidden");
	// 	// 			}
	// 	// 		}
	// 	// 	}
	// 	// }

	// 	console.log(pattern);
	// 	// return this.filter(function(tag){
	// 	// 	var finaltag = tag.get('tag');
	// 	// 	var finalproject = tag.get('project_name');
	// 	// 	// return String(finaltag).match(pattern) || String(finalproject).match(pattern);
	// 	// 	return pattern.test(String(finaltag)));
	
	// 	// 	// return String(tag.get('tag')).toLowerCase().indexOf(query) > -1 || String(tag.get('project_name')).toLowerCase().indexOf(query) > -1;
	// 	// });

 // 		return this.filter(function(tag){
 //            return pattern.test(tag.get("tag")) || pattern.test(tag.get("project_name"));
 //        });
	// },

	filterTags: function(query){
		pattern = new RegExp("(?=.*" + query.replace(/ +/g, ")(?=.*") + ").*", "g");
		console.log(pattern);
		return this.filter(function(tag){
			return pattern.test(tag.get('tags_list'));
		});
	},

	// filterTags: function( query ) {
	// 	return this.filter(function(tag){

	// 		console.log('filter');


	// 		var inputs = query.split(" ");
	// 		for (var i = 0; i < inputs.length; i++) {

	// 			console.log(inputs[i]);
	// 			var musketeers = TagCollection.where({tag: inputs[i]});
	// 			alert(musketeers.length);


	// 			// if( !jQuery.isArray( tag.get('tag') ) && (tag.get('tag') - parseFloat( tag.get('tag') ) + 1) >= 0 ||  !jQuery.isArray( tag.get('project_name') ) && (tag.get('project_name') - parseFloat( tag.get('project_name') ) + 1) >= 0 ) {
	// 			// 	// console.log('do something else');
	// 			// 	console.log(String(tag.get('tag')).toLowerCase().indexOf(inputs[i]) > -1 || String(tag.get('project_name')).toLowerCase().indexOf(inputs[i]) > -1);
	// 			// } else {
	// 				return String(tag.get('tag')).toLowerCase().indexOf(inputs[i]) > -1 || String(tag.get('project_name')).toLowerCase().indexOf(inputs[i]) > -1;
	// 			// }
	// 		}


	// 		// for (var i = 0; i < tag.length; i++) {
	// 		// 	console.log(tag[i].get('tag'));
	// 		// }
	// 		// for (var i = 0; i < inputs.length; i++) {
	// 		// 	console.log(inputs[i]);
	// 		// }

	// 		// if(query.indexOf(' ') > -1){
 //   //  			console.log('contains space');
	// 		// }

	// 	});
	// },

	methodUrl: function(method){

		if(method === "read" && this.id){
			this.url = window.settings.httpRoot + 'api/tags/projects/' + this.id;
			return;
		}
		else{
			this.url = window.settings.httpRoot + 'api/tags/'
		}
	},

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	}

});

module.exports = TagCollection;