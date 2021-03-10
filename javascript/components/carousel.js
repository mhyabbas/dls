if (document.querySelector('.carousel--about') != null) {

	new Splide('.carousel--about', {
		keyboard: 'focused',
		type: 'loop',
		arrows: 'slider',
		destroy: true,
		breakpoints: {
			1024: {
				destroy: false
			},
		}
	}).mount();

}