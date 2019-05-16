//calls fullPage.js
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});

//declare pages with fullPage.js
var myFullpage = new fullpage('#fullpage', {
    anchors:['landing', 'about', 'projects', 'contact']
});

let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});
tl.add({
    targets: '.navbar a',
    translateX: 100,
    opacity: 1,
    delay: anime.stagger(500)
});
tl.add({
    targets: '.title',
    opacity: 1,
    duration: 500,
    easing: 'linear'
}, '-=1500');
tl.add({
    targets: '.sub',
    opacity: 1,
    duration: 500,
    easing: 'linear'
}, '-=500');
