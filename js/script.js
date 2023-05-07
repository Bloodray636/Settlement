$(function() {
	$('.but').click(function() {
	  $('.menu').toggle();
	  if($('body').hasClass('ns')){
		$('body').removeClass('ns');
	  }else{
		$('body').addClass('ns');
	  };
	});
  });

  $(function() {
	$(document).ready(function () {
		$('li').click(function (event) {
			$(this).children("ul").slideToggle();
			event.stopPropagation();
			 $(this).children("ul").children("li").children("i").addClass('fa-angle-down:active');
		});
	});
  });

    let fields = document.querySelectorAll('.field__file');
    Array.prototype.forEach.call(fields, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.field__file-fake').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.field__file-fake').innerText = labelVal;
      });
    });

	(function () {
		'use strict'
	  
		// Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
		var forms = document.querySelectorAll('.needs-validation')
	  
		// Зацикливайтесь на них и предотвращайте отправку
		Array.prototype.slice.call(forms)
		  .forEach(function (form) {
			form.addEventListener('submit', function (event) {
			  if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			  }
	  
			  form.classList.add('was-validated')
			}, false)
		  })
	  })()

!function(){
	// скрипт 1 здесь
 
	var owl = $("#owl-demo-2");
	owl.owlCarousel({
		loop: true,
		nav:true,
		pagination : true,
		navText : ["<img src='img/left.png'>","<img src='img/right.png'>"],
		dots:false,
		center: false,
		rewind: false,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		margin: 0,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		startPosition: 0,
		rtl: false,
		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,
		responsive: {
			0: {
				items: 1
				// nav: true
			},
			500: {
				items: 2,
				nav: false
			},
			768: {
				items: 2,
				// nav: true,
				loop: false
			},
			992: {
				items: 3,
				// nav: true,
				loop: false
			},
			1199: {
				items: 3,
				// nav: true,
				loop: false
			}
		},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		fallbackEasing: "swing",
		info: false,
		nestedItemSelector: false,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab",
		autoHeight: false,
		lazyLoad: false
	});

	$(".next").click(function () {
		owl.trigger("owl.next");
	});
	$(".prev").click(function () {
		owl.trigger("owl.prev");
	});
}();