$(function() {
	$(".h4-open-content2").hide();

	$( ".datepicker" ).datepicker({
		dateFormat: "dd/mm/yy"
	});
	$('#timepicker').timeDropper({
		format: "H:mm"
	});

	$('.plane-type').each(function(i) {
		$(this).find('.h4').addClass("h4-" + i);
		$(this).find('.h4-open-content1').addClass("h4-open-content1-" + i);
		$(this).find('.h4-open-content2').addClass("h4-open-content2-" + i);
		$(".h4-" + i).click(function() {
			$(this).toggleClass("h4-open");
			$(".h4-open-content1-" + i).slideToggle();
			$(".h4-open-content2-" + i).slideToggle();
		});
	});

	


	$(".tabs-main .tab").click(function() {
		$(".tabs-main .tab").removeClass("tab-active").eq($(this).index()).addClass("tab-active");
		$(".tab-content").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("tab-active");



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});