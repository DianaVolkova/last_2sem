document.addEventListener('DOMContentLoaded', () => {

	// получаем все элементы с классом pushmenu
	const pushmenu = document.getElementsByClassName('pushmenu');

	// получаем элемент с классом hidden-overley
	const hiddenOverley = document.querySelector('.hidden-overley');

	// отслеживаем клик клика по оверлею
	hiddenOverley.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('show');
		document.querySelector('.sidebar').classList.toggle('show');
		document.querySelector('body').classList.toggle('sidebar-opened');
		for( i=0; i < pushmenu.length; i++ ){
				pushmenu[i].classList.toggle('open');
		}
	});

	const pushmenuFunction = function() {
		document.querySelector('.pushmenu').classList.toggle('open');
		document.querySelector('.sidebar').classList.toggle('show');
		document.querySelector('.hidden-overley').classList.toggle('show');
		document.body.classList.toggle('sidebar-opened')
	};

	// Отслеживаем клики кнопок с классом pushmenu 
	for( i=0; i < pushmenu.length; i++ ){
		pushmenu[i].addEventListener('click', pushmenuFunction, false);
	}

	// Получим все родительские элементы в меню
	const sidebarAccordeon = document.querySelectorAll('.sidebar .menu-parent-item a:first-child');
	const accordeonFunction =  function() { 
		this.parentNode.querySelector('ul').classList.toggle('show');
		this.querySelector('i').classList.toggle('rotate');
	}
	// Отслеживаем клики родительских пунктов меню 
	for( i=0; i < sidebarAccordeon.length; i++ ){
		sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
	}
});






window.addEventListener("DOMContentLoaded", function () {
	"use strict";
	//Получаем табы (переключатели), родительский элемент табов, и контент табов
	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info-header"),
		tabContect = document.querySelectorAll(".info-tabcontent");
	//Функция которая скрывает контентные табы
	function hideTabContect(a) {
		for (let i = a; i < tabContect.length; i++) {
			tabContect[i].classList.remove("show");
			tabContect[i].classList.add("hide");
		}
	}
	//Скрываются все кроме 1 элемента
	hideTabContect(1);
	//Функция показа контентных табов
	function ShowTabContect(b) {
		if (tabContect[b].classList.contains("hide")) {
			tabContect[b].classList.remove("hide");
			tabContect[b].classList.add("show");
		}
	}

	//Создаем событие клика на родителя, используя делегирование событий
	info.addEventListener("click", function (event) {
		let target = event.target;

		if (target && target.classList.contains("info-header-tab")) {
			// Связь элементов при совпадении target
			for (let i = 0; i < tab.length; i++) {
				//если совпадают
				if (target == tab[i]) {
					//Скрываем все табы
					hideTabContect(0);
					// удаляем класс активности таба
					tab.forEach((item) => {
						item.classList.remove("active");
					});
					//элементу target(на который кликнули) добавляем активный класс
					target.classList.add("active");

					//Совпадение по нумерации
					ShowTabContect(i);

					break;
				}
			}
		}
	});
	// Слайдер
	// Текущий слайд
	let slideIndex = 1,
		slides = document.querySelectorAll(".sliderNew-item"),
		prev = document.querySelector(".prev"),
		next = document.querySelector(".next"),
		dotsWrap = document.querySelector(".sliderNew-dots"),
		dots = document.querySelectorAll(".dot");

	showSlides(slideIndex);
	// Принимала аргумент номер слайда, который нужно показать
	function showSlides(n) {
		// дополнительно делаем проверку чтобы индекс не вышел за пределы
		if (n > slides.length) {
			// Возвращаемся к первому слайду
			slideIndex = 1;
		}
		if (n < 1) {
			// Возвращаемся к последнему слайду
			slideIndex = slides.length;
		}

		slides.forEach((item) => (item.style.display = "none"));
		// for (let i = 0; i < slides.length; i++) {
		//     slides[i].style.display = 'none';
		// }
		dots.forEach((item) => item.classList.remove("dot-active"));

		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].classList.add("dot-active");
	}
	function plusSlides(n) {
		showSlides((slideIndex += n));
	}
	function currentSlide(n) {
		showSlides((slideIndex = n));
	}

	prev.addEventListener("click", function () {
		plusSlides(-1);
	});

	next.addEventListener("click", function () {
		plusSlides(1);
	});
	//Создаем событие клика на родителя, используя делегирование событий
	dotsWrap.addEventListener("click", function (event) {
		// перебираем все dot и узнаем на какую именно кликнули
		for (let i = 0; i < dots.length + 1; i++) {
			// проверяем элемент на соответствие и узнаем номер точки
			if (
				event.target.classList.contains("dot") &&
				event.target == dots[i - 1]
			) {
				currentSlide(i);
			}
		}
	});
})





