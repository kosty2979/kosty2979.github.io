 var javaScript = [

 {	theme: "JavaScript",
	lessonNum: "1",
	text: "Домашнее задание: ",
	liText:[
		 "Написать <a href='https://learn.javascript.ru/function-basics'>функцию</a> pow, аналогичную <a href='http://javascript.ru/Math-pow'>Math.pow</a>, которая должна возводить указанное число в указанную степень. Указать число и степень пользователь должен через команду <a href='https://learn.javascript.ru/uibasic'>prompt</a>. Результат выполнения функции вывести в консоль. Работать с целыми числами, большими, меньшими, и равными нулю. Бесконечности можно не обрабатывать."
	],
	image:[
			

		],
link:{
		urlImg: "image/j1.jpg",
		urlCode: "https://github.com/kosty2979/goit/blob/master/js/js_1_2/js1_1/js1.html",
		urlPrew: "http://kosty2979.github.io/js/js_1_2/js1_1/js1.html"
	}
},
{	theme: "JavaScript",
	lessonNum: "2",
	text: "Создать программу, которая будет выполнять следующие действия:",
	liText:[
		 "<a href='https://learn.javascript.ru/array#%D0%BF%D0%B5%D1%80%D0%B5%D0%B1%D0%BE%D1%80-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2'>Циклом</a> заполнить <a href='https://learn.javascript.ru/array'>массив</a> с помощью команды <code>prompt</code> в котором будет список из 5-ти любых имен",
		 "Потом вывести с помощью <code>prompt</code> сообщение с просьбой ввести имя пользователя.",
		 "Введенное имя, циклом <a href='https://learn.javascript.ru/ifelse'>сравнивать</a> с именами в массиве",
		 "Если нет совпадения, то есть введенное имя пользователя не существует в массиве - выдавать с помощью <code>alert</code> сообщение об ошибке",
		 "Если есть совпадение - выводить сообщение 'Андрей, вы успешно вошли'. Вместо 'Андрей' должно быть имя текущего пользователя"
		
	],
	image:[

		],

	link:{
		urlImg: "image/j2.jpg",
		urlCode: "https://github.com/kosty2979/goit/blob/master/js/js_1_2/js1_2/js1_2.html",
		urlPrew: " http://kosty2979.github.io/js/js_1_2/js1_2/js1_2.html "
	}
},	
{	theme: "JavaScript",
	lessonNum: "3-4",
	text: "Создать программу, которая будет выполнять следующие действия:",
	liText:[
		 "Создать объект с <a href='https://learn.javascript.ru/object-methods'>методами</a> , которые будут динамически <a href='https://learn.javascript.ru/modifying-document'>генерировать</a> DOM макета. Это будет тест, который мы будем разрабатывать в следующих заданиях. Сейчас вам нужно только динамически создать html, методы должны храниться в одном объекте. Для того чтоб страница выглядела красиво можете использовать <a href='http://getbootstrap.com/''>Bootstrap</a> и создавать DOM-элементы с готовыми бутстраповскими классами. Изначально на странице должен быть только body , вызывая методы объекта нужно создать dom-элементы"
		
	],
	image:[
			{
				text: "Макет",
				url: "image/hw_js_03-04.jpg"
			}

		],

	link:{
		urlImg: "image/j3.jpg",
		urlCode: "https://github.com/kosty2979/goit/blob/master/js/js_3_4/js_3_4.html",
		urlPrew: "http://kosty2979.github.io/js/js_3_4/js_3_4.html"
	}
},
{	theme: "JavaScript",
	lessonNum: "5-6",
	text: "Сделать точно такой же таймер как <a href='http://stopwatch.onlineclock.net/new/'>здесь</a>. Основная функциональность:",
	liText:[
		 "Start - начинается отсчет с нуля. При работе таймера выводим миллисекунды. Кнопка Start заменяется на Stop.",
		 "Split - засекаем текущий отсчет и выводим его под таймером с меткой Split, при этом продолжаем работу таймера.",
		 "Stop - останавливаем текущий отсчет. Время, которое засекли, выводим под таймером с пометкой Stop.",
		 "Reset - обнуляем таймер, удаляем все сохраненные отметки Split и Stop.",
		 "Если будет не понятно как должны работать кнопки - просто посмотрите как они реализованы на текущем таймере по ссылке.",
		
	],
	image:[
			{
				text: "Таймер",
				url: "image/j5.jpg"
			}

		],

	link:{
		urlImg: "image/j6.jpg",
		urlCode: "https://github.com/kosty2979/goit/blob/master/js/js_5_6/js_5_6.html",
		urlPrew: "http://kosty2979.github.io/js/js_5_6/js_5_6.html"
	}
},
{	theme: "JavaScript",
	lessonNum: "6-b",
	text: "Написать код:",
	liText:[
		 "По экрану должен передвигаться прямоугольник.",
		 "При клике по нему, он должен изменять скорость движения и цвет."
	],
	image:[
			

		],

	link:{
		urlImg: "image/bonus.jpg",
		urlCode: "https://github.com/kosty2979/goit/blob/master/js/bonus/index.html",
		urlPrew: "http://kosty2979.github.io/js/bonus/index.html"
	}
},	
{	theme: "JavaScript",
	lessonNum: "7-8",
	text: "Домашнее задание:",
	liText:[
			"Создать переключаемые табы, точно такие же как <a href='https://jqueryui.com/tabs/'>Tabs</a>. Визуально табы могут отличаться от примера, но постарайтесь выполнить частое пожелание заказчиков: 'просто сделайте мне красиво!'",		
			"Сверстать форму, как на <a href='https://jqueryui.com/tooltip/#forms'>Tooltip</a>, и сделать для неё аналогичные всплывающие подсказки",		
			"Желательно сделать все это с интересной анимацией. Но не обязательно, с ней будем разбираться позже",		
			"Все реализовываем с помощью jQuery, стили через css-классы",		
			"Точно такую же страницу как в ссылках делать не надо, только функциональные элементы (табы и форма с подсказками)",		
			"jQueryUI и сторонние плагины не используем"		
	],
	image:[
			{
				text: "Tabs",
				url: "image/hj7.jpg"
			},
			{
				text: "Tooltip",
				url: "image/hj8.jpg"
			}

		],

	link:{
		urlImg: "image/j8.jpg",
		urlCode: "https://github.com/kosty2979/goit/blob/master/js/js_7_8/js_7_8.html",
		urlPrew: "http://kosty2979.github.io/js/js_7_8/js_7_8.html"
	}
},
{	theme: "JavaScript",
	lessonNum: "9-10",
	text: "Домашнее задание:",
	liText:[
			"Создать страницу, к ней подключить <a href='http://sorgalla.com/jcarousel/'>карусель</a>",		
			"К той же странице подключить любой, понравившийся вам нестандартный <code>select</code> из <a href='http://habrahabr.ru/company/aiken/blog/114927/'>списка</a>. Если лень выбирать - подключайте <a href='http://www.xiper.net/collect/html-and-css-tricks/verstka-form/nice-select-jquery.html'>cuSel</a>",		
			"Подключить к странице нестандартные чекбоксы двумя способами: с помощью <a href='http://xiper.net/collect/html-and-css-tricks/verstka-form/nice-checkbox'>jquery</a> (сделать такой же вариант как <a href='http://xiper.net/examples/html-and-css-tricks/forms/nice-checkbox-3.html'>здесь</a>); с помощью <a href='http://xiper.net/collect/html-and-css-tricks/verstka-form/kastomnie-checkbox-i-radio-na-css'>css</a>",		
			"Дизайн карусели, селекта и чекбокса любой",		
			"Создать анимированную выпадающую двухуровневую меню, как на <a href='http://callmenick.com/_development/slide-down-menu/''>примере</a>. Плагины для меню не используем, логика появления и анимирования должна быть написана вами. Так же, во время анимации желательно менять цвет фона появившейся менюшки. Для этого вам может понадобится <a href='http://xiper.net/collect/js-plugins/effects/jquery-color'>плагин</a>"	
	],
	image:[
			{
				text: "карусель",
				url: "image/hj9.jpg"
			},
			{
				text: "меню",
				url: "image/hj10.jpg"
			}

		],

	link:{
		urlImg: "image/j10.jpg",
		urlCode: "https://github.com/kosty2979/goit/blob/master/js/js_9-10/js_9-10.html",
		urlPrew: "http://kosty2979.github.io/js/js_9-10/js_9-10.html"
	}
},
{	theme: "JavaScript",
	lessonNum: "11-12",
	text: "Домашнее задание:",
	liText:[
			"Создать карусель по <a href='http://ru.jakeroid.com/sozdaem-prostuyu-karusel-slajder-s-pomoshhyu-jquery.html'>туториалу</a>. Оформить её как jQuery-плагин",
			"Подключить <a href='http://ejohn.org/blog/javascript-micro-templating/''>шаблонизатор</a>. Отрендерить с его помощью несложную html-структуру. Можно вывести простой профиль пользователя, как в первом задании по HTML (макет)",
			"Бонусное задание: подключить <a href='https://learn.javascript.ru/template-lodash'>шаблонизатор LoDash</a>, с его помощью сделать то же что и в предыдущем пункте"
			],
	image:[
			{
				text: "макет",
				url: "image/homework1.png"
			}

		],

	link:{
		urlImg: "image/j12.jpg",
		urlCode: "https://github.com/kosty2979/goit/blob/master/js/js_11-12/js_11-12.html",
		urlPrew: "https://kosty2979.github.io/js/js_11-12/js_11-12.html "
	}
},
{	theme: "JavaScript",
	lessonNum: "13-14",
	text: "Домашнее задание:",
	liText:[
			"За основу взять работу 'JavaScript 3-4'. Перед стартом приложения записать в <code>localStorage</code> объект с вопросами и ответами теста. Потом прочесть данные из <code>localStorage</code>, отрендерить их используя любой javascript-шаблонизатор",
			"Так же в приложении должна быть прописана директива <code>'use strict;'</code>, в консоли не должно быть никаких javascript-ошибок",
			"На странице должна быть возможность пройти тест. При клике на кнопку 'Проверить мои результаты' нужно выполнить проверку правильных ответов и вывести сообщение об успешном или не успешном прохождении теста. После вывода сообщения, обнулить отметки чтоб тест можно было пройти опять",
			"В каждом вопросе может быть только один правильный вариант ответа",
			"Само сообщение о результатах теста нужно сделать в стиле простого <a href='http://getbootstrap.com/javascript/#modals-examples'>модального окна</a>. Не обязательно соблюдать такой же дизайн как в <code>Bootstrap</code>, можете сделать по своему, но верстка и код появления модальки должны быть написаны вами. Допускается использование <code>jQuery</code>. Кому хочется больше веселья, делайте без неё",
			
			],
	image:[
			{
				text: "JavaScript 3-4",
				url: "image/hw_js_03-04.jpg"
			}

		],

	link:{
		urlImg: "image/j14.jpg",
		urlCode: "https://github.com/kosty2979/goit/blob/master/js/js_13-14/index.html",
		urlPrew: "http://kosty2979.github.io/js/js_13-14/index.html "
	}
},
{	theme: "JavaScript",
	lessonNum: "15-16",
	text: "Домашнее задание:",
	liText:[
			"the lesson is not learned"
			
			
			],
	image:[
			{
				
			}

		],

	link:{
		
	}
},
{	theme: "JavaScript",
	lessonNum: "17-18",
	text: "Домашнее задание:",
	liText:[
			"the lesson is not learned"
			
			
			],
	image:[
			{
				
			}

		],

	link:{
		
	}
},
{	theme: "JavaScript",
	lessonNum: "19-20",
	text: "Домашнее задание:",
	liText:[
			"the lesson is not learned"
			
			
			],
	image:[
			{
				
			}

		],

	link:{
		
	}
},
{	theme: "JavaScript",
	lessonNum: "21-22",
	text: "Домашнее задание:",
	liText:[
			"the lesson is not learned"
			
			
			],
	image:[
			{
				
			}

		],

	link:{
		
	}
},
{	theme: "JavaScript",
	lessonNum: "23-24",
	text: "Домашнее задание:",
	liText:[
			"the lesson is not learned"
			
			
			],
	image:[
			{
				
			}

		],

	link:{
		
	}
},
]