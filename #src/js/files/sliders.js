//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

if (document.querySelector('.slider-main__body')) {
	new Swiper('.slider-main__body', {
		observer: true,
		observerParents: true,
		slidersPerView: 1,
		spaceBetween: 88,
		watchOverflow: false,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		autoplay: {
			delay: 5000,
			// stopOnLastSlide: true,
			disableOnInteraction: false,
		},

		// centeredSlides:true,
		// parallax: true,
		// dotts
		// pagination:{
		// 	el: '.controls-slider-main__dots',
		// 	clickable: true,
		// },


		// arrows
		navigation: {
			nextEl: '.slider-main .slider-arrow_next',
			prevEl: '.slider-main .slider-arrow_prev',
		}
	});
}

if (document.querySelector('.slider-pradzia__body')) {
	new Swiper('.slider-pradzia__body', {
		observer: true,
		observerParents: true,
		// slidersPerView: 2.6,
		slidersPerView: 1,
		spaceBetween: 88,
		watchOverflow: false,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		// dotts
		pagination: {
			el: '.slider-pradzia__dotts',
			clickable: true,
		},


		// arrows
		navigation: {
			nextEl: '.slider-pradzia .slider-arrow_next',
			prevEl: '.slider-pradzia .slider-arrow_prev',
		},
		// breakpoints: {
		// 	// when window width is >= 320px
		// 	320: {
		// 		slidesPerView: 1.1,
		// 		spaceBetween: 15
		// 	},
		// 	// when window width is >= 768px
		// 	768: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20
		// 	},
		// 	// when window width is >= 992px
		// 	992: {
		// 		slidesPerView: 2.6,
		// 		spaceBetween: 88
		// 	}
		// }
	});
}

