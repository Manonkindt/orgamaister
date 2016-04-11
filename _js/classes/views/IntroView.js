var BoxCollection = require('../collections/BoxCollection.js');
var TagCollection = require('../collections/TagCollection.js');
var ProjectCollection = require('../collections/ProjectCollection.js');
var StudentItemView = require('./BoxItemView.js');
var ProjectItemView = require('./ProjectItemView.js');

var template = require('../../../_hbs/introview.hbs');

var IntroView = Backbone.View.extend({

	template: template,
	tagName: 'div',
	className: 'intro',

	events: {
		'click .addButton': 'clickAdd',
		'input .filter': 'inputFilter',
		'click .list': 'gotolist'
	},

	array: [],

	gotolist: function(e){
		e.preventDefault();
		Window.Application.navigate("list" , {trigger: true});
	},

	inputFilter: function(e){
		e.preventDefault();
		var input = $(e.currentTarget).val().toLowerCase();
		if (input !== ""){
			this.$el.find('.addbox').hide();
			this.$el.find('.box').hide();
			this.$el.find('.tag').show();

			document.body.style.background = "rgba(255,255,255,1)";

			// this.$el.find('.white').hide();
			// this.$el.find('.white').removeClass("white");
			this.$el.find('.lamp').css("width", "20%");
			this.$el.find('.lamp').css("margin-top", "-167px");

			var inputs = input.split(" ");
			this.renderFilteredTags(this.projectcollection.filterTags(input));

			// inputs = inputs.filter(function(input) {
			//     return /\S/.test(input);
			// });

			// for (var i = 0; i < inputs.length; i++) {
   //  			this.renderFilteredTags(this.projectcollection.filterTags(inputs[i]));
			// }

		} else {
			// this.$el.find('.box').show();
			this.$el.find('.lamp').css("width", "40%");
			this.$el.find('.lamp').css("margin-top", "-365px");
			this.$el.find('.addbox').show();
			this.$el.find('.tag').hide();
			this.array = [];
			this.projectcollection.fetch();
		}
	},

	clickAdd: function(e){

		e.preventDefault();
		Window.Application.navigate("overview" , {trigger: true});
		
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
		$(window).scroll(this.detect_scroll);

	},

	onlyUnique: function(value, index, self) { 
    	return self.indexOf(value) === index;
	},

	detect_scroll: function() {
    	console.log('detected');
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

		this.$students.hide();
		this.$tags = this.$el.find('.tag');
		this.$el.find('.tag').hide();
		// this.$el.find('.white').css('display', 'flex');
		this.$el.find('.header').addClass = "white";
		this.$el.find('.form').addClass = "white";
		return this;

	}
	
});

module.exports = IntroView;