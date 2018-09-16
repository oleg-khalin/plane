$(function() {

	$("#loc").click(function() {
		alert(window.location.href);
	});

	$(".h4-open-content2").hide();

	$( ".datepicker" ).datepicker({
		dateFormat: "dd/mm/yy"
	});
	$('#timepicker, #timepicker2, #timepicker3, #timepicker4, #timepicker5, #timepicker6').timeDropper({
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


	$("#form-min").click(function() {
		$('.tabs-main, .map').css('display', 'block');
		var from = $(".form-top input[name='from']").val();
		var to = $(".form-top input[name='to']").val();
		var date = $(".form-top input[name='date']").val();
		var passangers = $(".form-top input[name='passangers']").val();
		$(".form-tabs input[name='passangers'], .form-tabs-2 input[name='passangers'], .form-tabs-3 input[name='passangers']").val(passangers);
		$(".form-tabs input[name='from'], .form-tabs-2 input[name='from'], .form-tabs-3 input[name='from']").val(from);
		$(".form-tabs input[name='to'], .form-tabs-2 input[name='to'], .form-tabs-3 input[name='to']").val(to);
		$(".form-tabs input[name='date'], .form-tabs-2 input[name='date'], .form-tabs-3 input[name='date']").val(date);
	});

	$(".form-tabs .button-plus").click(function() {
		$('.form-tabs .hidden-labels').css('display', 'block');
		var from = ($(".form-tabs > label input[name='from']").val());
		var to = $(".form-tabs > label input[name='to']").val();
		var date = $(".form-tabs > label input[name='date']").val();
		var time = $(".form-tabs > label input[name='time']").val();
		var passangers = $(".form-tabs > label input[name='passangers']").val();
		$(".form-tabs .hidden-labels input[name='passangers']").val(passangers);
		$(".form-tabs .hidden-labels input[name='from']").val(from);
		$(".form-tabs .hidden-labels input[name='to']").val(to);
		$(".form-tabs .hidden-labels input[name='time']").val(time);
		$(".form-tabs .hidden-labels input[name='date']").val(date);
	});
	$(".form-tabs-2 .button-plus").click(function() {
		$('.form-tabs-2 .hidden-labels').css('display', 'block');
		var from = ($(".form-tabs-2 > label input[name='from']").val());
		var to = $(".form-tabs-2 > label input[name='to']").val();
		var date = $(".form-tabs-2 > label input[name='date']").val();
		var time = $(".form-tabs-2 > label input[name='time']").val();
		var passangers = $(".form-tabs-2 > label input[name='passangers']").val();
		$(".form-tabs-2 .hidden-labels input[name='passangers']").val(passangers);
		$(".form-tabs-2 .hidden-labels input[name='from']").val(from);
		$(".form-tabs-2 .hidden-labels input[name='to']").val(to);
		$(".form-tabs-2 .hidden-labels input[name='time']").val(time);
		$(".form-tabs-2 .hidden-labels input[name='date']").val(date);
	});
	$(".form-tabs-3 .button-plus").click(function() {
		$('.form-tabs-3 .hidden-labels').css('display', 'block');
		var from = ($(".form-tabs-3 > label input[name='from']").val());
		var to = $(".form-tabs-3 > label input[name='to']").val();
		var date = $(".form-tabs-3 > label input[name='date']").val();
		var time = $(".form-tabs-3 > label input[name='time']").val();
		var passangers = $(".form-tabs-3 > label input[name='passangers']").val();
		$(".form-tabs-3 .hidden-labels input[name='passangers']").val(passangers);
		$(".form-tabs-3 .hidden-labels input[name='from']").val(from);
		$(".form-tabs-3 .hidden-labels input[name='to']").val(to);
		$(".form-tabs-3 .hidden-labels input[name='time']").val(time);
		$(".form-tabs-3 .hidden-labels input[name='date']").val(date);
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});