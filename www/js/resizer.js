$(document).ready(function(){
	$(window).resize(function(){
		if ($(window).width() <= 768){
			$(".section__figure").removeClass("bottom-margin-lrg");
			$(".section__text").removeClass("col-2").addClass("col-6");
			$("aside").removeClass("col-2").addClass("col-6");
			$(".aside__first").addClass("col-3");
			$(".aside__second").addClass("col-3");
		} else if ($(window).width() > 768){
			$(".section__figure").addClass("bottom-margin-lrg");
			$(".section__text").removeClass("col-6").addClass("col-2");
			$("aside").removeClass("col-6").addClass("col-2");
			$(".aside__first").removeClass("col-3");
			$(".aside__second").removeClass("col-3");
		}
		else if ($(window).width() >= 480){
			$("article").removeClass("col-6").addClass("col-2");
		}
		else if ($(window).width() < 480){
			$("article").removeClass("col-2").addClass("col-6");
		}
	});
	if ($(window).width() <= 768){
		$(".section__figure").removeClass("bottom-margin-lrg");
		$(".section__text").removeClass("col-2").addClass("col-6");
		$("aside").removeClass("col-2").addClass("col-6");
		$(".aside__first").addClass("col-3");
		$(".aside__second").addClass("col-3");
	}
	else if ($(window).width() < 480){
		$("article").removeClass("col-2").addClass("col-6");
	}
});
