var Box = require('../models/Box.js');

var BoxCollection = Backbone.Collection.extend({
	
	model: Box,
	url:  window.settings.httpRoot + 'api/boxes'

});

module.exports = BoxCollection;
