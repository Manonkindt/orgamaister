var template = require('../../../_hbs/feedback_item.hbs');

var FeedbackItemView = Backbone.View.extend({
	template: template,
	tagName: 'li',

	events: {
		// 'click .gone': 'clickDelete',
	},

	clickDelete: function(e){
		var modeeel = this.model;
		setTimeout(function(i){
			e.preventDefault();
			modeeel.destroy();
			location.reload();
		}, 100);
	},

	initialize: function(){
		// this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}

});

module.exports = FeedbackItemView;