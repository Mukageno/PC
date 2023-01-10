$(document).ready(function () {

	const courseItems = document.querySelectorAll(".course__countdown-item > h4");
	let courseCountdownDate = new Date(2023, 8, 29, 13, 11, 0).getTime();
	function getcourseCountdownTime() {
		const courseNow = new Date().getTime();

		const courseDistance = courseCountdownDate - courseNow;

		const courseOneDay = 24 * 60 * 60 * 1000;
		const courseOneHour = 60 * 60 * 1000;
		const courseOneMinute = 60 * 1000;

		let courseDays = Math.floor(courseDistance / courseOneDay);
		let courseHours = Math.floor((courseDistance % courseOneDay) / courseOneHour);
		let courseMinutes = Math.floor((courseDistance % courseOneHour) / courseOneMinute);
		let courseSeconds = Math.floor((courseDistance % courseOneMinute) / 1000);

		if (courseDays < 10) {
			courseDays = '0' + courseDays;
		}
		if (courseHours < 10) {
			courseHours = '0' + courseHours;
		}
		if (courseMinutes < 10) {
			courseMinutes = '0' + courseMinutes;
		}
		if (courseSeconds < 10) {
			courseSeconds = '0' + courseSeconds;
		}
		if (courseDays == 0 && courseHours == 0 && courseMinutes == 0 && courseSeconds == 0) {

		}
		const courseValues = [courseDays, courseHours, courseMinutes, courseSeconds];


		courseItems.forEach(function (item, courseIndex) {
			item.textContent = courseValues[courseIndex];
		})

	}
	// obnovlenie
	let courseCountdown = setInterval(getcourseCountdownTime, 1000);

	// initsializaciya
	getcourseCountdownTime();


	$('.burger__open').click(function () {
		$('.header').css('display', 'flex');
		$('.header').addClass('header_active');
		$('.burger__open').css('transform', 'scale(0)');
		$('.burger__close').css('transform', 'scale(1)');
		$('body').addClass('body-lock');
	});
	$('.burger__close').click(function () {
		$('.header').removeClass('header_active');
		$('.burger__open').css('transform', 'scale(1)');
		$('.burger__close').css('transform', 'scale(0)');
		$('body').removeClass('body-lock');
	});

	$('.header__menu ul li a[href^="#"]').click(function () {
		var menuheight = 100;
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - menuheight
		}, 500);
		$('.header__menu ul li a[href^="#"]').removeClass('menu_active');
		$('.header').removeClass('header_active');
		$('.burger__close').css('transform', 'scale(0)');
		$('.burger__open').css('transform', 'scale(1)');
		$(this).addClass('menu_active');
		return false;
	});

	$('body').scroll(function () {
		if ($('body').scrollTop() > 50) {
			$('.header').addClass('header_fixed')
		}

	});



	window.addEventListener('scroll', headerActive);
	function headerActive() {
		const headerAct = document.querySelector('.header__fixs');
		if (window.pageYOffset > 50) {
			headerAct.classList.add('header_fixed');
		}
		else {
			headerAct.classList.remove('header_fixed');
		}
	}

	//animation start 



	const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll)
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}
				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} else {
					animItem.classList.remove('_active');
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		animOnScroll();
	}

	//animation end


	
});