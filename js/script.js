function init() {

	// console.log(document.getElementsByTagName('html')[0]);

	var filter = document.getElementsByClassName("filter");

	for (var i = 0; i < filter.length; i++) {
		filter[i].addEventListener("click", function(){
			console.log('filter');
		});
	}

}

init();
