var template = require('../../../_hbs/student_item.hbs');

var BoxItemView = Backbone.View.extend({

	template: template,
	tagName: 'li',

	events: {
		'change .name': 'changeScore',
		'click .detail': 'clickDetail'		
	},

	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
	},

	clickDetail: function(e){
		e.preventDefault();
		Window.Application.navigate("boxes/" + this.model.get('id'), {trigger: true});
	},

	changeScore: function(e){
		e.preventDefault();
		this.model.set('name', this.$el.find('.name').val());
		this.model.save();
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
	
});

module.exports = BoxItemView;