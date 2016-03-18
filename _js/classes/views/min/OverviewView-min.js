var BoxCollection=require("../collections/BoxCollection.js"),TagCollection=require("../collections/TagCollection.js"),ProjectCollection=require("../collections/ProjectCollection.js"),StudentItemView=require("./BoxItemView.js"),ProjectItemView=require("./ProjectItemView.js"),template=require("../../../_hbs/overview.hbs"),OverviewView=Backbone.View.extend({template:template,tagName:"div",className:"overview",events:{"click .add":"clickAdd","click .home":"goHome"},array:[],goHome:function(e){Window.Application.navigate("intro",{trigger:!0}),location.reload()},clickAdd:function(e){if(e.preventDefault(),""!==this.$el.find(".name").val()){var t=this.collection;this.collection.create({name:this.$el.find(".name").val()},{success:function(e){var i=t.models[t.models.length-1];console.log(i),$.map(i.attributes,function(e,t){console.log(t+", "+e),"id"===t&&console.log(e)});var n=t.models[t.models.length-1].id;Window.Application.navigate("boxes/"+n,{trigger:!0})}}),this.$el.find(".name").val("")}},initialize:function(){this.collection=new BoxCollection,this.listenTo(this.collection,"sync",this.renderStudents),this.collection.fetch(),this.projectcollection=new ProjectCollection,this.listenTo(this.projectcollection,"sync",this.renderTags),this.projectcollection.fetch()},onlyUnique:function(e,t,i){return i.indexOf(e)===t},renderStudents:function(){this.$students.empty(),this.collection.forEach(this.renderStudent,this)},renderFilteredStudents:function(e){this.array.push(e[0].attributes.name);for(var t=0;t<this.array.length;t++){this.$students.empty();var i=this.array[t].filter(this.onlyUnique);console.log(i)}},renderStudent:function(e){var t=new StudentItemView({model:e});this.$students.append(t.render().el)},renderTags:function(){this.$tags.empty(),this.projectcollection.forEach(this.renderTag,this)},renderFilteredTags:function(e){for(var t=0;t<e.length;t++)var i=e[t].attributes.box_name;this.$tags.empty(),e.forEach(this.renderTag,this)},renderTag:function(e){var t=new ProjectItemView({model:e});this.$tags.append(t.render().el)},render:function(){return this.$el.html(this.template()),this.$students=this.$el.find(".box"),this.$tags=this.$el.find(".tag"),this.$el.find(".tag").hide(),this}});module.exports=OverviewView;