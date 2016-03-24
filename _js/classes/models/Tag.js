var Tag = Backbone.Model.extend({

	defaults: {
		"box_name": "box name",
		"tag": "no feedback",
		"project_name": "",
		"project_id": null,
		"box_id": null
	},

	urlRoot: window.settings.httpRoot + "api/tags"

});

module.exports = Tag;