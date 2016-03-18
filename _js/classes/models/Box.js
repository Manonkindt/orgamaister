var Box = Backbone.Model.extend({

	defaults: {
		"name": "",
	},
	//model apart gebruiken, route meegeven

	urlRoot: window.settings.httpRoot + 'api/boxes'
});

module.exports = Box;