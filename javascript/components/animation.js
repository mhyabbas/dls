document.addEventListener('DOMContentLoaded', function () {

	gsap.registerPlugin(ScrollTrigger);

	// Header
	if (document.querySelector('.animation') != null) {

		// Create background icons
		function createIcons(num) {
			let animation = document.querySelector('.animation');
			let container = document.querySelector('.animation .container');
			let icon1 = document.querySelector('.animation--icon1');
			let icon2 = document.querySelector('.animation--icon2');

			for (let i = num; i > 0; i--) {
				newIcon1 = icon1.cloneNode(true);
				newIcon2 = icon2.cloneNode(true);
				animation.insertBefore(newIcon1, container);
				animation.insertBefore(newIcon2, container);
			}
		}

		function moveX(target) {
			gsap.to(target, {
				duration: "random(3,5,1)",
				x: "+=" + "random(-50,50,5)",
				ease: Sine.easeInOut,
				onComplete: moveX,
				onCompleteParams: [target]
			});
		}

		function moveY(target) {
			gsap.to(target, {
				duration: "random(3,5,1)",
				y: "+=" + "random(-50,50,5)",
				ease: Sine.easeInOut,
				onComplete: moveY,
				onCompleteParams: [target]
			});
		}

		createIcons(8);

		setTimeout(function(){
			let icons1 = document.querySelectorAll('.animation--icon1');
			let icons2 = document.querySelectorAll('.animation--icon2');

			let iconsLength1 = icons1.length;
			for(let i = 0 ; i < iconsLength1; i++) {
				gsap.set(icons1[i], {x:"random(-200,1400,50)",y:"random(200,1000,50)",scale:0,opacity:0,transformOrigin:"100% 100%"});
				moveX(icons1[i]);
				moveY(icons1[i]);
			}

			let iconsLength2 = icons2.length;
			for(let i = 0 ; i < iconsLength2; i++) {
				gsap.set(icons2[i], {fill:"random(['white','#0e73b6','#1D7C99'])",x:"random(-200,1400,50)",y:"random(200,1000,50)",scale:0,opacity:0,transformOrigin:"100% 100%"});
				moveX(icons2[i]);
				moveY(icons2[i]);
			}

			// iPad
			let ipad = document.querySelector('.animation__ipad');
			gsap.set(ipad, {opacity:0,y:"+=100px"});

			// iPhone
			let iphone = document.querySelector('.animation__iphone');
			gsap.set(iphone, {opacity:0,y:"+=100px"});

			// Card 1
			let card1 = document.querySelector('.animation__card1');
			gsap.set(card1, {opacity:0,x:"-=50px"});

			// Card 2
			let card2 = document.querySelector('.animation__card2');
			gsap.set(card2, {opacity:0,x:"-=50px"});

			// Card 3
			let card3 = document.querySelector('.animation__card3');
			gsap.set(card3, {opacity:0,x:"-=50px"});

			// Timeline
			let tl = gsap.timeline();

			tl
			.to(ipad, {duration:0.5,display:"block",y:"50px",opacity:1,ease:"power1.out"},"0")
			.to(iphone, {duration:0.5,display:"block",y:"50px",opacity:1,ease:"power1.out"},"0.5")
			.to(card1, {duration:0.5,display:"block",x:"0",opacity:1,ease:"power1.out"},"0.5")
			.to(card2, {duration:0.5,display:"block",x:"0",opacity:1,ease:"power1.out"},"0.7")
			.to(card3, {duration:0.5,display:"block",x:"0",opacity:1,ease:"power1.out"},"0.9")
			.to(icons1, {duration:0.5,display:"block",scale:"random(0.2, 1.2, .1)",opacity:"random(0.2, 0.6, .1)", stagger: {each:0.1,from:"random",ease:"power2.inOut"}}, "0.5")
			.to(icons2, {duration:0.5,display:'block',scale:"random(0.2,1,0.1)",opacity:"random(0.2,0.4,0.1)", stagger: {each:0.1,from:"random",ease:"power2.inOut"}}, "0.5")

		}, 10);
	}

	// Cards
	if (document.querySelector('.card') != null) {
		let cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
		let self = this;

		cards.forEach(function(self) {
			let image = self.querySelector(".card__image");
			let body = self.querySelector(".card__body");

			gsap.set(self, {y:"+=80px",opacity:0,scale:0});
			gsap.set(image, {opacity:0,scale:0});
			gsap.set(body, {y:"+=20px",opacity:0});

			let tl = gsap.timeline();

			tl
			.to(self, {duration:0.5,autoAlpha:1,y:0,opacity:1,scale:1}, "0")
			.to(image, {duration:0.5,autoAlpha:1,opacity:1,scale:1}, "0.3")
			.to(body, {duration:0.5,autoAlpha:1,y:0,opacity:1}, "0.3")

			let st = ScrollTrigger.create({
				trigger: self,
				animation: tl
			});
		});
	}

	// Images
	if (document.querySelector('.bg--interpret') != null) {
		let image = document.querySelector('.bg--interpret');

		gsap.set(image, {x:"+=150px",opacity:0});

		let tween = gsap.to(image, {duration:0.5,autoAlpha:1,x:0,opacity:1});

		let st = ScrollTrigger.create({
			trigger: '#interpreters',
			animation: tween
		});
	}

	if (document.querySelector('.bg--pract') != null) {
		let image = document.querySelector('.bg--pract');

		gsap.set(image, {x:"-=150px",opacity:0});

		let tween = gsap.to(image, {duration:0.5,autoAlpha:1,x:0,opacity:1});

		let st = ScrollTrigger.create({
			trigger: '#practitioners',
			animation: tween
		});
	}

}, false);