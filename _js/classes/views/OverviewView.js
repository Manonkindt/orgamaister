var BoxCollection = require('../collections/BoxCollection.js');
var TagCollection = require('../collections/TagCollection.js');
var ProjectCollection = require('../collections/ProjectCollection.js');
var BoxItemView = require('./BoxItemView.js');
var ProjectItemView = require('./ProjectItemView.js');

var template = require('../../../_hbs/overview.hbs');

var OverviewView = Backbone.View.extend({

	template: template,
	tagName: 'div',
	className: 'overview',

	events: {
		'input .name': 'inputFilter',
		'click .add' : 'clickAdd',
		'click .home': 'goHome',
	},

	array: [],

	goHome: function(e) {
		Window.Application.navigate("intro", {trigger: true});
		location.reload();
	},

	inputFilter: function(e){
		e.preventDefault();

		var input = $(e.currentTarget).val().toLowerCase();
		if (input !== ""){
			this.renderFilteredBoxes(this.collection.filterByBox(input));

		} else {
			
			this.$el.find('.add').hide();
			this.$el.find('.optionHeader').show();

			this.array = [];
			this.collection.fetch();
		}
	},

	clickAdd: function(e){

		e.preventDefault();

		if(this.$el.find('.name').val() === "" ){
			return;
		}


		var collect = this.collection;
		
		this.collection.create({
      		name: this.$el.find('.name').val(),
		}, {
			success: function(response){
				var test = collect.models[collect.models.length-1];
		
				$.map(test.attributes, function(val, key) { 
					if(key === 'id'){
					}
				}); //returns ["val1", "val2"]
		
				var newId = collect.models[collect.models.length-1].id;
				// console.log(newId);
				Window.Application.navigate("boxes/" + newId, {trigger: true});
			}
		});

		this.$el.find('.name').val("");

	},

	initialize: function(){

		this.collection = new BoxCollection();
		this.listenTo(this.collection, 'sync', this.renderBoxes);
		this.collection.fetch();

		// this.filtercollection = new TagCollection();
		// this.listenTo(this.filtercollection, 'sync', this.renderTags);
		// this.filtercollection.fetch();

		this.projectcollection = new ProjectCollection();
		this.listenTo(this.projectcollection, 'sync', this.renderTags);
		this.projectcollection.fetch();
	},

	renderBoxes: function(){
		this.$boxes.empty();
		this.collection.forEach(this.renderBox, this);
	},

	onlyUnique: function(value, index, self) { 
    	return self.indexOf(value) == index;
	},

	renderFilteredBoxes: function(boxes){
		console.log('renderFilteredBoxes');
		console.log(boxes.length);
		// if(boxes.length >= 0) {
		// 	console.log('boxes');
		// 	for (var i = this.collection.models.length - 1; i >= 0; i--) {
		// 		// console.log(this.collection.models[i].get('name'));
		// 		if (this.$el.find('.name').val() === this.collection.models[i].get('name')) {
		// 			console.log('exists');
		// 			this.$el.find('.add').hide();
		// 			return;
		// 		} else {
		// 			// console.log('new => add?');
		// 			this.$el.find('.add').show();
		// 			continue;
		// 		}
		// 	}	

			if(boxes.length <= 0){
				console.log('new => add?');
				this.$el.find('.add').show();
				this.$el.find('.optionHeader').hide();
			} else if (boxes.length > 0){
				console.log('exists');
				this.$el.find('.optionHeader').show();
				this.$el.find('.add').hide();
			}

		// }

		for (var i = 0; i < boxes.length; i++) {
			var input = boxes[i].attributes['name'];
			// this.renderFilteredStudents(this.collection.filterBoxes(input));
		}

		this.$boxes.empty();
		boxes.forEach(this.renderBox, this);
	},

	renderBox: function(model){

		var view = new BoxItemView({
			model: model
		});

		this.$boxes.append(view.render().el);
		
	},


	render: function(){

		this.$el.html(this.template());
		this.$boxes = this.$el.find('.box');

		this.$el.find('.add').hide();
		this.$el.find('.optionHeader').show();


		this.$tags = this.$el.find('.tag');
		this.$el.find('.tag').hide();

		return this;

	}
});

module.exports = OverviewView;