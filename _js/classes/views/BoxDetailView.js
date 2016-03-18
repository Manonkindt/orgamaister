var template = require('../../../_hbs/student_detail.hbs');
var Box = require('../models/Box.js');
var TagCollection = require('../collections/TagCollection.js');
var ProjectCollection = require('../collections/ProjectCollection.js');
var TagItemView = require('../views/TagItemView.js');
var ProjectItemView = require('../views/ProjectItemView.js');

var BoxDetailView = Backbone.View.extend({
	template: template,
	tagName: 'section',
	className: 'dozen',
	
	events: {
		'click .delete': 'clickDelete',
		'click .addproject': 'clickAddproject',
		'click .home': 'goHome'
	},

	array: [],

	booleancheck: false,

	goHome: function(e) {
		Window.Application.navigate("intro", {trigger: true});
		location.reload();
	},

	clickAddproject: function(e){
		e.preventDefault();
		if(this.$el.find('.textproject').val() === ""){
			return;
		}

		var projeeect = this.project;

		this.project.create({
      		name: this.$el.find('.textproject').val(),
      		box_id: this.model.get('id'),
      		box_name: this.model.get('name'),
      		tags_list: this.$el.find('.textproject').val()
		}, {
			success: function(response){
				var test = projeeect.models[projeeect.models.length-1];
				console.log(test);
		
				$.map(test.attributes, function(val, key) { 
					console.log(key + ', ' + val); 
					if(key === 'id'){
						console.log(val);
					}
				}); //returns ["val1", "val2"]
		
				var newId = projeeect.models[projeeect.models.length-1].id;
				// console.log(newId);
				Window.Application.navigate("projects/" + newId, {trigger: true});
			}
		});
		this.$el.find('.textproject').val("");
	},

	clickDelete: function(e){
		e.preventDefault();
		this.model.destroy();
	},

	initialize: function(options){

		if(options && options.id){
			this.model = new Box();
			this.model.on('destroy', function(){
				Window.Application.navigate('overview', {trigger: true});
			});
			this.model.set('id', options.id);
			this.model.fetch({
				success: function(model, response){
					if(response.length === 0){
						Window.Application.navigate('overview', {trigger: true});
					}
				}
			});
			this.listenTo(this.model, "sync", this.render);

			this.tag = new TagCollection({
				box_id: options.id
			});
			this.tag.on('sync', this.renderAllTags, this);

			this.project = new ProjectCollection({
				box_id: options.id
			});
			this.project.on('sync', this.renderAllProjects, this);
		}
		
	},

	renderAllTags: function(){
		this.$tag.empty();
		this.tag.forEach(this.renderTag, this);
	},

	renderTag: function(tag){
		this.$tag.append(new TagItemView({model: tag}).render().el);
	},

	renderAllProjects: function(){
		this.$project.empty();
		this.project.forEach(this.renderProject, this);
	},

	renderProject: function(project){
		this.$project.append(new ProjectItemView({model: project}).render().el);
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		this.$tag = this.$el.find('.tagresults');
		this.$project = this.$el.find('.results');

		this.tag.fetch();
		this.project.fetch();

		return this;
	}

}, {
	levenshtein_distance_a: function (a, b) {
      if(a.length == 0) return b.length; 
      if(b.length == 0) return a.length; 
    
      var matrix = [];
    
      // increment along the first column of each row
      var i;
      for(i = 0; i <= b.length; i++){
        matrix[i] = [i];
      }
    
      // increment each column in the first row
      var j;
      for(j = 0; j <= a.length; j++){
        matrix[0][j] = j;
      }
    
      // Fill in the rest of the matrix
      for(i = 1; i <= b.length; i++){
        for(j = 1; j <= a.length; j++){
          if(b.charAt(i-1) == a.charAt(j-1)){
            matrix[i][j] = matrix[i-1][j-1];
          } else {
            matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                    Math.min(matrix[i][j-1] + 1, // insertion
                                             matrix[i-1][j] + 1)); // deletion
          }
        }
      }
    
      return matrix[b.length][a.length];
    },
});

module.exports = BoxDetailView;