var OverviewView = require('../views/OverviewView.js');
var BoxDetailView = require('../views/BoxDetailView.js');
var ProjectDetailView = require('../views/ProjectDetailView.js');
var IntroView = require('../views/IntroView.js');
var Application = Backbone.Router.extend({

	routes: {
		"overview":"overview",
		"intro":"intro",
		"boxes/:id":"boxes",
		"projects/:id":"projects",
		"*actions":"default"
	},

	empty: function(){
		$('.container').empty();
	},

	default: function(){
		this.navigate('intro', {trigger: true});
	},

	overview: function(){
		this.empty();
		this.overview = new OverviewView();
		$('.container').append(this.overview.render().el);
	},

	intro: function() {
		this.empty();
		this.intro = new IntroView();
		$('.container').append(this.intro.render().el);
	},

	boxes: function(id){
		this.empty(); //cleart schoon uw container zodat je proper kan beginnen
		this.box = new BoxDetailView({
			id: id
		});
		$('.container').append(this.box.render().el);
	},

	projects: function(id){
		this.empty(); //cleart schoon uw container zodat je proper kan beginnen
		this.project = new ProjectDetailView({
			id: id
		});
		$('.container').append(this.project.render().el);
	}

});

module.exports = Application;

//kijken naar welke pagina we gaan en weergeven op scherm