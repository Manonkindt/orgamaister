var template = require('../../../_hbs/project_detail.hbs');
var Project = require('../models/Project.js');
var TagCollection = require('../collections/TagCollection.js');
var ProjectCollection = require('../collections/ProjectCollection.js');
var TagItemView = require('../views/TagItemView.js');

var ProjectDetailView = Backbone.View.extend({
	template: template,
	tagName: 'section',
	className: 'dozen',
	
	events: {
		'click .delete': 'clickDelete',
		'click .gone': 'removeFromTagsList',
		'click .remove': 'clickRemove',
		'click .add': 'clickAdd',
		'keydown .text': 'addTags',
		'click .home': 'goHome',
		'click .gotomybox': 'gotomybox'

	},

	array: [],

	booleancheck: false,

	goHome: function(e) {
		Window.Application.navigate("intro", {trigger: true});
		location.reload();
	},

	gotomybox: function(e) {
		e.preventDefault();
		Window.Application.navigate("boxes/" + this.model.get('box_id'), {trigger: true});
	},

	addTags: function(e){

		var input = $(e.currentTarget).val().toLowerCase();

    	if (e.keyCode == 32 && this.$el.find('.text').val() !== "") {

    		if(input !== " " || input !== "" || input !== undefined){
    			this.array.push(input);
    		}

    		// console.log('array ' + this.array);

			var res = input.split(" ");
			res = res.filter(Boolean);

			for (var i = 0; i < res.length; i++) {

				if(res[i] !== " "){

					var div = document.createElement("li");
					div.className = 'item inputwrapper';
					div.setAttribute('id', i);

	
        			var addtags = $('.addtags ul.inputwrap .taglist');
		
        			var span = document.createElement("span");
        			var t = document.createTextNode(res[i]);
        			span.appendChild(t); 
		
        			var spandelete = document.createElement("span");
        			spandelete.className = 'remove';
			
        			div.appendChild(span);
        			div.appendChild(spandelete);
        			addtags.append(div);
     //    			var form = document.getElementsByClassName('item input')[0];
					// form.parentNode.insertBefore(div, form);
	
					this.$el.find('.text').val("");
				}

			}


    	}
	},

	clickRemove: function(e){
		var id = $(e.currentTarget.parentNode).attr('id');
		var energy = this.array.join();
		var res = energy.split(' ');

		allIds = document.getElementsByClassName('item inputwrapper');

		var newArray = [];

		res.splice(id, 1);
		$(e.currentTarget.parentNode).remove();

		for (var i = 0; i < allIds.length; i++) {
			allIds[i].setAttribute('id', i);
			newArray.push(allIds[i].getElementsByTagName('span')[0].innerHTML);
		}

		this.array = newArray;

	},

	clickAdd: function(e){

		e.preventDefault();
		if(this.$el.find('.text').val() === "" && document.getElementsByClassName('item inputwrapper').length === 0 || this.$el.find('.text').val() === " " && document.getElementsByClassName('item inputwrapper').length === 0){
			return;
		}

		var test = this.array;
		var newitem = this.tag;
		var modeeel = this.model;


		if(this.$el.find('.text').val() === "" && document.getElementsByClassName('item inputwrapper').length === 0 || this.$el.find('.text').val() === " " && document.getElementsByClassName('item inputwrapper').length === 0){
			return;
		}

		if ( this.$el.find('.text').val() === " " ) {
		} else if(this.$el.find('.text').val() !== "") {
			test.push($('.addtags .text').val());
		}

      	var energy = test.join(' ');

      	if(document.getElementsByClassName('item inputwrapper').length !== 0){
      		for (var i = 0; i < test.length; i++) {

      			test[i] = test[i].replace(/\s+/g, " ");

      			newitem.create({
 					box_name: modeeel.get('box_name'),
      				tag: test[i],
      				project_name: modeeel.get('name'),
      				project_id: modeeel.get('id'),
      				box_id: modeeel.get('box_id')
            	}, {
            	    success: function(response){            		    
            	       	$( ".item.inputwrapper" ).remove();
            	    }
            	});

            	if ( modeeel.set('tags_list', modeeel.get('tags_list') + ', ' + test[i]) ) {
					modeeel.save();
            	    location.reload();
            	}
      		}
      	} else {

      		var newArray = energy.split(" ");
	
      		for (var i = 0; i < newArray.length; i++) {

      			newArray[i] = newArray[i].replace(/\s+/g, " ");
      			
      			newitem.create({
 					box_name: modeeel.get('box_name'),
      				tag: newArray[i],
      				project_name: modeeel.get('name'),
      				project_id: modeeel.get('id'),
      				box_id: modeeel.get('box_id')
            	}, {
            	    success: function(response){
            	       	$( ".item.inputwrapper" ).remove();
            	       	location.reload();
            	    }
            	});

            	if ( modeeel.set('tags_list', modeeel.get('tags_list') + ', ' + newArray[i]) ){
					modeeel.save();
            		location.reload();
            	}
      		}

      	}
	},

	changeScore: function(e){
		e.preventDefault();
		this.model.set('name', this.$el.find('.name').val());
		this.model.save();
	},

	removeFromTagsList: function(e){
		e.preventDefault();

		var removable = e.currentTarget.parentNode.getElementsByTagName('p')[0].innerHTML;

		var newTagsList = this.model.get('tags_list').replace(', ' + removable,'');
		this.model.set('tags_list', newTagsList);
		this.model.save();
	},

	clickDelete: function(e){
		e.preventDefault();

		document.getElementById("popup").className = "";

		var popup = document.getElementById("popup");


		var deletemodel = this.model;

		popup.getElementsByClassName('go')[0].addEventListener("click", function(a){
			a.preventDefault();

			deletemodel.destroy();

			$.ajax({
				type:"DELETE",
				url:window.settings.httpRoot + "api/tags/project/" + deletemodel.get('id'),
				success:function(response){
					if(response){
						// window.Application.navigate("home", {trigger: true});
					} else {
	
					}
				}
			});

			document.getElementById("popup").className = "hidden";

		});
	
		popup.getElementsByClassName('no')[0].addEventListener("click", function(o){
			o.preventDefault();
			document.getElementById("popup").className = "hidden";
		});
		// this.model.destroy();

	},

	initialize: function(options){

		if(options && options.id){
			this.model = new Project();
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
				project_id: options.id
			});
			this.tag.on('sync', this.renderAllTags, this);

		}
		
	},

	renderAllTags: function(){
		this.$tag.empty();
		this.tag.forEach(this.renderTag, this);
	},

	renderTag: function(tag){
		this.$tag.append(new TagItemView({model: tag}).render().el);
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		this.$tag = this.$el.find('.tagresults');

		this.tag.fetch();

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

module.exports = ProjectDetailView;