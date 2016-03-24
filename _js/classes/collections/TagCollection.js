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


	filterTags: function(query){
		pattern = new RegExp("(?=.*" + query.replace(/ +/g, ")(?=.*") + ").*", "g");
		return this.filter(function(tag){
			return pattern.test(tag.get('tags_list'));
		});
	},

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