var containers;
function initDrawers() {
	// Get the containing elements
	containers = document.querySelectorAll(".container");
	setHeights();
	wireUpTriggers();
	window.addEventListener("resize", setHeights);
}

window.addEventListener("load", initDrawers);

function setHeights() {
	containers.forEach(container => {
		// Get content
		let content = container.querySelector(".content");
		// Needed if this is being fired after a resize
		content.removeAttribute("aria-hidden");
		// Height of content to show/hide
		let heightOfContent = content.getBoundingClientRect().height;
		// Set a CSS custom property with the height of content
		container.style.setProperty("--containerHeight", `${heightOfContent}px`);
		// Once height is read and set
		setTimeout(e => {
			container.classList.add("height-is-set");
			content.setAttribute("aria-hidden", "true");
		}, 0);
	});
}

function wireUpTriggers() {
	containers.forEach(container => {
		// Get each trigger element
		let btn = container.querySelector(".trigger");
		// Get content
		let content = container.querySelector(".content");
		btn.addEventListener("click", () => {
			container.setAttribute(
				"data-drawer-showing",
				container.getAttribute("data-drawer-showing") === "true" ? "false" : "true"
			);
			content.setAttribute(
				"aria-hidden",
				content.getAttribute("aria-hidden") === "true" ? "false" : "true"
			);
		});
	});
}
//---------------------------------------------------------
(function(){
    var modal = document.querySelector('.modal-container');
    var closeButton = document.querySelector('.close');
    var modalTriggers = document.querySelectorAll('[data-trigger]');
  
    var isModalOpen = false;
    var pageYOffset = 0;
  
    var openModal = function() {
      pageYOffset = window.pageYOffset;
      modal.classList.add('is-open');
      isModalOpen = true;
    }
  
    var closeModal = function() {
      modal.classList.remove('is-open');
      isModalOpen = false;
    }
  
    var onScroll = function(e) {
      if (isModalOpen) {
        e.preventDefault();
        window.scrollTo(0, pageYOffset);
      }
    }
  
    modalTriggers.forEach(function(item) { 
      item.addEventListener('click', openModal);
    })
  
    document.addEventListener('scroll', onScroll);
  
    closeButton.addEventListener('click', closeModal);
  })();

//------------------------------



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("filter__my");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//////--------


document.addEventListener('DOMContentLoaded', () => {

	// получаем все элементы с классом pushmenu
	const pushmenu = document.getElementsByClassName('pushmenu');

	// получаем элемент с классом hidden-overley
	const hiddenOverley = document.querySelector('.hidden-overley');

	// отслеживаем клик клика по оверлею
	hiddenOverley.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('show');
		document.querySelector('.sidebar').classList.toggle('show');
		document.querySelector('body').classList.toggle('sidebar-opened');
		for( i=0; i < pushmenu.length; i++ ){
				pushmenu[i].classList.toggle('open');
		}
	});

	const pushmenuFunction = function() {
		document.querySelector('.pushmenu').classList.toggle('open');
		document.querySelector('.sidebar').classList.toggle('show');
		document.querySelector('.hidden-overley').classList.toggle('show');
		document.body.classList.toggle('sidebar-opened')
	};

	// Отслеживаем клики кнопок с классом pushmenu 
	for( i=0; i < pushmenu.length; i++ ){
		pushmenu[i].addEventListener('click', pushmenuFunction, false);
	}

	// Получим все родительские элементы в меню
	const sidebarAccordeon = document.querySelectorAll('.sidebar .menu-parent-item a:first-child');
	const accordeonFunction =  function() { 
		this.parentNode.querySelector('ul').classList.toggle('show');
		this.querySelector('i').classList.toggle('rotate');
	}
	// Отслеживаем клики родительских пунктов меню 
	for( i=0; i < sidebarAccordeon.length; i++ ){
		sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
	}
});

