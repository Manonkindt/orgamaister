!function e(t,n,i){function a(s,r){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!r&&l)return l(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[s]={exports:{}};t[s][0].call(d.exports,function(e){var n=t[s][1][e];return a(n?n:e)},d,d.exports,e,t,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)a(i[s]);return a}({1:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var a,o=t.helperMissing,s="function",r=this.escapeExpression;return"<h2>"+r((a=null!=(a=t.box_name||(null!=e?e.box_name:e))?a:o,typeof a===s?a.call(e,{name:"box_name",hash:{},data:i}):a))+": "+r((a=null!=(a=t.project_name||(null!=e?e.project_name:e))?a:o,typeof a===s?a.call(e,{name:"project_name",hash:{},data:i}):a))+" - "+r((a=null!=(a=t.tag||(null!=e?e.tag:e))?a:o,typeof a===s?a.call(e,{name:"tag",hash:{},data:i}):a))+" </h2>\n<p>"+r((a=null!=(a=t.tag||(null!=e?e.tag:e))?a:o,typeof a===s?a.call(e,{name:"tag",hash:{},data:i}):a))+'</p>\n<a href="" class="gone"><img src="assets/close.svg" alt=""/></a>\n\n\n'},useData:!0})},{"hbsfy/runtime":31}],2:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="header white">\n    <aside>\n        <a href="#" class="addButton"><img src="assets/plus.svg" alt=""/></a>\n    </aside>\n    <header>\n        <img class="lamp" src="assets/lamp_white.svg" alt=""/>\n    </header>\n      <aside>\n        <a href="#" class="list hidden"><img src="assets/list.svg" alt=""/></a>\n    </aside>\n    <header>\n        <h1><div></div>ORGAMAISTER<div></div></h1>\n    </header>\n</div>\n\n<form class="white form">\n   <input type="text" name="filter" placeholder="..." class="filter"/>\n</form>\n\n\n<table class="boxes">\n\n    <tbody class="box">\n    </tbody>\n\n    <tbody class="tag" data-wow-delay="1s">\n    </tbody>\n\n     <tbody class="project">\n    </tbody>\n\n</table>'},useData:!0})},{"hbsfy/runtime":31}],3:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="header">\n    <aside>\n        <a href="#" class="home"><img src="assets/Maister_logo_green.svg" alt=""/></a>\n    </aside>\n    <header>\n        <h1 class="home"><div></div>ORGAMAISTER<div></div></h1>\n    </header>\n    <aside>\n        <a href="#" class="addButton"><img src="" alt=""/></a>\n    </aside>\n</div>\n\n<form>\n    <h2>Zoek een doos</h2>\n    <hr>\n    <input type="text" name="name" class="name" value="" placeholder="..."/>\n    <input type="submit" value="klaar" class="add"/>\n</form>\n\n<img class="scroll_down" src="assets/arrow_down.svg" alt="scroll down"/>\n\n<div class="optionHeader"> \n  <h1>Overzicht dozen</h1>\n  <hr>\n</div>\n\n<table class="boxes">\n    <tbody class="box"></tbody>\n\n</table>\n'},useData:!0})},{"hbsfy/runtime":31}],4:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var a,o=t.helperMissing,s="function",r=this.escapeExpression;return'<div class="header">\n    <aside>\n        <a href="#" class="gotomybox"><img src="assets/arrow_back.svg" alt="go to box '+r((a=null!=(a=t.box_name||(null!=e?e.box_name:e))?a:o,typeof a===s?a.call(e,{name:"box_name",hash:{},data:i}):a))+'" title="go to box '+r((a=null!=(a=t.box_name||(null!=e?e.box_name:e))?a:o,typeof a===s?a.call(e,{name:"box_name",hash:{},data:i}):a))+'"/></a>\n    </aside>\n    <header>\n        <h1 class="home"><div></div>ORGAMAISTER<div></div></h1>\n    </header>\n     <aside>\n        <a href="" class="delete"><img src="assets/close.svg" alt=""/></a>\n    </aside>\n</div>\n\n<form action="" method="post" class="addtags" id="addtags">\n    <h2>Voeg tags toe aan <span>'+r((a=null!=(a=t.name||(null!=e?e.name:e))?a:o,typeof a===s?a.call(e,{name:"name",hash:{},data:i}):a))+'</span></h2>\n    <hr>\n	<ul class="inputwrap">\n        <div class="taglist"></div>\n		<li class="item input">\n			<input type="text" name="text" class="name text" value="" autofocus="autofocus" placeholder="..." />\n		</li>\n	</ul>\n    <input type="submit" value="klaar" class="add addproject"/>\n</form>\n\n<img class="scroll_down" src="assets/arrow_down.svg" alt="scroll down"/>\n\n<section class="tags">\n\n    <div class="optionHeader">\n        <h1>'+r((a=null!=(a=t.name||(null!=e?e.name:e))?a:o,typeof a===s?a.call(e,{name:"name",hash:{},data:i}):a))+' tags uit <a href="#addtags" class="gotomybox"><span>'+r((a=null!=(a=t.box_name||(null!=e?e.box_name:e))?a:o,typeof a===s?a.call(e,{name:"box_name",hash:{},data:i}):a))+'</span></a></h1>\n        <hr>\n    </div>\n\n	<ul class="tagresults" >\n\n	</ul>\n\n</section>'},useData:!0})},{"hbsfy/runtime":31}],5:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var a,o=t.helperMissing,s="function",r=this.escapeExpression;return'<a href="#" class="box_detail"><h2>'+r((a=null!=(a=t.box_name||(null!=e?e.box_name:e))?a:o,typeof a===s?a.call(e,{name:"box_name",hash:{},data:i}):a))+'</h2></a>\n<a href="#" class="proj_detail"><h3>'+r((a=null!=(a=t.name||(null!=e?e.name:e))?a:o,typeof a===s?a.call(e,{name:"name",hash:{},data:i}):a))+"</h3>\n<p>"+r((a=null!=(a=t.tags_list||(null!=e?e.tags_list:e))?a:o,typeof a===s?a.call(e,{name:"tags_list",hash:{},data:i}):a))+'</p></a>\n\n<div class="tagdetail">\n	<a href="#" class="boxdetail"><h2>'+r((a=null!=(a=t.name||(null!=e?e.name:e))?a:o,typeof a===s?a.call(e,{name:"name",hash:{},data:i}):a))+'</h2></a>\n	<a href="#" id="'+r((a=null!=(a=t.id||(null!=e?e.id:e))?a:o,typeof a===s?a.call(e,{name:"id",hash:{},data:i}):a))+'" class="gone">\n		<img src="assets/close.svg" alt=""/>\n	</a>\n	<h3>tags\n	</h3>\n</div>\n\n<a href="#" class="listdetail">\n	<h2>'+r((a=null!=(a=t.name||(null!=e?e.name:e))?a:o,typeof a===s?a.call(e,{name:"name",hash:{},data:i}):a))+"</h2>\n	<p><span>Tags: </span> "+r((a=null!=(a=t.tags_list||(null!=e?e.tags_list:e))?a:o,typeof a===s?a.call(e,{name:"tags_list",hash:{},data:i}):a))+"</p>\n</a>\n"},useData:!0})},{"hbsfy/runtime":31}],6:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var a;return'<div class="header">\n    <aside>\n        <a href="#" class="over"><img src="assets/Maister_logo_green.svg" alt=""/></a>\n    </aside>\n    <header>\n        <h1 class="home"><div></div>ORGAMAISTER<div></div></h1>\n    </header>\n     <aside>\n        <a href="" class="delete hidden"><img src="assets/close.svg" alt=""/></a>\n    </aside>\n</div>\n\n<form>\n    <h2>Voeg project toe in <span>'+this.escapeExpression((a=null!=(a=t.name||(null!=e?e.name:e))?a:t.helperMissing,"function"==typeof a?a.call(e,{name:"name",hash:{},data:i}):a))+'</span></h2>\n    <hr>\n   <input type="text" name="text" class="name textproject" value="" placeholder="..." autofocus="autofocus"/>\n    <input type="submit" value="klaar" class="add addproject"/>\n</form>\n\n<img class="scroll_down" src="assets/arrow_down.svg" alt="scroll down"/>\n\n<section class="feedback">\n\n\n    <div class="optionHeader">\n        <h1>Projecten</h1>\n        <hr>\n    </div>\n\n	<ul class="results" >\n		\n	</ul>\n</section>'},useData:!0})},{"hbsfy/runtime":31}],7:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var a;return'<a href="#" class="detail">\n	<h2>'+this.escapeExpression((a=null!=(a=t.name||(null!=e?e.name:e))?a:t.helperMissing,"function"==typeof a?a.call(e,{name:"name",hash:{},data:i}):a))+'</h2>\n	<h3>\n		projecten \n		<img src="assets/arrow_black.svg" alt=""/>\n	</h3>\n</a>'},useData:!0})},{"hbsfy/runtime":31}],8:[function(e){function t(){$.getJSON("settings.php").done(function(t){window.settings=t;var n=e("./classes/routers/Application.js");Window.Application=new n,Backbone.history.start()})}fallback.load({jQuery:["//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js","js/vendor/jquery.min.js"],"$.fn.modal":["//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js","js/vendor/bootstrap.min.js"]},{shim:{"$.fn.modal":["jQuery"],lazy:["jQuery"],extra:["jQuery"]}}),fallback.ready(function(){});e("hbsfy/runtime");t()},{"./classes/routers/Application.js":15,"hbsfy/runtime":31}],9:[function(e,t){var n=e("../models/Box.js"),i=Backbone.Collection.extend({model:n,url:window.settings.httpRoot+"api/boxes",filterByBox:function(e){return pattern=new RegExp("(^"+e+"|"+e+")"),this.filter(function(e){var t=e.attributes.name.toLowerCase();return pattern.test(t)})}});t.exports=i},{"../models/Box.js":12}],10:[function(e,t){var n=e("../models/Project.js"),i=Backbone.Collection.extend({model:n,url:window.settings.httpRoot+"api/projects",initialize:function(e){e&&(this.box_id=e.box_id)},filterTags:function(e){return pattern=new RegExp("(?=.*"+e.replace(/ +/g,")(?=.*")+").*","g"),this.filter(function(e){return pattern.test(e.get("tags_list").toLowerCase())})},filterByClient:function(e){return pattern=new RegExp("(^"+e+"| "+e+")","g"),this.filter(function(e){e.get("name").toLowerCase().split(" ");return pattern.test(e.get("name").toLowerCase())})},methodUrl:function(e){return"read"===e&&this.box_id?void(this.url=window.settings.httpRoot+"api/projects/boxes/"+this.box_id):void(this.url=window.settings.httpRoot+"api/projects/")},sync:function(e,t,n){t.methodUrl&&t.methodUrl(e.toLowerCase())&&(n=n||{},n.url=t.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});t.exports=i},{"../models/Project.js":13}],11:[function(e,t){var n=e("../models/Tag.js"),i=Backbone.Collection.extend({model:n,url:window.settings.httpRoot+"api/tags",initialize:function(e){e&&(this.id=e.project_id)},array:[],"boolean":!1,filterTags:function(e){return pattern=new RegExp("(?=.*"+e.replace(/ +/g,")(?=.*")+").*","g"),this.filter(function(e){return pattern.test(e.get("tags_list"))})},methodUrl:function(e){return"read"===e&&this.id?void(this.url=window.settings.httpRoot+"api/tags/projects/"+this.id):void(this.url=window.settings.httpRoot+"api/tags/")},sync:function(e,t,n){t.methodUrl&&t.methodUrl(e.toLowerCase())&&(n=n||{},n.url=t.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});t.exports=i},{"../models/Tag.js":14}],12:[function(e,t){var n=Backbone.Model.extend({defaults:{name:""},urlRoot:window.settings.httpRoot+"api/boxes"});t.exports=n},{}],13:[function(e,t){var n=Backbone.Model.extend({defaults:{box_id:null,name:"",box_name:"",tags_list:""},urlRoot:window.settings.httpRoot+"api/projects"});t.exports=n},{}],14:[function(e,t){var n=Backbone.Model.extend({defaults:{box_name:"box name",tag:"no feedback",project_name:"",project_id:null,box_id:null},urlRoot:window.settings.httpRoot+"api/tags"});t.exports=n},{}],15:[function(e,t){var n=e("../views/OverviewView.js"),i=e("../views/BoxDetailView.js"),a=e("../views/ProjectDetailView.js"),o=e("../views/IntroView.js"),s=($(window).scrollTop(),Backbone.Router.extend({routes:{overview:"overview",intro:"intro","boxes/:id":"boxes","projects/:id":"projects","*actions":"default"},empty:function(){$(".container").empty()},"default":function(){this.navigate("intro",{trigger:!0})},overview:function(){this.empty(),this.overview=new n,$(".container").append(this.overview.render().el),$(".container").scroll(function(){var e=$(".container").scrollTop();this.topPos>e||$(".scroll_down").addClass("hidden"),this.topPos=e,0==e&&$(".scroll_down").removeClass("hidden")})},intro:function(){this.empty(),this.intro=new o,$(".container").append(this.intro.render().el)},boxes:function(e){this.empty(),this.box=new i({id:e}),$(".container").append(this.box.render().el),$(".container").scroll(function(){var e=$(".container").scrollTop();this.topPos>e||$(".scroll_down").addClass("hidden"),this.topPos=e,0==e&&$(".scroll_down").removeClass("hidden")})},projects:function(e){this.empty(),this.project=new a({id:e}),$(".container").append(this.project.render().el),$(".container").scroll(function(){var e=$(".container").scrollTop();this.topPos>e||$(".scroll_down").addClass("hidden"),this.topPos=e,0==e&&$(".scroll_down").removeClass("hidden")})}}));t.exports=s},{"../views/BoxDetailView.js":16,"../views/IntroView.js":18,"../views/OverviewView.js":19,"../views/ProjectDetailView.js":20}],16:[function(e,t){var n=e("../../../_hbs/student_detail.hbs"),i=e("../models/Box.js"),a=e("../collections/TagCollection.js"),o=e("../collections/ProjectCollection.js"),s=e("../views/TagItemView.js"),r=e("../views/ProjectItemView.js"),l=Backbone.View.extend({template:n,tagName:"section",className:"dozen",events:{"click .gone":"clickDelete","click .addproject":"clickAddproject","click .home":"goHome","click .over":"goOverview"},array:[],booleancheck:!1,goHome:function(){Window.Application.navigate("intro",{trigger:!0})},goOverview:function(e){e.preventDefault(),Window.Application.navigate("overview",{trigger:!0})},clickAddproject:function(e){if(e.preventDefault(),""!==this.$el.find(".textproject").val()){var t=this.project;this.project.create({name:this.$el.find(".textproject").val(),box_id:this.model.get("id"),box_name:this.model.get("name"),tags_list:this.$el.find(".textproject").val()},{success:function(){var e=t.models[t.models.length-1];$.map(e.attributes,function(e,t){});var n=t.models[t.models.length-1].id;Window.Application.navigate("projects/"+n,{trigger:!0})}}),this.$el.find(".textproject").val("")}},clickDelete:function(e){e.preventDefault(),console.log("delete this project and all his tags"),document.getElementById("popup").className="";{var t=document.getElementById("popup");this.model}console.log($(e.target)[0].parentNode.id);var n=$(e.target)[0].parentNode.parentNode.getElementsByTagName("h2")[0].innerHTML;document.querySelectorAll("#popup span")[0].innerHTML=n,t.getElementsByClassName("go")[0].addEventListener("click",function(t){t.preventDefault(),$.ajax({type:"DELETE",url:window.settings.httpRoot+"api/projects/"+$(e.target)[0].parentNode.id,success:function(e){}}),$.ajax({type:"DELETE",url:window.settings.httpRoot+"api/tags/project/"+$(e.target)[0].parentNode.id,success:function(e){}}),document.getElementById("popup").className="hidden",location.reload()}),t.getElementsByClassName("no")[0].addEventListener("click",function(e){e.preventDefault(),document.getElementById("popup").className="hidden"})},initialize:function(e){e&&e.id&&(this.model=new i,this.model.on("destroy",function(){Window.Application.navigate("overview",{trigger:!0})}),this.model.set("id",e.id),this.model.fetch({success:function(e,t){0===t.length&&Window.Application.navigate("overview",{trigger:!0})}}),this.listenTo(this.model,"sync",this.render),this.tag=new a({box_id:e.id}),this.tag.on("sync",this.renderAllTags,this),this.project=new o({box_id:e.id}),this.project.on("sync",this.renderAllProjects,this))},renderAllTags:function(){this.$tag.empty(),this.tag.forEach(this.renderTag,this)},renderTag:function(e){this.$tag.append(new s({model:e}).render().el)},renderAllProjects:function(){this.$project.empty(),this.project.forEach(this.renderProject,this)},renderProject:function(e){this.$project.append(new r({model:e}).render().el)},render:function(){return this.$el.html(this.template(this.model.attributes)),this.$tag=this.$el.find(".tagresults"),this.$project=this.$el.find(".results"),this.tag.fetch(),this.project.fetch(),this}},{levenshtein_distance_a:function(e,t){if(0==e.length)return t.length;if(0==t.length)return e.length;var n,i=[];for(n=0;n<=t.length;n++)i[n]=[n];var a;for(a=0;a<=e.length;a++)i[0][a]=a;for(n=1;n<=t.length;n++)for(a=1;a<=e.length;a++)i[n][a]=t.charAt(n-1)==e.charAt(a-1)?i[n-1][a-1]:Math.min(i[n-1][a-1]+1,Math.min(i[n][a-1]+1,i[n-1][a]+1));return i[t.length][e.length]}});t.exports=l},{"../../../_hbs/student_detail.hbs":6,"../collections/ProjectCollection.js":10,"../collections/TagCollection.js":11,"../models/Box.js":12,"../views/ProjectItemView.js":21,"../views/TagItemView.js":22}],17:[function(e,t){var n=e("../../../_hbs/student_item.hbs"),i=Backbone.View.extend({template:n,tagName:"li",events:{"change .name":"changeScore","click .detail":"clickDetail"},initialize:function(){this.listenTo(this.model,"destroy",this.remove)},clickDetail:function(e){e.preventDefault(),Window.Application.navigate("boxes/"+this.model.get("id"),{trigger:!0})},changeScore:function(e){e.preventDefault(),this.model.set("name",this.$el.find(".name").val()),this.model.save()},render:function(){return this.$el.html(this.template(this.model.attributes)),this}});t.exports=i},{"../../../_hbs/student_item.hbs":7}],18:[function(e,t){var n=e("../collections/BoxCollection.js"),i=(e("../collections/TagCollection.js"),e("../collections/ProjectCollection.js")),a=e("./BoxItemView.js"),o=e("./ProjectItemView.js"),s=e("../../../_hbs/introview.hbs"),r=Backbone.View.extend({template:s,tagName:"div",className:"intro",events:{"click .addButton":"clickAdd","input .filter":"inputFilter","click .list":"gotolist"},array:[],gotolist:function(e){e.preventDefault(),Window.Application.navigate("list",{trigger:!0})},inputFilter:function(e){e.preventDefault();var t=$(e.currentTarget).val().toLowerCase();if(""!==t){this.$el.find(".addbox").hide(),this.$el.find(".box").hide(),this.$el.find(".tag").show(),document.body.style.background="rgba(255,255,255,1)",this.$el.find(".lamp").css("width","20%"),this.$el.find(".lamp").css("margin-top","-20px");{t.split(" ")}this.renderFilteredTags(this.projectcollection.filterTags(t))}else{this.$el.find(".lamp").css("width","40%");var n=window.matchMedia("(min-width: 1400px)");n.matches?this.$el.find(".lamp").css("margin-top","-365px"):this.$el.find(".lamp").css("margin-top","-150px");var i=window.matchMedia("(max-width: 700px)");i.matches&&this.$el.find(".lamp").css("margin-top","-100px"),this.$el.find(".addbox").show(),this.$el.find(".tag").hide(),this.array=[],this.projectcollection.fetch()}},clickAdd:function(e){e.preventDefault(),Window.Application.navigate("overview",{trigger:!0})},initialize:function(){this.collection=new n,this.listenTo(this.collection,"sync",this.renderStudents),this.collection.fetch(),this.projectcollection=new i,this.listenTo(this.projectcollection,"sync",this.renderTags),this.projectcollection.fetch(),$(window).scroll(this.detect_scroll)},onlyUnique:function(e,t,n){return n.indexOf(e)===t},detect_scroll:function(){console.log("detected")},renderStudents:function(){this.$students.empty(),this.collection.forEach(this.renderStudent,this)},renderFilteredStudents:function(e){this.array.push(e[0].attributes.name);for(var t=0;t<this.array.length;t++){this.$students.empty();{this.array[t].filter(this.onlyUnique)}}},renderStudent:function(e){var t=new a({model:e});this.$students.append(t.render().el)},renderTags:function(){this.$tags.empty(),this.projectcollection.forEach(this.renderTag,this)},renderFilteredTags:function(e){for(var t=0;t<e.length;t++){e[t].attributes.box_name}this.$tags.empty(),e.forEach(this.renderTag,this)},renderTag:function(e){var t=new o({model:e});this.$tags.append(t.render().el)},render:function(){return this.$el.html(this.template()),this.$students=this.$el.find(".box"),this.$students.hide(),this.$tags=this.$el.find(".tag"),this.$el.find(".tag").hide(),this.$el.find(".header").addClass="white",this.$el.find(".form").addClass="white",this}});t.exports=r},{"../../../_hbs/introview.hbs":2,"../collections/BoxCollection.js":9,"../collections/ProjectCollection.js":10,"../collections/TagCollection.js":11,"./BoxItemView.js":17,"./ProjectItemView.js":21}],19:[function(e,t){var n=e("../collections/BoxCollection.js"),i=(e("../collections/TagCollection.js"),e("../collections/ProjectCollection.js")),a=e("./BoxItemView.js"),o=(e("./ProjectItemView.js"),e("../../../_hbs/overview.hbs")),s=Backbone.View.extend({template:o,tagName:"div",className:"overview",events:{"input .name":"inputFilter","click .add":"clickAdd","click .home":"goHome"},array:[],goHome:function(){Window.Application.navigate("intro",{trigger:!0}),location.reload()},inputFilter:function(e){e.preventDefault();var t=$(e.currentTarget).val().toLowerCase();""!==t?this.renderFilteredBoxes(this.collection.filterByBox(t)):(this.$el.find(".add").hide(),this.$el.find(".optionHeader").show(),this.array=[],this.collection.fetch())},clickAdd:function(e){if(e.preventDefault(),""!==this.$el.find(".name").val()){var t=this.collection;this.collection.create({name:this.$el.find(".name").val()},{success:function(){var e=t.models[t.models.length-1];$.map(e.attributes,function(e,t){});var n=t.models[t.models.length-1].id;Window.Application.navigate("boxes/"+n,{trigger:!0})}}),this.$el.find(".name").val("")}},initialize:function(){this.collection=new n,this.listenTo(this.collection,"sync",this.renderBoxes),this.collection.fetch(),this.projectcollection=new i,this.listenTo(this.projectcollection,"sync",this.renderTags),this.projectcollection.fetch()},renderBoxes:function(){this.$boxes.empty(),this.collection.forEach(this.renderBox,this)},onlyUnique:function(e,t,n){return n.indexOf(e)==t},renderFilteredBoxes:function(e){console.log("renderFilteredBoxes"),console.log(e.length),e.length<=0?(console.log("new => add?"),this.$el.find(".add").show(),this.$el.find(".optionHeader").hide()):e.length>0&&(console.log("exists"),this.$el.find(".optionHeader").show(),this.$el.find(".add").hide());for(var t=0;t<e.length;t++){e[t].attributes.name}this.$boxes.empty(),e.forEach(this.renderBox,this)},renderBox:function(e){var t=new a({model:e});this.$boxes.append(t.render().el)},render:function(){return this.$el.html(this.template()),this.$boxes=this.$el.find(".box"),this.$el.find(".add").hide(),this.$el.find(".optionHeader").show(),this.$tags=this.$el.find(".tag"),this.$el.find(".tag").hide(),this}});t.exports=s},{"../../../_hbs/overview.hbs":3,"../collections/BoxCollection.js":9,"../collections/ProjectCollection.js":10,"../collections/TagCollection.js":11,"./BoxItemView.js":17,"./ProjectItemView.js":21}],20:[function(e,t){var n=e("../../../_hbs/project_detail.hbs"),i=e("../models/Project.js"),a=e("../collections/TagCollection.js"),o=(e("../collections/ProjectCollection.js"),e("../views/TagItemView.js")),s=Backbone.View.extend({template:n,tagName:"section",className:"dozen",events:{"click .delete":"clickDelete","click .gone":"removeFromTagsList","click .remove":"clickRemove","click .add":"clickAdd","keydown .text":"addTags","click .home":"goHome","click .gotomybox":"gotomybox"},array:[],booleancheck:!1,goHome:function(){Window.Application.navigate("intro",{trigger:!0}),location.reload()},gotomybox:function(e){e.preventDefault(),Window.Application.navigate("boxes/"+this.model.get("box_id"),{trigger:!0})},addTags:function(e){var t=$(e.currentTarget).val().toLowerCase();if(13==e.keyCode&&""!==this.$el.find(".text").val()){(" "!==t||""!==t||void 0!==t)&&this.array.push(t),console.log("array "+this.array);var n=t.split(" ");n=n.filter(Boolean);for(var i=0;i<n.length;i++)if(" "!==n[i]){var a=document.createElement("li");a.className="item inputwrapper hidden",a.setAttribute("id",i);var o=$(".addtags ul.inputwrap .taglist"),s=document.createElement("span"),r=document.createTextNode(n[i]);s.appendChild(r);var l=document.createElement("span");l.className="remove",a.appendChild(s),a.appendChild(l),o.append(a),this.$el.find(".text").val("")}}},clickRemove:function(e){var t=$(e.currentTarget.parentNode).attr("id"),n=this.array.join(),i=n.split(" ");allIds=document.getElementsByClassName("item inputwrapper");var a=[];i.splice(t,1),$(e.currentTarget.parentNode).remove();for(var o=0;o<allIds.length;o++)allIds[o].setAttribute("id",o),a.push(allIds[o].getElementsByTagName("span")[0].innerHTML);this.array=a},clickAdd:function(e){if(e.preventDefault(),!(""===this.$el.find(".text").val()&&0===document.getElementsByClassName("item inputwrapper").length||" "===this.$el.find(".text").val()&&0===document.getElementsByClassName("item inputwrapper").length)){var t=this.array,n=this.tag,i=this.model;if(!(""===this.$el.find(".text").val()&&0===document.getElementsByClassName("item inputwrapper").length||" "===this.$el.find(".text").val()&&0===document.getElementsByClassName("item inputwrapper").length)){" "===this.$el.find(".text").val()||""!==this.$el.find(".text").val()&&t.push($(".addtags .text").val());var a=t.join(" ");console.log(a),n.create({box_name:i.get("box_name"),tag:a,project_name:i.get("name"),project_id:i.get("id"),box_id:i.get("box_id")},{success:function(){$(".item.inputwrapper").remove(),location.reload()}}),i.set("tags_list",i.get("tags_list")+", "+a)&&(i.save(),location.reload())}}},changeScore:function(e){e.preventDefault(),this.model.set("name",this.$el.find(".name").val()),this.model.save()},removeFromTagsList:function(e){e.preventDefault();var t=e.currentTarget.parentNode.getElementsByTagName("p")[0].innerHTML,n=this.model.get("tags_list").replace(", "+t,"");this.model.set("tags_list",n),this.model.save()},clickDelete:function(e){e.preventDefault(),document.getElementById("popup").className="";var t=document.getElementById("popup"),n=this.model;t.getElementsByClassName("go")[0].addEventListener("click",function(e){e.preventDefault(),n.destroy(),$.ajax({type:"DELETE",url:window.settings.httpRoot+"api/tags/project/"+n.get("id"),success:function(e){}}),document.getElementById("popup").className="hidden"}),t.getElementsByClassName("no")[0].addEventListener("click",function(e){e.preventDefault(),document.getElementById("popup").className="hidden"})},initialize:function(e){e&&e.id&&(this.model=new i,this.model.on("destroy",function(){Window.Application.navigate("overview",{trigger:!0})}),this.model.set("id",e.id),this.model.fetch({success:function(e,t){0===t.length&&Window.Application.navigate("overview",{trigger:!0})}}),this.listenTo(this.model,"sync",this.render),this.tag=new a({project_id:e.id}),this.tag.on("sync",this.renderAllTags,this))},renderAllTags:function(){this.$tag.empty(),this.tag.forEach(this.renderTag,this)},renderTag:function(e){this.$tag.append(new o({model:e}).render().el)},render:function(){return this.$el.html(this.template(this.model.attributes)),this.$tag=this.$el.find(".tagresults"),this.tag.fetch(),this}},{levenshtein_distance_a:function(e,t){if(0==e.length)return t.length;if(0==t.length)return e.length;var n,i=[];for(n=0;n<=t.length;n++)i[n]=[n];var a;for(a=0;a<=e.length;a++)i[0][a]=a;for(n=1;n<=t.length;n++)for(a=1;a<=e.length;a++)i[n][a]=t.charAt(n-1)==e.charAt(a-1)?i[n-1][a-1]:Math.min(i[n-1][a-1]+1,Math.min(i[n][a-1]+1,i[n-1][a]+1));return i[t.length][e.length]}});t.exports=s},{"../../../_hbs/project_detail.hbs":4,"../collections/ProjectCollection.js":10,"../collections/TagCollection.js":11,"../models/Project.js":13,"../views/TagItemView.js":22}],21:[function(e,t){var n=e("../../../_hbs/project_item.hbs"),i=Backbone.View.extend({template:n,tagName:"li",className:"anim fadeInUp",events:{"click .detail":"clickDetail","click .listdetail":"clickDetail","click .boxdetail":"projDetail","click .box_detail":"boxDetail","click .proj_detail":"projDetail"},clickDelete:function(e){e.preventDefault(),this.model.destroy()},clickDetail:function(e){e.preventDefault(),Window.Application.navigate("projects/"+this.model.get("id"),{trigger:!0})},projDetail:function(e){e.preventDefault(),Window.Application.navigate("projects/"+this.model.get("id"),{trigger:!0})},boxDetail:function(e){e.preventDefault(),Window.Application.navigate("boxes/"+this.model.get("box_id"),{trigger:!0})},initialize:function(){this.listenTo(this.model,"destroy",this.remove)},render:function(){return this.$el.html(this.template(this.model.attributes)),this.$el.attr("data-wow-delay","s"),this.$el.find("a").addClass("effect-sarah"),this}});t.exports=i},{"../../../_hbs/project_item.hbs":5}],22:[function(e,t){var n=e("../../../_hbs/feedback_item.hbs"),i=Backbone.View.extend({template:n,tagName:"li",events:{"click .gone":"clickDelete"},clickDelete:function(e){var t=this.model;setTimeout(function(){e.preventDefault(),t.destroy(),location.reload()},100)},initialize:function(){},render:function(){return this.$el.html(this.template(this.model.attributes)),this}});t.exports=i},{"../../../_hbs/feedback_item.hbs":1}],23:[function(e,t,n){"use strict";function i(){var e=new s.HandlebarsEnvironment;return u.extend(e,s),e.SafeString=l["default"],e.Exception=d["default"],e.Utils=u,e.escapeExpression=u.escapeExpression,e.VM=f,e.template=function(t){return f.template(t,e)},e}var a=function(e){return e&&e.__esModule?e:{"default":e}};n.__esModule=!0;var o=e("./handlebars/base"),s=a(o),r=e("./handlebars/safe-string"),l=a(r),c=e("./handlebars/exception"),d=a(c),h=e("./handlebars/utils"),u=a(h),p=e("./handlebars/runtime"),f=a(p),m=e("./handlebars/no-conflict"),g=a(m),v=i();v.create=i,g["default"](v),v["default"]=v,n["default"]=v,t.exports=n["default"]},{"./handlebars/base":24,"./handlebars/exception":25,"./handlebars/no-conflict":26,"./handlebars/runtime":27,"./handlebars/safe-string":28,"./handlebars/utils":29}],24:[function(e,t,n){"use strict";function i(e,t){this.helpers=e||{},this.partials=t||{},a(this)}function a(e){e.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new d["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')}),e.registerHelper("blockHelperMissing",function(t,n){var i=n.inverse,a=n.fn;if(t===!0)return a(this);if(t===!1||null==t)return i(this);if(f(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):i(this);if(n.data&&n.ids){var s=o(n.data);s.contextPath=l.appendContextPath(n.data.contextPath,n.name),n={data:s}}return a(t,n)}),e.registerHelper("each",function(e,t){function n(t,n,a){c&&(c.key=t,c.index=n,c.first=0===n,c.last=!!a,h&&(c.contextPath=h+t)),r+=i(e[t],{data:c,blockParams:l.blockParams([e[t],t],[h+t,null])})}if(!t)throw new d["default"]("Must pass iterator to #each");var i=t.fn,a=t.inverse,s=0,r="",c=void 0,h=void 0;if(t.data&&t.ids&&(h=l.appendContextPath(t.data.contextPath,t.ids[0])+"."),m(e)&&(e=e.call(this)),t.data&&(c=o(t.data)),e&&"object"==typeof e)if(f(e))for(var u=e.length;u>s;s++)n(s,s,s===e.length-1);else{var p=void 0;for(var g in e)e.hasOwnProperty(g)&&(p&&n(p,s-1),p=g,s++);p&&n(p,s-1,!0)}return 0===s&&(r=a(this)),r}),e.registerHelper("if",function(e,t){return m(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||l.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),e.registerHelper("with",function(e,t){m(e)&&(e=e.call(this));var n=t.fn;if(l.isEmpty(e))return t.inverse(this);if(t.data&&t.ids){var i=o(t.data);i.contextPath=l.appendContextPath(t.data.contextPath,t.ids[0]),t={data:i}}return n(e,t)}),e.registerHelper("log",function(t,n){var i=n.data&&null!=n.data.level?parseInt(n.data.level,10):1;e.log(i,t)}),e.registerHelper("lookup",function(e,t){return e&&e[t]})}function o(e){var t=l.extend({},e);return t._parent=e,t}var s=function(e){return e&&e.__esModule?e:{"default":e}};n.__esModule=!0,n.HandlebarsEnvironment=i,n.createFrame=o;var r=e("./utils"),l=s(r),c=e("./exception"),d=s(c),h="3.0.1";n.VERSION=h;var u=6;n.COMPILER_REVISION=u;var p={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};n.REVISION_CHANGES=p;var f=l.isArray,m=l.isFunction,g=l.toString,v="[object Object]";i.prototype={constructor:i,logger:w,log:b,registerHelper:function(e,t){if(g.call(e)===v){if(t)throw new d["default"]("Arg not supported with multiple helpers");l.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(g.call(e)===v)l.extend(this.partials,e);else{if("undefined"==typeof t)throw new d["default"]("Attempting to register a partial as undefined");this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]}};var w={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:1,log:function(e,t){if("undefined"!=typeof console&&w.level<=e){var n=w.methodMap[e];
(console[n]||console.log).call(console,t)}}};n.logger=w;var b=w.log;n.log=b},{"./exception":25,"./utils":29}],25:[function(e,t,n){"use strict";function i(e,t){var n=t&&t.loc,o=void 0,s=void 0;n&&(o=n.start.line,s=n.start.column,e+=" - "+o+":"+s);for(var r=Error.prototype.constructor.call(this,e),l=0;l<a.length;l++)this[a[l]]=r[a[l]];Error.captureStackTrace&&Error.captureStackTrace(this,i),n&&(this.lineNumber=o,this.column=s)}n.__esModule=!0;var a=["description","fileName","lineNumber","message","name","number","stack"];i.prototype=new Error,n["default"]=i,t.exports=n["default"]},{}],26:[function(e,t,n){(function(e){"use strict";n.__esModule=!0,n["default"]=function(t){var n="undefined"!=typeof e?e:window,i=n.Handlebars;t.noConflict=function(){n.Handlebars===t&&(n.Handlebars=i)}},t.exports=n["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],27:[function(e,t,n){"use strict";function i(e){var t=e&&e[0]||1,n=m.COMPILER_REVISION;if(t!==n){if(n>t){var i=m.REVISION_CHANGES[n],a=m.REVISION_CHANGES[t];throw new f["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+a+").")}throw new f["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function a(e,t){function n(n,i,a){a.hash&&(i=u.extend({},i,a.hash)),n=t.VM.resolvePartial.call(this,n,i,a);var o=t.VM.invokePartial.call(this,n,i,a);if(null==o&&t.compile&&(a.partials[a.name]=t.compile(n,e.compilerOptions,t),o=a.partials[a.name](i,a)),null!=o){if(a.indent){for(var s=o.split("\n"),r=0,l=s.length;l>r&&(s[r]||r+1!==l);r++)s[r]=a.indent+s[r];o=s.join("\n")}return o}throw new f["default"]("The partial "+a.name+" could not be compiled when running in runtime-only mode")}function i(t){var n=void 0===arguments[1]?{}:arguments[1],o=n.data;i._setup(n),!n.partial&&e.useData&&(o=c(t,o));var s=void 0,r=e.useBlockParams?[]:void 0;return e.useDepths&&(s=n.depths?[t].concat(n.depths):[t]),e.main.call(a,t,a.helpers,a.partials,o,r,s)}if(!t)throw new f["default"]("No environment passed to template");if(!e||!e.main)throw new f["default"]("Unknown template object: "+typeof e);t.VM.checkRevision(e.compiler);var a={strict:function(e,t){if(!(t in e))throw new f["default"]('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,i=0;n>i;i++)if(e[i]&&null!=e[i][t])return e[i][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:u.escapeExpression,invokePartial:n,fn:function(t){return e[t]},programs:[],program:function(e,t,n,i,a){var s=this.programs[e],r=this.fn(e);return t||a||i||n?s=o(this,e,r,t,n,i,a):s||(s=this.programs[e]=o(this,e,r)),s},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=u.extend({},t,e)),n},noop:t.VM.noop,compilerInfo:e.compiler};return i.isTop=!0,i._setup=function(n){n.partial?(a.helpers=n.helpers,a.partials=n.partials):(a.helpers=a.merge(n.helpers,t.helpers),e.usePartial&&(a.partials=a.merge(n.partials,t.partials)))},i._child=function(t,n,i,s){if(e.useBlockParams&&!i)throw new f["default"]("must pass block params");if(e.useDepths&&!s)throw new f["default"]("must pass parent depths");return o(a,t,e[t],n,0,i,s)},i}function o(e,t,n,i,a,o,s){function r(t){var a=void 0===arguments[1]?{}:arguments[1];return n.call(e,t,e.helpers,e.partials,a.data||i,o&&[a.blockParams].concat(o),s&&[t].concat(s))}return r.program=t,r.depth=s?s.length:0,r.blockParams=a||0,r}function s(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e=n.partials[n.name],e}function r(e,t,n){if(n.partial=!0,void 0===e)throw new f["default"]("The partial "+n.name+" could not be found");return e instanceof Function?e(t,n):void 0}function l(){return""}function c(e,t){return t&&"root"in t||(t=t?m.createFrame(t):{},t.root=e),t}var d=function(e){return e&&e.__esModule?e:{"default":e}};n.__esModule=!0,n.checkRevision=i,n.template=a,n.wrapProgram=o,n.resolvePartial=s,n.invokePartial=r,n.noop=l;var h=e("./utils"),u=d(h),p=e("./exception"),f=d(p),m=e("./base")},{"./base":24,"./exception":25,"./utils":29}],28:[function(e,t,n){"use strict";function i(e){this.string=e}n.__esModule=!0,i.prototype.toString=i.prototype.toHTML=function(){return""+this.string},n["default"]=i,t.exports=n["default"]},{}],29:[function(e,t,n){"use strict";function i(e){return d[e]}function a(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}function o(e,t){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n;return-1}function s(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return u.test(e)?e.replace(h,i):e}function r(e){return e||0===e?m(e)&&0===e.length?!0:!1:!0}function l(e,t){return e.path=t,e}function c(e,t){return(e?e+".":"")+t}n.__esModule=!0,n.extend=a,n.indexOf=o,n.escapeExpression=s,n.isEmpty=r,n.blockParams=l,n.appendContextPath=c;var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},h=/[&<>"'`]/g,u=/[&<>"'`]/,p=Object.prototype.toString;n.toString=p;var f=function(e){return"function"==typeof e};f(/x/)&&(n.isFunction=f=function(e){return"function"==typeof e&&"[object Function]"===p.call(e)});var f;n.isFunction=f;var m=Array.isArray||function(e){return e&&"object"==typeof e?"[object Array]"===p.call(e):!1};n.isArray=m},{}],30:[function(e,t){t.exports=e("./dist/cjs/handlebars.runtime")["default"]},{"./dist/cjs/handlebars.runtime":23}],31:[function(e,t){t.exports=e("handlebars/runtime")["default"]},{"handlebars/runtime":30}]},{},[8]);
//# sourceMappingURL=app.js.map