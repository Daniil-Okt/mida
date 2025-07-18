/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */

// Проверяем тёмную тему при загрузке страницы
function theme() {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.documentElement.classList.add('black-theme');
	}
	
	  // Отслеживаем изменение темы
	  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		if (event.matches) {
			document.documentElement.classList.add('black-theme');
		} else {
			document.documentElement.classList.remove('black-theme');
		}
	});
}
theme() 


// import MousePRLX from './libs/parallaxMouse'
import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';
import { btnTheme } from './modules/btnTheme';
// import Tabs from './modules/tabs';
// import Accordion from './modules/accordion';

// BaseHelpers.checkWebpSupport();
/* Добавление класса touch для HTML если браузер мобильный */
// BaseHelpers.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
BaseHelpers.addLoadedClass();
/* Фиксированный header */
BaseHelpers.headerFixed();


/** ===================================================================================
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/** ===================================================================================
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/** ===================================================================================
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */

window.addEventListener('load', () => {
	AOS.init();
})

/** ===================================================================================
 * Параллакс мышей
 * */
// new MousePRLX();


/* ТАБЫ ================================================================================================
 	* На wrapper блока табов добавить атрибут data-tabs="название"
	* Для обертки title табов добавить класс "tabs__nav"
	* Для title таба добавить класс "tabs__trigger"
	* Для обертки body табов добавить класс "tabs__content"
	* Для body таба добавить класс "tabs__panel"
*/
// new Tabs('название', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });
/* АККАРДЕОН ===========================================================================================
 	* Класс wrapper блока аккардеона добавить в инициализацию аккардиона
	* Каждый элемент аккардеона обернуть в блок с классом "accordion__item"
	* Для title аккардеона добавить класс "accordion__header"
	* Для content аккардеона добавить класс "accordion__content"
*/
// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

/* Динамический адаптив =================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
import { running } from './modules/running.js';
useDynamicAdapt()

/* Маска для инпута tel =================================================================================
	* Добавить класс tel к нужному инпуту 
*/
import { maskTel } from './modules/index.js'
maskTel()

/* Cкрыть меню при клике на его ссылки ==================================================================
*/
import { toggleLinkMenuNoOpen } from './modules/index.js'
toggleLinkMenuNoOpen()

/* Cкрыть меню при клике вне его ========================================================================
	* Добавить к меню класс 'your-menu'
*/
// import { toggleLinkMenuNoOpen } from './modules/index.js'
// toggleOutClickMenuRemoveOpen()

/* Удалить класс _active при клике вне элемента =========================================================
	* Передать в функцию нужный элемент и класс который нужно удалить
*/
// import { removeClassOutClickElement } from './modules/index.js'
// const elements = document.querySelectorAll('.class'); 
// removeClassOutClickElement(elements, '.removeClass')

/* Инициализация  swiper =================================================================================
*/
// const swiper = new Swiper('.swiper', {
//   speed: 800,
//   spaceBetween: 16,
//   slidesPerView: 1.4,
//   modules: [Autoplay, Navigation, Pagination],
//   loop: true,
//   initialSlide: 1,
//   autoplay: {
//     delay: 2500,
//     stopOnLastSlide: false,
//     disableOnIteration: false,
//   },
//   navigation: {
//     prevEl: ".reviews__button-slider-prev",
//     nextEl: ".reviews__button-slider-next"
//   },
//   pagination: {
//     el: ".card-slider__pagination",
//     dynamicBullets: true,
//     clickable: true,
//   },
//   breakpoints: {
//     1400: {
//       slidesPerView: 4,
//       spaceBetween: 24,
//   	},
//     1650: {
//         slidesPerView: 4,
//         spaceBetween: 48,
//     }
//   },
// });


/* Валидация формы ======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить класс tel на input type='tel'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
import { focusInput, validForm } from './modules/validFrom.js'
// const popupTranks = document.querySelector('.popup-thanks')
// const formNAME = document.getElementById('form-NAME')

//==== валидация ====
document.querySelectorAll('form').forEach(form => {
	validForm(form)
});

focusInput()
//==== отправка ====

//==== валидация ====

//==== валидация ====

//==== валидация ====

//==== валидация ====
// =======================================================================================================

/* Добавление класса _active родителю при клике ==========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClassParent } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClassParent(elementAll)

/* Динамический класса _active элементу при клике ========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClass } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClass(elementAll)




btnTheme()


running()


document.querySelectorAll('.article__switch').forEach(button => {
	button.addEventListener('click', function() {
	  const article = this.closest('.article');
	  

	  if (article) {
		article.classList.toggle('_open');

		const svg = this.querySelector('svg');
		if (svg) {
		  svg.classList.toggle('_rotated');
		}
	  }
	});
  });

  document.addEventListener('DOMContentLoaded', function() {
	const fileInput = document.querySelector('.file__input');
	const fileButton = document.querySelector('.file__button');
	const fileButtonText = fileButton.querySelector('span');
	const fileButtonIcon = fileButton.querySelector('svg');
  
	// Клик по всей области кнопки
	fileButton.addEventListener('click', function(e) {
	  if (e.target !== fileInput) {
		fileInput.click();
	  }
	});
  
	// Обработчик выбора файлов
	fileInput.addEventListener('change', function() {
	  if (this.files && this.files.length > 0) {
		// Показываем количество файлов
		fileButtonText.textContent = `Выбрано файлов: ${this.files.length}`;
		fileButton.classList.add('file__button--active');
		fileButtonIcon.style.fill = '#6952F5';
	  } else {
		// Возвращаем исходное состояние
		resetFileInput();
	  }
	});
  
	// Сброс состояния
	function resetFileInput() {
	  fileButtonText.textContent = 'Прикрепить файл';
	  fileButton.classList.remove('file__button--active');
	  fileButtonIcon.style.fill = '#F3F3F3';
	}
  
	// Для множественного выбора добавьте атрибут multiple:
	// <input type="file" class="file__input" multiple>
  });


  // Функция для установки высоты
function setArticleBodyHeight() {
	document.querySelectorAll('.article__body').forEach(body => {
	  // Получаем оба блока внутри
	  const noOpenActive = body.querySelector('.no-open-active');
	  const openActive = body.querySelector('.open-active');
	  
	  // Вычисляем их высоты
	  const heightNoOpen = noOpenActive ? noOpenActive.offsetHeight : 0;
	  const heightOpen = openActive ? openActive.offsetHeight : 0;
	  
	  // Устанавливаем максимальную высоту
	  body.style.height = `${Math.max(heightNoOpen, heightOpen)}px`;
	});
  }
  
  // Вызываем при загрузке
  document.addEventListener('DOMContentLoaded', setArticleBodyHeight);
  
  // И при ресайзе (с debounce для оптимизации)
  let resizeTimer;
  window.addEventListener('resize', () => {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(setArticleBodyHeight, 20);
  });