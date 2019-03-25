(() => {
	console.log('fired');

	const 	shields		= document.querySelectorAll('.sigil-container'),
			lightBox 	= document.querySelector('.lightbox'),
			video		= document.querySelector('video'),
			closeLB 	= document.querySelector('.lightbox-close'),
			banners		= document.querySelector('#houseImages'),
			houseName 	= document.querySelector('.house-name'),
			houseInfo	= document.querySelector('.house-info');

	const houseData 	= [
		`House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`
		];

	function showLightbox() {
		let targetHouse = this.className.split(" ")[1];

		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		houseName.textContent = `House ${targetSrc}`;

		houseInfo.textContent = houseData[0];

		video.src = `video/House-${targetSrc}.mp4`;

		lightbox.classlist.add('lightbox-on');

		video.load();
		video.play();
	}

	function hideLightbox() {
		lightBox.classList.remove('lightbox-on');

		video.currentTime = 0;
		video.pause();
	}

	function animateBanner() {
		const offSet = 600;

		totalOffset = this.dataset.offset = offSet;

		TweenMax.to(banners, 0.8, { right: totalOffset });
	}

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	video.addEventListener('ended', closeLightbox);
	closeLB.addEventListener('click', closeLightbox);
})();