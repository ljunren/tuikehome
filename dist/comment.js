/*$(function () {
	$("#header").load("header.html");
	$("#footer").load("footer.html");
})
*/
$(function () {
	$("#header").on("click", ".hbg_icon", function () {
		$(this).toggleClass("show")
		$(".header").toggleClass("show")
	})

	$(".form_box .close_btn").click(function () {
		$(".black_box,.form_box").fadeOut(600)
	})

	$(".form_box .reset").click(function () {
		$(".black_box,.form_box").fadeOut(600)
	})
})

function contact_show() {
	$(".black_box,.form_box").fadeIn(600)
}
function showDetail (id) {
	console.log(id)
	var url = ""
	switch(id) {
		case 30: url = "webFullStack.php"; break;
		case 31: url = "webFrontEnd.php"; break;
		case 32: url = "visionAlgorithm.php"; break;
		case 33: url = "visionAlgorithmIntern.php"; break;
		case 34: url = "webIntern.php"; break;
	}
	window.location.href = url
}
$(function () {
	var swiper = new Swiper('.banner_box .swiper-container', {
		autoplay: {
			delay: 100000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		loop: true,
		noSwiping : true,
		pagination: {
			el: '.banner_box .swiper-pagination',
			clickable: true,
		},
	});
 
 
    var sUserAgent = navigator.userAgent; //手机端
	var swiper1 = new Swiper('.product_box .swiper-container', {
		autoplay: {
			delay: 6000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		effect: 'fade',
		noSwiping : true,
		fadeEffect: {
			crossFade: true,
		},
		loop: true,
		pagination: {
			el: '.product_box .swiper-pagination',
			clickable: true,
		},
	  on:{
	    slideChange: function(){	      
			if (sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('iPhone') > -1 || sUserAgent.indexOf('iPad') > -1 || sUserAgent.indexOf('iPod') > -1 || sUserAgent.indexOf('Symbian') > -1) {
			    // console.log('改变了，activeIndex为'+this.activeIndex);
			  if(this.activeIndex==1 || this.activeIndex==5){
				 $("#swpepershow").css("height", "970px");
			  }else if(this.activeIndex==2){
			   			$("#swpepershow").css("height", "950px");
			   }else if(this.activeIndex==3){
			   			$("#swpepershow").css("height", "660px");
			   }else if(this.activeIndex==4){
			   	    $("#swpepershow").css("height", "620px");
			   }
			} else {
				
			}


	    },
	  },
	});


	var swiper2 = new Swiper('.changeYtype');
    var iconlist = $('.changeYtype .swiper-slide');
	let myVideo = $('#myVideo');
	// console.log(iconlist)
	  for(let i=0;i<iconlist.length;i++){	
		  $(iconlist[i]).click(function(event){
			$('video').trigger('pause');
			 // console.log($('video'))
			 if(i==0){				
				$('video').attr('src', 'dist/jlyy.mp4')
				$('video').attr('poster', 'dist/jlyy.png')
			 }else if(i==1){
				 $('video').attr('src', 'dist/tkzj.mp4')
				 $('video').attr('poster', 'dist/header1.png')
			 }else if(i==2){
				 $('video').attr('src', 'dist/tkzj.mp4')
				$('video').attr('poster', 'dist/4.png')
			 }else if(i==3){
				 $('video').attr('src', 'dist/mylp.mp4')
				$('video').attr('poster', 'dist/my1.jpg')
			 }
	
	  })
	  }

	
	
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		slidesPerView: "auto",
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,

	});
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		speed: 0,
		noSwiping : true,
		// autoplay: {
		// 	delay: 4000,
		// 	stopOnLastSlide: false,
		// 	disableOnInteraction: false,
		// },
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		thumbs: {
			swiper: galleryThumbs
		}

	});

	/*$(".gallery-top").mouseenter(function () {
		galleryTop.autoplay.stop()
	})
	$(".gallery-top").mouseleave(function () {
		galleryTop.autoplay.start()
	})*/

	$("#footer").on("click", "dd", function () {
		var num = parseInt($(this).data("num"));
		console.log(num)
		galleryTop.slideTo(3)
	})

	$(function () {
		function tab_change(content, li) {
			$(content).hide().eq(0).show()
			$(content).eq(0).find("video").trigger('play')
			$(li).click(function () {
				$(content).eq($(this).index()).show().siblings(content).hide()
				$(li).removeClass("active")
				$(this).addClass("active");
				$(content).eq($(this).index()).find("video").trigger('play').siblings(content).find("video").trigger('pause')
			})
		}
		tab_change(".bjk_content .content", ".bjk_list li")
		tab_change(".yyfg_content .content", ".yyfg_list li")
		tab_change(".mbjc_content .content", ".mbjc_list li")
		tab_change(".cgq_content .content", ".cgq_list li")
	})
})

