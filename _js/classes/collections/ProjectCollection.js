var Project = require('../models/Project.js');

var ProjectCollection = Backbone.Collection.extend({
	
	model: Project,
	url: window.settings.httpRoot + 'api/projects',

	initialize: function(options){
		if(options){
			this.box_id = options.box_id;
		}
	},

	filterTags: function(query){
		pattern = new RegExp("(?=.*" + query.replace(/ +/g, ")(?=.*") + ").*", "g");
		return this.filter(function(tag){
			return pattern.test(tag.get('tags_list').toLowerCase());
		});
	},

	// filterByClient: function(query){
	// 	pattern = new RegExp("(?=.*" + query.replace(/ +/g, ")(?=.*") + ").*", "g");
	// 	return this.filter(function(tag){
	// 		return pattern.test(tag.get('name').toLowerCase());
	// 	});
	// },

	filterByClient: function(query){
		pattern = new RegExp("(^" + query + "| " + query + ")", "g");		
		return this.filter(function(tag){
			var res = tag.get('name').toLowerCase().split(" ");
			return pattern.test(tag.get('name').toLowerCase());
		});
	},

	methodUrl: function(method){

		if(method === "read" && this.box_id){
			this.url = window.settings.httpRoot + 'api/projects/boxes/' + this.box_id;
			return;
		}
		else{
			this.url = window.settings.httpRoot + 'api/projects/'
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

module.exports = ProjectCollection;
