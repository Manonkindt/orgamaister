var Box = require('../models/Box.js');

var BoxCollection = Backbone.Collection.extend({
	
	model: Box,
	url:  window.settings.httpRoot + 'api/boxes',

	filterByBox: function(query){
		pattern = new RegExp("(^" + query + "|" + query + ")");

		return this.filter(function(box){
			var str = box.attributes.name.toLowerCase();
			return pattern.test(str);
		});
	}

});

module.exports = BoxCollection;
