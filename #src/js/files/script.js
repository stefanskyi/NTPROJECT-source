
window.onload = function () {
	document.addEventListener("click", documentActions);

	// Actions (делегирование события click)
	function documentActions(e) {
		const targetElement = e.target;

		if (window.innerWidth > 319 && isMobile.any()) {
			if (targetElement.classList.contains('pasiūlymai__arrow')) {
				targetElement.closest('.pasiūlymai__item').classList.toggle('_hover')
			}
			if (!targetElement.closest('.pasiūlymai__item') && document.querySelectorAll('.pasiūlymai__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.pasiūlymai__item._hover'), "_hover");
			}
		}

		if (targetElement.classList.contains('naujienos__more')) {
			getNaujienos(targetElement);
			e.preventDefault();
		}
	}

	async function getNaujienos(button) {
		if (!button.classList.contains('_hold')) {
			button.classList.add('_hold');
			//const file - real files from server
			// const file = "https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY";
			const file = "json/naujienos.json";
			let response = await fetch(file, {
				method: "GET"
			});
			if (response.ok) {
				let result = await response.json();
				loadNaujienos(result);
				button.classList.remove('_hold');
				//button.remove(); - need delete when use server api
				button.remove();
			} else {
				alert("Ошибка");
			}
		}
	}

	function loadNaujienos(data) {
		const naujienosItems = document.querySelector('.naujienos__items');

		data.naujienos.forEach(item => {
			const naujienosId = item.id;
			const naujienosUrl = item.url;
			const naujienosTitle = item.title;
			const naujienosImage = item.image;

			let naujienosTemplateStart = `<article data-pid="${naujienosId}" class="naujienos__item item-naujieno">`;
			let naujienosTemplateEnd = `</article>`;
			let naujienosTemplateImage = `
		<a href="${naujienosUrl}" class="item-naujieno__image _ibg">
			<img src="img/naujienos/${naujienosImage}" alt="${naujienosTitle}">
		</a>
	`;
			let naujienosTemplateBodyStart = `<div class="item-naujieno__body">`;
			let naujienosTemplateBodyEnd = `</div>`;
			let naujienosTemplateBlurStart = `<div class="blur-naujieno">`;
			let naujienosTemplateBlurEnd = `</div>`;
			let naujienosTemplateContent = `
		<div class="item-naujieno__content">
			<h5 class="item-naujieno__title">${naujienosTitle}</h5>
		</div>
	`;
			let naujienosTemplateBody = '';
			naujienosTemplateBody += naujienosTemplateBodyStart;
			naujienosTemplateBody += naujienosTemplateContent;
			naujienosTemplateBody += naujienosTemplateBodyEnd;

			let naujienosTemplateBlur = '';
			naujienosTemplateBlur += naujienosTemplateBlurStart;
			naujienosTemplateBlur += naujienosTemplateBlurEnd;

			let naujienosTemplate = '';
			naujienosTemplate += naujienosTemplateStart;
			naujienosTemplate += naujienosTemplateImage;
			naujienosTemplate += naujienosTemplateBody;
			naujienosTemplate += naujienosTemplateBlur;
			naujienosTemplate += naujienosTemplateEnd;

			naujienosItems.insertAdjacentHTML('beforeend', naujienosTemplate);
		});
	}
}



