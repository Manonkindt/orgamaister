var Project = Backbone.Model.extend({

	defaults: {
		"box_id": null,
		"name": "",
		"box_name": "",
		"tags_list": ""
	},
	//model apart gebruiken, route meegeven

	urlRoot: window.settings.httpRoot + 'api/projects'
});

module.exports = Project;