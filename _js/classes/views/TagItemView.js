var template = require('../../../_hbs/feedback_item.hbs');

var FeedbackItemView = Backbone.View.extend({
	template: template,
	tagName: 'li',

	events: {
		'click button': 'buttonToInput',
		'click li': 'editTag',
		'keydown #changedtoinput': 'changeThisTag',
	},

	changeThisTag: function(e){
		var modeeel = this.model;
		var input = $(e.currentTarget).val().toLowerCase();
		if (e.keyCode == 13 && this.$el.find('#changedtoinput').val() !== "") {
			e.preventDefault();
			if(input !== " " || input !== "" || input !== undefined){
				console.log(modeeel.get('tag'));
				modeeel.set('tag', input);
				modeeel.save();
				location.reload();
			}
		}
	},

	editTag: function(e){
		console.log(document.getElementById('changedtoinput'));
		if(e.target != document.getElementById('changedtoinput')) {
 		    console.log('You clicked outside.');    
 		} else {
 		    console.log('Display Contents');   
 		}
	},

	buttonToInput: function(e){
		// remove all other input fields
		var allinputs = document.querySelectorAll('#changedtoinput');
		for (var i = 0; i < allinputs.length; i++) {
			value = allinputs[i].defaultValue;
			var myButton = document.createElement("button");
			var myPara = document.createElement("p");
			myPara.innerText = value
			myButton.append(myPara);
			allinputs[i].parentNode.replaceChild(myButton, allinputs[i]);
		}

		// change button in to input field
		var button = this.$el[0];
		var myButton = button.querySelector("button");
  		var myInput = document.createElement("input");
  		myInput.setAttribute("type", "text");
  		myInput.setAttribute("id", "changedtoinput");
  		myInput.setAttribute('value', myButton.getElementsByTagName('p')[0].innerText);
  		myButton.parentNode.replaceChild(myInput, myButton);
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