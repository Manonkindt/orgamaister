var template=require("../../../_hbs/project_detail.hbs"),Project=require("../models/Project.js"),TagCollection=require("../collections/TagCollection.js"),ProjectCollection=require("../collections/ProjectCollection.js"),TagItemView=require("../views/TagItemView.js"),ProjectDetailView=Backbone.View.extend({template:template,tagName:"section",className:"dozen",events:{"click .delete":"clickDelete","click .gone":"removeFromTagsList","click .remove":"clickRemove","click .add":"clickAdd","keydown .text":"addTags","click .home":"goHome"},array:[],booleancheck:!1,goHome:function(e){Window.Application.navigate("intro",{trigger:!0}),location.reload()},addTags:function(e){var t=$(e.currentTarget).val().toLowerCase();if(32==e.keyCode&&""!==this.$el.find(".text").val()){console.log(t),(" "!==t||""!==t||void 0!==t)&&this.array.push(t);var n=t.split(" ");n=n.filter(Boolean);for(var a=0;a<n.length;a++)if(" "!==n[a]){var i=document.createElement("li");i.className="item inputwrapper",i.setAttribute("id",a);var l=$(".addtags ul.inputwrap .taglist"),o=document.createElement("span"),s=document.createTextNode(n[a]);o.appendChild(s);var r=document.createElement("span");r.className="remove",i.appendChild(o),i.appendChild(r),l.append(i),this.$el.find(".text").val("")}}},clickRemove:function(e){var t=$(e.currentTarget.parentNode).attr("id"),n=this.array.join(),a=n.split(" ");console.log(a),allIds=document.getElementsByClassName("item inputwrapper");var i=[];a.splice(t,1),$(e.currentTarget.parentNode).remove();for(var l=0;l<allIds.length;l++)allIds[l].setAttribute("id",l),console.log(allIds[l]),i.push(allIds[l].getElementsByTagName("span")[0].innerHTML);this.array=i,console.log("array "+this.array)},clickAdd:function(e){if(e.preventDefault(),console.log(document.getElementsByClassName("item inputwrapper").length,this.$el.find(".text").val()),!(""===this.$el.find(".text").val()&&0===document.getElementsByClassName("item inputwrapper").length||" "===this.$el.find(".text").val()&&0===document.getElementsByClassName("item inputwrapper").length)){var t=this.array,n=this.tag,a=this.model;if(!(""===this.$el.find(".text").val()&&0===document.getElementsByClassName("item inputwrapper").length||" "===this.$el.find(".text").val()&&0===document.getElementsByClassName("item inputwrapper").length)){" "===this.$el.find(".text").val()?console.log("gow jong"):""!==this.$el.find(".text").val()&&t.push($(".addtags .text").val());var i=t.join(" ");if(0!==document.getElementsByClassName("item inputwrapper").length)for(var l=0;l<t.length;l++)t[l]=t[l].replace(/\s+/g," "),n.create({box_name:a.get("box_name"),tag:t[l],project_name:a.get("name"),project_id:a.get("id"),box_id:a.get("box_id")},{success:function(e){$(".item.inputwrapper").remove()}}),a.set("tags_list",a.get("tags_list")+", "+t[l])&&(a.save(),location.reload());else for(var o=i.split(" "),l=0;l<o.length;l++)o[l]=o[l].replace(/\s+/g," "),n.create({box_name:a.get("box_name"),tag:o[l],project_name:a.get("name"),project_id:a.get("id"),box_id:a.get("box_id")},{success:function(e){$(".item.inputwrapper").remove(),location.reload()}}),a.set("tags_list",a.get("tags_list")+", "+o[l])&&(a.save(),location.reload())}}},changeScore:function(e){e.preventDefault(),this.model.set("name",this.$el.find(".name").val()),this.model.save()},removeFromTagsList:function(e){e.preventDefault();var t=e.currentTarget.parentNode.getElementsByTagName("p")[0].innerHTML;console.log(t);var n=this.model.get("tags_list").replace(", "+t,"");console.log(n),this.model.set("tags_list",n),this.model.save()},clickDelete:function(e){e.preventDefault(),document.getElementById("popup").className="";var t=document.getElementById("popup");console.log(t.getElementsByClassName("go"));var n=this.model;t.getElementsByClassName("go")[0].addEventListener("click",function(e){e.preventDefault(),console.log("delete this"),n.destroy(),$.ajax({type:"DELETE",url:window.settings.httpRoot+"api/tags/project/"+n.get("id"),success:function(e){e?console.log("this went right"):console.log("something is wrong")}}),document.getElementById("popup").className="hidden"}),t.getElementsByClassName("no")[0].addEventListener("click",function(e){e.preventDefault(),console.log("do nothing"),document.getElementById("popup").className="hidden"})},initialize:function(e){console.log(e),e&&e.id&&(this.model=new Project,this.model.on("destroy",function(){Window.Application.navigate("overview",{trigger:!0})}),this.model.set("id",e.id),this.model.fetch({success:function(e,t){0===t.length&&Window.Application.navigate("overview",{trigger:!0})}}),this.listenTo(this.model,"sync",this.render),this.tag=new TagCollection({project_id:e.id}),this.tag.on("sync",this.renderAllTags,this))},renderAllTags:function(){this.$tag.empty(),this.tag.forEach(this.renderTag,this)},renderTag:function(e){this.$tag.append(new TagItemView({model:e}).render().el)},render:function(){return this.$el.html(this.template(this.model.attributes)),this.$tag=this.$el.find(".tagresults"),this.tag.fetch(),this}},{levenshtein_distance_a:function(e,t){if(0==e.length)return t.length;if(0==t.length)return e.length;var n=[],a;for(a=0;a<=t.length;a++)n[a]=[a];var i;for(i=0;i<=e.length;i++)n[0][i]=i;for(a=1;a<=t.length;a++)for(i=1;i<=e.length;i++)t.charAt(a-1)==e.charAt(i-1)?n[a][i]=n[a-1][i-1]:n[a][i]=Math.min(n[a-1][i-1]+1,Math.min(n[a][i-1]+1,n[a-1][i]+1));return n[t.length][e.length]}});module.exports=ProjectDetailView;