var Tag = Backbone.Model.extend({

	defaults: {
		"box_name": "box name",
		"tag": "no feedback",
		"project_name": "",
		"project_id": null,
		"box_id": null
	},

	urlRoot: window.settings.httpRoot + "api/tags",

	/*methodUrl: function(method){
		if(method === "read" && this.student_id){
			this.url = '/RMD2/week3/student/api/feedback/students/' + this.student_id;
			return;
		}	
		this.url = '/RMD2/week3/student/api/feedback';
	},

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	}*/

});

module.exports = Tag;