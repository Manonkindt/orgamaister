!function e(t,n,i){function o(s,r){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!r&&l)return l(s,!0);if(a)return a(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[s]={exports:{}};t[s][0].call(d.exports,function(e){var n=t[s][1][e];return o(n?n:e)},d,d.exports,e,t,n,i)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o,a=t.helperMissing,s="function",r=this.escapeExpression;return"<h2>"+r((o=null!=(o=t.box_name||(null!=e?e.box_name:e))?o:a,typeof o===s?o.call(e,{name:"box_name",hash:{},data:i}):o))+": "+r((o=null!=(o=t.project_name||(null!=e?e.project_name:e))?o:a,typeof o===s?o.call(e,{name:"project_name",hash:{},data:i}):o))+" - "+r((o=null!=(o=t.tag||(null!=e?e.tag:e))?o:a,typeof o===s?o.call(e,{name:"tag",hash:{},data:i}):o))+" </h2>\n<p>"+r((o=null!=(o=t.tag||(null!=e?e.tag:e))?o:a,typeof o===s?o.call(e,{name:"tag",hash:{},data:i}):o))+'</p>\n<a href="" class="gone"><img src="assets/close.svg" alt=""/></a>\n\n\n'},useData:!0})},{"hbsfy/runtime":31}],2:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="header white">\n    <aside>\n        <a href="#" class="home"><img src="assets/maister_logo.svg" alt=""/></a>\n    </aside>\n    <header>\n        <div class="blur hidden"></div>\n        <img class="lamp" src="assets/lamp_white.svg" alt=""/>\n    </header>\n     <aside>\n        <a href="#" class="addButton"><img src="assets/plus.svg" alt=""/></a>\n    </aside>\n    <header>\n        <h1><div></div>ORGAMAISTER<div></div></h1>\n    </header>\n</div>\n\n<form class="white form">\n   <input type="text" name="filter" placeholder="..." class="filter"/>\n</form>\n\n\n<table class="boxes">\n\n    <tbody class="box">\n    </tbody>\n\n    <tbody class="tag" data-wow-delay="1s">\n    </tbody>\n\n     <tbody class="project">\n    </tbody>\n\n</table>'},useData:!0})},{"hbsfy/runtime":31}],3:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="header">\n    <aside>\n        <a href="#" class="home"><img src="assets/Maister_logo_green.svg" alt=""/></a>\n    </aside>\n    <header>\n        <h1><div></div>ORGAMAISTER<div></div></h1>\n    </header>\n    <aside>\n        <a href="#" class="addButton"><img src="" alt=""/></a>\n    </aside>\n</div>\n\n<form>\n    <h2>Voeg een doos toe</h2>\n    <input type="text" name="name" class="name" value="" placeholder="..."/>\n    <input type="submit" value="klaar" class="add"/>\n</form>\n\n<table class="boxes">\n\n     <tbody class="box">\n    </tbody>\n\n</table>'},useData:!0})},{"hbsfy/runtime":31}],4:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o;return'<div class="header">\n    <aside>\n        <a href="#" class="home"><img src="assets/Maister_logo_green.svg" alt=""/></a>\n    </aside>\n    <header>\n        <h1><div></div>ORGAMAISTER<div></div></h1>\n    </header>\n    <aside>\n 		<a href="" class="delete"><img src="assets/close.svg" alt=""/></a>\n    </aside>\n</div>\n\n<form action="" method="post" class="addtags">\n    <h2>Voeg tags toe aan <span>'+this.escapeExpression((o=null!=(o=t.name||(null!=e?e.name:e))?o:t.helperMissing,"function"==typeof o?o.call(e,{name:"name",hash:{},data:i}):o))+'</span></h2>\n\n	<ul class="inputwrap">\n        <div class="taglist"></div>\n		<li class="item input">\n			<input type="text" name="text" class="name text" value="" autofocus="autofocus" placeholder="..." />\n		</li>\n	</ul>\n    <input type="submit" value="klaar" class="add addproject"/>\n</form>\n\n<section class="tags">\n\n	<ul class="tagresults" >\n		\n	</ul>\n\n</section>'},useData:!0})},{"hbsfy/runtime":31}],5:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o,a=t.helperMissing,s="function",r=this.escapeExpression;return'<a href="#" class="detail">\n	<h2>'+r((o=null!=(o=t.box_name||(null!=e?e.box_name:e))?o:a,typeof o===s?o.call(e,{name:"box_name",hash:{},data:i}):o))+"</h2>\n	<h3>"+r((o=null!=(o=t.name||(null!=e?e.name:e))?o:a,typeof o===s?o.call(e,{name:"name",hash:{},data:i}):o))+"</h3>\n	<p>"+r((o=null!=(o=t.tags_list||(null!=e?e.tags_list:e))?o:a,typeof o===s?o.call(e,{name:"tags_list",hash:{},data:i}):o))+'</p>\n</a>\n\n<a href="#" class="tagdetail">\n	<h2>'+r((o=null!=(o=t.name||(null!=e?e.name:e))?o:a,typeof o===s?o.call(e,{name:"name",hash:{},data:i}):o))+'</h2>\n	<h3>\n		tags\n		<img src="assets/arrow_green.svg" alt=""/>\n	</h3>\n</a>\n'},useData:!0})},{"hbsfy/runtime":31}],6:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o;return'<div class="header">\n    <aside>\n        <a href="#" class="home"><img src="assets/Maister_logo_green.svg" alt=""/></a>\n    </aside>\n    <header>\n        <h1><div></div>ORGAMAISTER<div></div></h1>\n    </header>\n    <aside>\n 		<a href="" class="delete"><img src="assets/close.svg" alt=""/></a>\n    </aside>\n</div>\n\n<form>\n    <h2>Voeg een project toe aan <span>'+this.escapeExpression((o=null!=(o=t.name||(null!=e?e.name:e))?o:t.helperMissing,"function"==typeof o?o.call(e,{name:"name",hash:{},data:i}):o))+'</span></h2>\n   <input type="text" name="text" class="name textproject" value="" placeholder="..." autofocus="autofocus"/>\n    <input type="submit" value="klaar" class="add addproject"/>\n</form>\n\n\n<section class="feedback">\n\n\n	<ul class="results" >\n		\n	</ul>\n</section>'},useData:!0})},{"hbsfy/runtime":31}],7:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o;return'<a href="#" class="detail">\n	<h2>'+this.escapeExpression((o=null!=(o=t.name||(null!=e?e.name:e))?o:t.helperMissing,"function"==typeof o?o.call(e,{name:"name",hash:{},data:i}):o))+'</h2>\n	<h3>\n		projecten \n		<img src="assets/arrow_black.svg" alt=""/>\n	</h3>\n</a>'},useData:!0})},{"hbsfy/runtime":31}],8:[function(e){function t(){$.getJSON("settings.php").done(function(t){window.settings=t;var n=e("./classes/routers/Application.js");Window.Application=new n,Backbone.history.start()})}fallback.load({jQuery:["//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js","js/vendor/jquery.min.js"],"$.fn.modal":["//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js","js/vendor/bootstrap.min.js"]},{shim:{"$.fn.modal":["jQuery"],lazy:["jQuery"],extra:["jQuery"]}}),fallback.ready(function(){});e("hbsfy/runtime");t()},{"./classes/routers/Application.js":15,"hbsfy/runtime":31}],9:[function(e,t){var n=e("../models/Box.js"),i=Backbone.Collection.extend({model:n,url:window.settings.httpRoot+"api/boxes"});t.exports=i},{"../models/Box.js":12}],10:[function(e,t){var n=e("../models/Project.js"),i=Backbone.Collection.extend({model:n,url:window.settings.httpRoot+"api/projects",initialize:function(e){e&&(this.box_id=e.box_id,console.log(e))},filterTags:function(e){return pattern=new RegExp("(?=.*"+e.replace(/ +/g,")(?=.*")+").*","g"),console.log(pattern),this.filter(function(e){return pattern.test(e.get("tags_list").toLowerCase())})},methodUrl:function(e){return"read"===e&&this.box_id?void(this.url=window.settings.httpRoot+"api/projects/boxes/"+this.box_id):void(this.url=window.settings.httpRoot+"api/projects/")},sync:function(e,t,n){t.methodUrl&&t.methodUrl(e.toLowerCase())&&(n=n||{},n.url=t.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});t.exports=i},{"../models/Project.js":13}],11:[function(e,t){var n=e("../models/Tag.js"),i=Backbone.Collection.extend({model:n,url:window.settings.httpRoot+"api/tags",initialize:function(e){e&&(this.id=e.project_id)},array:[],"boolean":!1,filterTags:function(e){return pattern=new RegExp("(?=.*"+e.replace(/ +/g,")(?=.*")+").*","g"),console.log(pattern),this.filter(function(e){return pattern.test(e.get("tags_list"))})},methodUrl:function(e){return"read"===e&&this.id?void(this.url=window.settings.httpRoot+"api/tags/projects/"+this.id):void(this.url=window.settings.httpRoot+"api/tags/")},sync:function(e,t,n){t.methodUrl&&t.methodUrl(e.toLowerCase())&&(n=n||{},n.url=t.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});t.exports=i},{"../models/Tag.js":14}],12:[function(e,t){var n=Backbone.Model.extend({defaults:{name:""},urlRoot:window.settings.httpRoot+"api/boxes"});t.exports=n},{}],13:[function(e,t){var n=Backbone.Model.extend({defaults:{box_id:null,name:"",box_name:"",tags_list:""},urlRoot:window.settings.httpRoot+"api/projects"});t.exports=n},{}],14:[function(e,t){var n=Backbone.Model.extend({defaults:{box_name:"box name",tag:"no feedback",project_name:"",project_id:null,box_id:null},urlRoot:window.settings.httpRoot+"api/tags"});t.exports=n},{}],15:[function(e,t){var n=e("../views/OverviewView.js"),i=e("../views/BoxDetailView.js"),o=e("../views/ProjectDetailView.js"),a=e("../views/IntroView.js"),s=Backbone.Router.extend({routes:{overview:"overview",intro:"intro","boxes/:id":"boxes","projects/:id":"projects","*actions":"default"},empty:function(){$(".container").empty()},"default":function(){this.navigate("intro",{trigger:!0})},overview:function(){this.empty(),this.overview=new n,$(".container").append(this.overview.render().el)},intro:function(){this.empty(),this.intro=new a,$(".container").append(this.intro.render().el)},boxes:function(e){this.empty(),this.box=new i({id:e}),$(".container").append(this.box.render().el)},projects:function(e){this.empty(),this.project=new o({id:e}),$(".container").append(this.project.render().el)}});t.exports=s},{"../views/BoxDetailView.js":16,"../views/IntroView.js":18,"../views/OverviewView.js":19,"../views/ProjectDetailView.js":20}],16:[function(e,t){var n=e("../../../_hbs/student_detail.hbs"),i=e("../models/Box.js"),o=e("../collections/TagCollection.js"),a=e("../collections/ProjectCollection.js"),s=e("../views/TagItemView.js"),r=e("../views/ProjectItemView.js"),l=Backbone.View.extend({template:n,tagName:"section",className:"dozen",events:{"click .delete":"clickDelete","click .addproject":"clickAddproject","click .home":"goHome"},array:[],booleancheck:!1,goHome:function(){Window.Application.navigate("intro",{trigger:!0}),location.reload()},clickAddproject:function(e){if(e.preventDefault(),""!==this.$el.find(".textproject").val()){var t=this.project;this.project.create({name:this.$el.find(".textproject").val(),box_id:this.model.get("id"),box_name:this.model.get("name"),tags_list:this.$el.find(".textproject").val()},{success:function(){var e=t.models[t.models.length-1];console.log(e),$.map(e.attributes,function(e,t){console.log(t+", "+e),"id"===t&&console.log(e)});var n=t.models[t.models.length-1].id;Window.Application.navigate("projects/"+n,{trigger:!0})}}),this.$el.find(".textproject").val("")}},clickDelete:function(e){e.preventDefault(),document.getElementById("popup").className="";var t=document.getElementById("popup");console.log(t.getElementsByClassName("go"));var n=this.model;t.getElementsByClassName("go")[0].addEventListener("click",function(e){e.preventDefault(),console.log("delete this"),n.destroy(),$.ajax({type:"DELETE",url:window.settings.httpRoot+"api/projects/box/"+n.get("id"),success:function(e){console.log(e?"this went right":"something is wrong")}}),$.ajax({type:"DELETE",url:window.settings.httpRoot+"api/tags/box/"+n.get("id"),success:function(e){console.log(e?"this went right":"something is wrong")}}),document.getElementById("popup").className="hidden",location.reload()}),t.getElementsByClassName("no")[0].addEventListener("click",function(e){e.preventDefault(),console.log("do nothing"),document.getElementById("popup").className="hidden"})},initialize:function(e){e&&e.id&&(this.model=new i,this.model.on("destroy",function(){Window.Application.navigate("overview",{trigger:!0})}),this.model.set("id",e.id),this.model.fetch({success:function(e,t){0===t.length&&Window.Application.navigate("overview",{trigger:!0})}}),this.listenTo(this.model,"sync",this.render),this.tag=new o({box_id:e.id}),this.tag.on("sync",this.renderAllTags,this),this.project=new a({box_id:e.id}),this.project.on("sync",this.renderAllProjects,this))},renderAllTags:function(){this.$tag.empty(),this.tag.forEach(this.renderTag,this)},renderTag:function(e){this.$tag.append(new s({model:e}).render().el)},renderAllProjects:function(){this.$project.empty(),this.project.forEach(this.renderProject,this)},renderProject:function(e){this.$project.append(new r({model:e}).render().el)},render:function(){return this.$el.html(this.template(this.model.attributes)),this.$tag=this.$el.find(".tagresults"),this.$project=this.$el.find(".results"),this.tag.fetch(),this.project.fetch(),this}},{levenshtein_distance_a:function(e,t){if(0==e.length)return t.length;if(0==t.length)return e.length;var n,i=[];for(n=0;n<=t.length;n++)i[n]=[n];var o;for(o=0;o<=e.length;o++)i[0][o]=o;for(n=1;n<=t.length;n++)for(o=1;o<=e.length;o++)i[n][o]=t.charAt(n-1)==e.charAt(o-1)?i[n-1][o-1]:Math.min(i[n-1][o-1]+1,Math.min(i[n][o-1]+1,i[n-1][o]+1));return i[t.length][e.length]}});t.exports=l},{"../../../_hbs/student_detail.hbs":6,"../collections/ProjectCollection.js":10,"../collections/TagCollection.js":11,"../models/Box.js":12,"../views/ProjectItemView.js":21,"../views/TagItemView.js":22}],17:[function(e,t){var n=e("../../../_hbs/student_item.hbs"),i=Backbone.View.extend({template:n,tagName:"li",events:{"change .name":"changeScore","click .detail":"clickDetail"},initialize:function(){this.listenTo(this.model,"destroy",this.remove)},clickDetail:function(e){e.preventDefault(),Window.Application.navigate("boxes/"+this.model.get("id"),{trigger:!0})},changeScore:function(e){e.preventDefault(),this.model.set("name",this.$el.find(".name").val()),this.model.save()},render:function(){return this.$el.html(this.template(this.model.attributes)),this}});t.exports=i},{"../../../_hbs/student_item.hbs":7}],18:[function(e,t){var n=e("../collections/BoxCollection.js"),i=(e("../collections/TagCollection.js"),e("../collections/ProjectCollection.js")),o=e("./BoxItemView.js"),a=e("./ProjectItemView.js"),s=e("../../../_hbs/introview.hbs"),r=Backbone.View.extend({template:s,tagName:"div",className:"intro",events:{"click .addButton":"clickAdd","input .filter":"inputFilter","click .home":"goHome"},array:[],goHome:function(){console.log("go home"),Window.Application.navigate("intro",{trigger:!0}),location.reload()},inputFilter:function(e){e.preventDefault();var t=$(e.currentTarget).val().toLowerCase();if(""!==t){this.$el.find(".addbox").hide(),this.$el.find(".box").hide(),this.$el.find(".tag").show(),document.body.style.background="rgba(255,255,255,1)",this.$el.find(".white").removeClass("white"),this.$el.find(".lamp").attr("src","assets/lamp.svg"),this.$el.find(".addButton").show();{t.split(" ")}this.renderFilteredTags(this.projectcollection.filterTags(t))}else this.$el.find(".addbox").show(),this.$el.find(".tag").hide(),this.array=[],this.projectcollection.fetch()},clickAdd:function(e){e.preventDefault(),Window.Application.navigate("overview",{trigger:!0})},initialize:function(){this.collection=new n,this.listenTo(this.collection,"sync",this.renderStudents),this.collection.fetch(),this.projectcollection=new i,this.listenTo(this.projectcollection,"sync",this.renderTags),this.projectcollection.fetch()},onlyUnique:function(e,t,n){return n.indexOf(e)===t},renderStudents:function(){this.$students.empty(),this.collection.forEach(this.renderStudent,this)},renderFilteredStudents:function(e){this.array.push(e[0].attributes.name);for(var t=0;t<this.array.length;t++){this.$students.empty();{this.array[t].filter(this.onlyUnique)}}},renderStudent:function(e){var t=new o({model:e});this.$students.append(t.render().el)},renderTags:function(){this.$tags.empty(),this.projectcollection.forEach(this.renderTag,this)},renderFilteredTags:function(e){for(var t=0;t<e.length;t++){e[t].attributes.box_name}this.$tags.empty(),e.forEach(this.renderTag,this)},renderTag:function(e){var t=new a({model:e});this.$tags.append(t.render().el)},render:function(){return this.$el.html(this.template()),this.$students=this.$el.find(".box"),this.$students.hide(),this.$tags=this.$el.find(".tag"),this.$el.find(".tag").hide(),this.$el.find(".header").addClass="white",this.$el.find(".form").addClass="white",document.body.style.backgroundImage="url('"+window.settings.httpRoot+"assets/bg_image.jpg')",document.body.style.backgroundColor="rgba(0, 0, 0, 0) ",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundSize="cover",$(window).load(function(){$(".blur").removeClass("hidden")}),this.$el.find(".addButton").hide(),this}});t.exports=r},{"../../../_hbs/introview.hbs":2,"../collections/BoxCollection.js":9,"../collections/ProjectCollection.js":10,"../collections/TagCollection.js":11,"./BoxItemView.js":17,"./ProjectItemView.js":21}],19:[function(e,t){var n=e("../collections/BoxCollection.js"),i=(e("../collections/TagCollection.js"),e("../collections/ProjectCollection.js")),o=e("./BoxItemView.js"),a=e("./ProjectItemView.js"),s=e("../../../_hbs/overview.hbs"),r=Backbone.View.extend({template:s,tagName:"div",className:"overview",events:{"click .add":"clickAdd","click .home":"goHome"},array:[],goHome:function(){Window.Application.navigate("intro",{trigger:!0}),location.reload()},clickAdd:function(e){if(e.preventDefault(),""!==this.$el.find(".name").val()){var t=this.collection;this.collection.create({name:this.$el.find(".name").val()},{success:function(){var e=t.models[t.models.length-1];console.log(e),$.map(e.attributes,function(e,t){console.log(t+", "+e),"id"===t&&console.log(e)});var n=t.models[t.models.length-1].id;Window.Application.navigate("boxes/"+n,{trigger:!0})}}),this.$el.find(".name").val("")}},initialize:function(){this.collection=new n,this.listenTo(this.collection,"sync",this.renderStudents),this.collection.fetch(),this.projectcollection=new i,this.listenTo(this.projectcollection,"sync",this.renderTags),this.projectcollection.fetch()},onlyUnique:function(e,t,n){return n.indexOf(e)===t},renderStudents:function(){this.$students.empty(),this.collection.forEach(this.renderStudent,this)},renderFilteredStudents:function(e){this.array.push(e[0].attributes.name);for(var t=0;t<this.array.length;t++){this.$students.empty();var n=this.array[t].filter(this.onlyUnique);console.log(n)}},renderStudent:function(e){var t=new o({model:e});this.$students.append(t.render().el)},renderTags:function(){this.$tags.empty(),this.projectcollection.forEach(this.renderTag,this)},renderFilteredTags:function(e){for(var t=0;t<e.length;t++){e[t].attributes.box_name}this.$tags.empty(),e.forEach(this.renderTag,this)},renderTag:function(e){var t=new a({model:e});this.$tags.append(t.render().el)},render:function(){return this.$el.html(this.template()),this.$students=this.$el.find(".box"),this.$tags=this.$el.find(".tag"),this.$el.find(".tag").hide(),this}});t.exports=r},{"../../../_hbs/overview.hbs":3,"../collections/BoxCollection.js":9,"../collections/ProjectCollection.js":10,"../collections/TagCollection.js":11,"./BoxItemView.js":17,"./ProjectItemView.js":21}],20:[function(e,t){var n=e("../../../_hbs/project_detail.hbs"),i=e("../models/Project.js"),o=e("../collections/TagCollection.js"),a=(e("../collections/ProjectCollection.js"),e("../views/TagItemView.js")),s=Backbone.View.extend({template:n,tagName:"section",className:"dozen",events:{"click .delete":"clickDelete","click .gone":"removeFromTagsList","click .remove":"clickRemove","click .add":"clickAdd","keydown .text":"addTags","click .home":"goHome"},array:[],booleancheck:!1,goHome:function(){Window.Application.navigate("intro",{trigger:!0}),location.reload()},addTags:function(e){var t=$(e.currentTarget).val().toLowerCase();if(32==e.keyCode&&""!==this.$el.find(".text").val()){console.log(t),(" "!==t||""!==t||void 0!==t)&&this.array.push(t);var n=t.split(" ");n=n.filter(Boolean);for(var i=0;i<n.length;i++)if(" "!==n[i]){var o=document.createElement("li");o.className="item inputwrapper",o.setAttribute("id",i);var a=$(".addtags ul.inputwrap .taglist"),s=document.createElement("span"),r=document.createTextNode(n[i]);s.appendChild(r);var l=document.createElement("span");l.className="remove",o.appendChild(s),o.appendChild(l),a.append(o),this.$el.find(".text").val("")}}},clickRemove:function(e){var t=$(e.currentTarget.parentNode).attr("id"),n=this.array.join(),i=n.split(" ");console.log(i),allIds=document.getElementsByClassName("item inputwrapper");var o=[];i.splice(t,1),$(e.currentTarget.parentNode).remove();for(var a=0;a<allIds.length;a++)allIds[a].setAttribute("id",a),console.log(allIds[a]),o.push(allIds[a].getElementsByTagName("span")[0].innerHTML);this.array=o,console.log("array "+this.array)},clickAdd:function(e){if(e.preventDefault(),console.log(document.getElementsByClassName("item inputwrapper").length,this.$el.find(".text").val()),!(""===this.$el.find(".text").val()&&0===document.getElementsByClassName("item inputwrapper").length||" "===this.$el.find(".text").val()&&0===document.getElementsByClassName("item inputwrapper").length)){var t=this.array,n=this.tag,i=this.model;if(!(""===this.$el.find(".text").val()&&0===document.getElementsByClassName("item inputwrapper").length||" "===this.$el.find(".text").val()&&0===document.getElementsByClassName("item inputwrapper").length)){" "===this.$el.find(".text").val()?console.log("gow jong"):""!==this.$el.find(".text").val()&&t.push($(".addtags .text").val());var o=t.join(" ");if(0!==document.getElementsByClassName("item inputwrapper").length)for(var a=0;a<t.length;a++)t[a]=t[a].replace(/\s+/g," "),n.create({box_name:i.get("box_name"),tag:t[a],project_name:i.get("name"),project_id:i.get("id"),box_id:i.get("box_id")},{success:function(){$(".item.inputwrapper").remove()}}),i.set("tags_list",i.get("tags_list")+", "+t[a])&&(i.save(),location.reload());else for(var s=o.split(" "),a=0;a<s.length;a++)s[a]=s[a].replace(/\s+/g," "),n.create({box_name:i.get("box_name"),tag:s[a],project_name:i.get("name"),project_id:i.get("id"),box_id:i.get("box_id")},{success:function(){$(".item.inputwrapper").remove(),location.reload()}}),i.set("tags_list",i.get("tags_list")+", "+s[a])&&(i.save(),location.reload())}}},changeScore:function(e){e.preventDefault(),this.model.set("name",this.$el.find(".name").val()),this.model.save()},removeFromTagsList:function(e){e.preventDefault();var t=e.currentTarget.parentNode.getElementsByTagName("p")[0].innerHTML;console.log(t);var n=this.model.get("tags_list").replace(", "+t,"");console.log(n),this.model.set("tags_list",n),this.model.save()},clickDelete:function(e){e.preventDefault(),document.getElementById("popup").className="";var t=document.getElementById("popup");console.log(t.getElementsByClassName("go"));var n=this.model;t.getElementsByClassName("go")[0].addEventListener("click",function(e){e.preventDefault(),console.log("delete this"),n.destroy(),$.ajax({type:"DELETE",url:window.settings.httpRoot+"api/tags/project/"+n.get("id"),success:function(e){console.log(e?"this went right":"something is wrong")}}),document.getElementById("popup").className="hidden"}),t.getElementsByClassName("no")[0].addEventListener("click",function(e){e.preventDefault(),console.log("do nothing"),document.getElementById("popup").className="hidden"})},initialize:function(e){console.log(e),e&&e.id&&(this.model=new i,this.model.on("destroy",function(){Window.Application.navigate("overview",{trigger:!0})}),this.model.set("id",e.id),this.model.fetch({success:function(e,t){0===t.length&&Window.Application.navigate("overview",{trigger:!0})}}),this.listenTo(this.model,"sync",this.render),this.tag=new o({project_id:e.id}),this.tag.on("sync",this.renderAllTags,this))},renderAllTags:function(){this.$tag.empty(),this.tag.forEach(this.renderTag,this)},renderTag:function(e){this.$tag.append(new a({model:e}).render().el)},render:function(){return this.$el.html(this.template(this.model.attributes)),this.$tag=this.$el.find(".tagresults"),this.tag.fetch(),this}},{levenshtein_distance_a:function(e,t){if(0==e.length)return t.length;if(0==t.length)return e.length;var n,i=[];for(n=0;n<=t.length;n++)i[n]=[n];var o;for(o=0;o<=e.length;o++)i[0][o]=o;for(n=1;n<=t.length;n++)for(o=1;o<=e.length;o++)i[n][o]=t.charAt(n-1)==e.charAt(o-1)?i[n-1][o-1]:Math.min(i[n-1][o-1]+1,Math.min(i[n][o-1]+1,i[n-1][o]+1));return i[t.length][e.length]}});t.exports=s},{"../../../_hbs/project_detail.hbs":4,"../collections/ProjectCollection.js":10,"../collections/TagCollection.js":11,"../models/Project.js":13,"../views/TagItemView.js":22}],21:[function(e,t){var n=e("../../../_hbs/project_item.hbs"),i=Backbone.View.extend({template:n,tagName:"li",className:"anim fadeInUp",events:{"click .delete":"clickDelete","click .tagdetail":"clickDetail","click .detail":"clickDetail"},clickDelete:function(e){e.preventDefault(),this.model.destroy()},clickDetail:function(e){e.preventDefault(),Window.Application.navigate("projects/"+this.model.get("id"),{trigger:!0})},initialize:function(){this.listenTo(this.model,"destroy",this.remove)},render:function(){return this.$el.html(this.template(this.model.attributes)),this.$el.attr("data-wow-delay","s"),this.$el.find("a").addClass("effect-sarah"),this}});t.exports=i},{"../../../_hbs/project_item.hbs":5}],22:[function(e,t){var n=e("../../../_hbs/feedback_item.hbs"),i=Backbone.View.extend({template:n,tagName:"li",events:{"click .gone":"clickDelete"},clickDelete:function(e){var t=this.model;setTimeout(function(){e.preventDefault(),t.destroy(),location.reload()},100)},initialize:function(){},render:function(){return this.$el.html(this.template(this.model.attributes)),this}});t.exports=i},{"../../../_hbs/feedback_item.hbs":1}],23:[function(e,t,n){"use strict";function i(){var e=new s.HandlebarsEnvironment;return h.extend(e,s),e.SafeString=l["default"],e.Exception=d["default"],e.Utils=h,e.escapeExpression=h.escapeExpression,e.VM=m,e.template=function(t){return m.template(t,e)},e}var o=function(e){return e&&e.__esModule?e:{"default":e}};n.__esModule=!0;var a=e("./handlebars/base"),s=o(a),r=e("./handlebars/safe-string"),l=o(r),c=e("./handlebars/exception"),d=o(c),u=e("./handlebars/utils"),h=o(u),p=e("./handlebars/runtime"),m=o(p),f=e("./handlebars/no-conflict"),g=o(f),v=i();v.create=i,g["default"](v),v["default"]=v,n["default"]=v,t.exports=n["default"]},{"./handlebars/base":24,"./handlebars/exception":25,"./handlebars/no-conflict":26,"./handlebars/runtime":27,"./handlebars/safe-string":28,"./handlebars/utils":29}],24:[function(e,t,n){"use strict";function i(e,t){this.helpers=e||{},this.partials=t||{},o(this)}function o(e){e.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new d["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')}),e.registerHelper("blockHelperMissing",function(t,n){var i=n.inverse,o=n.fn;if(t===!0)return o(this);if(t===!1||null==t)return i(this);if(m(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):i(this);if(n.data&&n.ids){var s=a(n.data);s.contextPath=l.appendContextPath(n.data.contextPath,n.name),n={data:s}}return o(t,n)}),e.registerHelper("each",function(e,t){function n(t,n,o){c&&(c.key=t,c.index=n,c.first=0===n,c.last=!!o,u&&(c.contextPath=u+t)),r+=i(e[t],{data:c,blockParams:l.blockParams([e[t],t],[u+t,null])})}if(!t)throw new d["default"]("Must pass iterator to #each");var i=t.fn,o=t.inverse,s=0,r="",c=void 0,u=void 0;if(t.data&&t.ids&&(u=l.appendContextPath(t.data.contextPath,t.ids[0])+"."),f(e)&&(e=e.call(this)),t.data&&(c=a(t.data)),e&&"object"==typeof e)if(m(e))for(var h=e.length;h>s;s++)n(s,s,s===e.length-1);else{var p=void 0;for(var g in e)e.hasOwnProperty(g)&&(p&&n(p,s-1),p=g,s++);p&&n(p,s-1,!0)}return 0===s&&(r=o(this)),r}),e.registerHelper("if",function(e,t){return f(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||l.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),e.registerHelper("with",function(e,t){f(e)&&(e=e.call(this));var n=t.fn;if(l.isEmpty(e))return t.inverse(this);if(t.data&&t.ids){var i=a(t.data);i.contextPath=l.appendContextPath(t.data.contextPath,t.ids[0]),t={data:i}}return n(e,t)}),e.registerHelper("log",function(t,n){var i=n.data&&null!=n.data.level?parseInt(n.data.level,10):1;e.log(i,t)}),e.registerHelper("lookup",function(e,t){return e&&e[t]})}function a(e){var t=l.extend({},e);return t._parent=e,t}var s=function(e){return e&&e.__esModule?e:{"default":e}};n.__esModule=!0,n.HandlebarsEnvironment=i,n.createFrame=a;var r=e("./utils"),l=s(r),c=e("./exception"),d=s(c),u="3.0.1";n.VERSION=u;var h=6;n.COMPILER_REVISION=h;var p={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};n.REVISION_CHANGES=p;var m=l.isArray,f=l.isFunction,g=l.toString,v="[object Object]";i.prototype={constructor:i,logger:b,log:w,registerHelper:function(e,t){if(g.call(e)===v){if(t)throw new d["default"]("Arg not supported with multiple helpers");l.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(g.call(e)===v)l.extend(this.partials,e);else{if("undefined"==typeof t)throw new d["default"]("Attempting to register a partial as undefined");this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]}};var b={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:1,log:function(e,t){if("undefined"!=typeof console&&b.level<=e){var n=b.methodMap[e];(console[n]||console.log).call(console,t)}}};n.logger=b;var w=b.log;n.log=w},{"./exception":25,"./utils":29}],25:[function(e,t,n){"use strict";function i(e,t){var n=t&&t.loc,a=void 0,s=void 0;n&&(a=n.start.line,s=n.start.column,e+=" - "+a+":"+s);for(var r=Error.prototype.constructor.call(this,e),l=0;l<o.length;l++)this[o[l]]=r[o[l]];Error.captureStackTrace&&Error.captureStackTrace(this,i),n&&(this.lineNumber=a,this.column=s)}n.__esModule=!0;var o=["description","fileName","lineNumber","message","name","number","stack"];i.prototype=new Error,n["default"]=i,t.exports=n["default"]},{}],26:[function(e,t,n){(function(e){"use strict";n.__esModule=!0,n["default"]=function(t){var n="undefined"!=typeof e?e:window,i=n.Handlebars;t.noConflict=function(){n.Handlebars===t&&(n.Handlebars=i)}},t.exports=n["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],27:[function(e,t,n){"use strict";function i(e){var t=e&&e[0]||1,n=f.COMPILER_REVISION;if(t!==n){if(n>t){var i=f.REVISION_CHANGES[n],o=f.REVISION_CHANGES[t];throw new m["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+o+").")}throw new m["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function o(e,t){function n(n,i,o){o.hash&&(i=h.extend({},i,o.hash)),n=t.VM.resolvePartial.call(this,n,i,o);var a=t.VM.invokePartial.call(this,n,i,o);if(null==a&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),a=o.partials[o.name](i,o)),null!=a){if(o.indent){for(var s=a.split("\n"),r=0,l=s.length;l>r&&(s[r]||r+1!==l);r++)s[r]=o.indent+s[r];a=s.join("\n")}return a}throw new m["default"]("The partial "+o.name+" could not be compiled when running in runtime-only mode")}function i(t){var n=void 0===arguments[1]?{}:arguments[1],a=n.data;i._setup(n),!n.partial&&e.useData&&(a=c(t,a));var s=void 0,r=e.useBlockParams?[]:void 0;return e.useDepths&&(s=n.depths?[t].concat(n.depths):[t]),e.main.call(o,t,o.helpers,o.partials,a,r,s)}if(!t)throw new m["default"]("No environment passed to template");
if(!e||!e.main)throw new m["default"]("Unknown template object: "+typeof e);t.VM.checkRevision(e.compiler);var o={strict:function(e,t){if(!(t in e))throw new m["default"]('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,i=0;n>i;i++)if(e[i]&&null!=e[i][t])return e[i][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:h.escapeExpression,invokePartial:n,fn:function(t){return e[t]},programs:[],program:function(e,t,n,i,o){var s=this.programs[e],r=this.fn(e);return t||o||i||n?s=a(this,e,r,t,n,i,o):s||(s=this.programs[e]=a(this,e,r)),s},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=h.extend({},t,e)),n},noop:t.VM.noop,compilerInfo:e.compiler};return i.isTop=!0,i._setup=function(n){n.partial?(o.helpers=n.helpers,o.partials=n.partials):(o.helpers=o.merge(n.helpers,t.helpers),e.usePartial&&(o.partials=o.merge(n.partials,t.partials)))},i._child=function(t,n,i,s){if(e.useBlockParams&&!i)throw new m["default"]("must pass block params");if(e.useDepths&&!s)throw new m["default"]("must pass parent depths");return a(o,t,e[t],n,0,i,s)},i}function a(e,t,n,i,o,a,s){function r(t){var o=void 0===arguments[1]?{}:arguments[1];return n.call(e,t,e.helpers,e.partials,o.data||i,a&&[o.blockParams].concat(a),s&&[t].concat(s))}return r.program=t,r.depth=s?s.length:0,r.blockParams=o||0,r}function s(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e=n.partials[n.name],e}function r(e,t,n){if(n.partial=!0,void 0===e)throw new m["default"]("The partial "+n.name+" could not be found");return e instanceof Function?e(t,n):void 0}function l(){return""}function c(e,t){return t&&"root"in t||(t=t?f.createFrame(t):{},t.root=e),t}var d=function(e){return e&&e.__esModule?e:{"default":e}};n.__esModule=!0,n.checkRevision=i,n.template=o,n.wrapProgram=a,n.resolvePartial=s,n.invokePartial=r,n.noop=l;var u=e("./utils"),h=d(u),p=e("./exception"),m=d(p),f=e("./base")},{"./base":24,"./exception":25,"./utils":29}],28:[function(e,t,n){"use strict";function i(e){this.string=e}n.__esModule=!0,i.prototype.toString=i.prototype.toHTML=function(){return""+this.string},n["default"]=i,t.exports=n["default"]},{}],29:[function(e,t,n){"use strict";function i(e){return d[e]}function o(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}function a(e,t){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n;return-1}function s(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return h.test(e)?e.replace(u,i):e}function r(e){return e||0===e?f(e)&&0===e.length?!0:!1:!0}function l(e,t){return e.path=t,e}function c(e,t){return(e?e+".":"")+t}n.__esModule=!0,n.extend=o,n.indexOf=a,n.escapeExpression=s,n.isEmpty=r,n.blockParams=l,n.appendContextPath=c;var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},u=/[&<>"'`]/g,h=/[&<>"'`]/,p=Object.prototype.toString;n.toString=p;var m=function(e){return"function"==typeof e};m(/x/)&&(n.isFunction=m=function(e){return"function"==typeof e&&"[object Function]"===p.call(e)});var m;n.isFunction=m;var f=Array.isArray||function(e){return e&&"object"==typeof e?"[object Array]"===p.call(e):!1};n.isArray=f},{}],30:[function(e,t){t.exports=e("./dist/cjs/handlebars.runtime")["default"]},{"./dist/cjs/handlebars.runtime":23}],31:[function(e,t){t.exports=e("handlebars/runtime")["default"]},{"handlebars/runtime":30}]},{},[8]);
//# sourceMappingURL=app.js.map