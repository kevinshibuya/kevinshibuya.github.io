$('.menu a').on('click', function(e) {
	if (this.hash !== '') {
		e.preventDefault();
		
		const hash = this.hash;
		
		$('html, body').animate(
		{
			scrollTop: $(hash).offset().top
		},
		500
		);
	}
});

let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});
tl.add({
    targets: '.logo',
    translateX: 100,
    opacity: 1,
    duration: 500
});
tl.add({
    targets: 'header ul li a',
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

ScrollOut({
    threshold: .3
  });
