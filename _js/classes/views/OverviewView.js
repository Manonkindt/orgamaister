var BoxCollection = require('../collections/BoxCollection.js');
var TagCollection = require('../collections/TagCollection.js');
var ProjectCollection = require('../collections/ProjectCollection.js');
var StudentItemView = require('./BoxItemView.js');
var ProjectItemView = require('./ProjectItemView.js');

var template = require('../../../_hbs/overview.hbs');

var OverviewView = Backbone.View.extend({

	template: template,
	tagName: 'div',
	className: 'overview',

	events: {
		'click .add': 'clickAdd',
		'click .home': 'goHome'

	},

	array: [],

	goHome: function(e) {
		Window.Application.navigate("intro", {trigger: true});
		location.reload();
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
		this.listenTo(this.collection, 'sync', this.renderStudents);
		this.collection.fetch();

		// this.filtercollection = new TagCollection();
		// this.listenTo(this.filtercollection, 'sync', this.renderTags);
		// this.filtercollection.fetch();

		this.projectcollection = new ProjectCollection();
		this.listenTo(this.projectcollection, 'sync', this.renderTags);
		this.projectcollection.fetch();
	},

	onlyUnique: function(value, index, self) { 
    	return self.indexOf(value) === index;
	},

	renderStudents: function(){
		this.$students.empty();
		this.collection.forEach(this.renderStudent, this);
	},

	renderFilteredStudents: function(students){
		this.array.push(students[0].attributes['name']);
		// console.log(students[0].attributes['name']);
		// console.log('array = ' + this.array);


		for (var i = 0; i < this.array.length; i++) {
			// array[i]
			this.$students.empty();
			var unique = this.array[i].filter( this.onlyUnique );
			console.log(unique);
			// this.array[i].forEach(this.renderStudent, this);
		}
		// this.$students.empty();
		
	},

	renderStudent: function(model){

		var view = new StudentItemView({
			model: model
		});

		this.$students.append(view.render().el);
		
	},


	renderTags: function(){
		this.$tags.empty();
		this.projectcollection.forEach(this.renderTag, this);
	},

	renderFilteredTags: function(tags){

		for (var i = 0; i < tags.length; i++) {
			var input = tags[i].attributes['box_name'];
			// this.renderFilteredStudents(this.collection.filterBoxes(input));
		}

		this.$tags.empty();
		tags.forEach(this.renderTag, this);
	},

	renderTag: function(model){

		var view = new ProjectItemView({
			model: model
		});

		this.$tags.append(view.render().el);
		
	},

	render: function(){

		this.$el.html(this.template());
		this.$students = this.$el.find('.box');

		this.$tags = this.$el.find('.tag');
		this.$el.find('.tag').hide();

		return this;

	}
	
});

module.exports = OverviewView;