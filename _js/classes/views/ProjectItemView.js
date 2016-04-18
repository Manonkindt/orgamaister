var template = require('../../../_hbs/project_item.hbs');

var ProjectItemView = Backbone.View.extend({
	template: template,
	tagName: 'li',
	className: 'anim fadeInUp',

	events: {
		// 'click .delete': 'clickDelete',
		// 'click .tagdetail': 'clickDetail',
		'click .detail': 'clickDetail',
		'click .listdetail': 'clickDetail',
		'click .boxdetail': 'projDetail',
		'click .box_detail': 'boxDetail',
		'click .proj_detail': 'projDetail'
	},

	clickDelete: function(e){
		e.preventDefault();
		this.model.destroy();
	},

	clickDetail: function(e){
		e.preventDefault();
		Window.Application.navigate("projects/" + this.model.get('id'), {trigger: true});
	},

	projDetail: function(e){
		e.preventDefault();
		Window.Application.navigate("projects/" + this.model.get('id'), {trigger: true});
	},

	boxDetail: function(e){
		e.preventDefault();
		Window.Application.navigate("boxes/" + this.model.get('box_id'), {trigger: true});
	},

	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		this.$el.attr('data-wow-delay', 's');
		this.$el.find('a').addClass('effect-sarah');
		return this;
	}

});

module.exports = ProjectItemView;