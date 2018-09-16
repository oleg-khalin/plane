function autoCom(auto_input){
	auto_input.each(function(index,element){
		$(this).autocomplete({
			source: "cities.html",
			minlength: 2,
			select: function(event,ui){
				console.log(ui);
				var code = ui.item.id;
			},
			html: true,
			open: function(event, ui) {
				$(".ui-autocomplete").css("z-index", 1000);
			}
		}).data("ui-autocomplete")._renderItem = function (ul, item) {
			return $("<li></li>")
				.data("item.autocomplete", item)
				.append("<a>" + item.label + "</a>")
				.appendTo(ul);
		};
	});
}

$(function() {

	autoCom($('.form-copy-block-0').find('.select-autocomplete'));
	autoCom($('.form-top').find('.select-autocomplete'));

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
		$(".success").css("display", "none");
		$('.tabs-main').css('display', 'block');
		var from = $(".form-top input[name='from']").val();
		var to = $(".form-top input[name='to']").val();
		var date = $(".form-top input[name='date']").val();
		var passangers = $(".form-top input[name='passangers']").val();
		$(".form-tabs input[name='passangers'], .form-tabs-2 input[name='passangers'], .form-tabs-3 input[name='passangers']").val(passangers);
		$(".form-tabs input[name='from0'], .form-tabs-2 input[name='from0'], .form-tabs-3 input[name='from0']").val(from);
		$(".form-tabs input[name='to0'], .form-tabs-2 input[name='to0'], .form-tabs-3 input[name='to0']").val(to);
		$(".form-tabs input[name='date0'], .form-tabs-2 input[name='date0'], .form-tabs-3 input[name='date0']").val(date);
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



	$(".form-tabs .plane-type").change(function() {
		var value = $(".form-tabs .plane-type").val();
		$.ajax({
			type: "POST",
			url: "/planes-form.html",
			cache: false,
			data: {value: value},
			dataType: "json",
			success: function(html) {
				$('.form-tabs .plane-name').html(html['data']);
			}
		});
	});
	$(".form-tabs-3 .plane-type").change(function() {
		var value = $(".form-tabs-3 .plane-type").val();
		$.ajax({
			type: "POST",
			url: "/planes-form-2.html",
			cache: false,
			data: {value: value},
			dataType: "json",
			success: function(html) {
				$('.form-tabs-3 .plane-name').html(html['data']);
			}
		});
	});

	var i = 1;
	$(".form-tabs .button-plus, .form-tabs-2 .button-plus, .form-tabs-3 .button-plus").click(function() {
		$(this).parents(".form-copy-container").append('<div class="form-copy-block form-copy-block-'+i+'">\
							<label>\
								<span>Откуда</span>\
								<input type="text" class="from select-autocomplete" placeholder="Москва" name="from'+i+'" required>\
							</label>\
							<label>\
								<span>Куда</span>\
								<input type="text" class="to select-autocomplete" placeholder="Берлин" name="to'+i+'" required>\
							</label>\
							<label>\
								<span>Дата</span>\
								<input class="date datepicker" type="text" name="date'+i+'" required>\
							</label>\
							<label>\
								<span>Время</span>\
								<input class="time" id="timepicker'+i+'" type="text" name="time'+i+'" required>\
							</label>\
							<label>\
								<input type="button" class="button-minus" value="&ndash;">\
							</label>\
						</div>');
		$('.form-copy-block-'+i ).find('.datepicker').datepicker({
			dateFormat: 'dd/mm/yy'
		});
		$('.form-copy-block-'+i ).find('#timepicker'+i).timeDropper({
			format: "H:mm"
		});
		$('.form-copy-block-'+i).find('.button-minus').click(function() {
			$(this).parents('.form-copy-block').remove();
			i--;
		});
		autoCom($('.form-copy-block-'+i ).find('.select-autocomplete'));
		i++;
	});
	$(".slider-rm-style .slider-rm-ul > div").click(function() {
		var url = $(this).find('img').attr('src');
		$(".slider-big-img img").attr('src', url);
		$(".slider-big-img a").attr('href', url);
	});
	$('.service-item-img').magnificPopup({type:'inline', mainClass: 'mfp-forms', showCloseBtn: true});
	
	$(".mfp-gallery").magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		},
		gallery: {
			enabled: true
		}
	});

	$("#menu-direction").hover(function() {
		$(".head-bot-direction").slideToggle();
	});
	$("#menu-planes").hover(function() {
		$(".head-bot-planes").slideToggle();
	});

	$(".form-tabs, .form-tabs-2, .form-tabs-3").submit(function(){
		var form = $(this);
		var data = form.serialize();
		$.ajax({
			type: 'POST',
			url: 'form-ajax.html',
			dataType: 'json',
			data: data,
			beforeSend: function(data) {
				form.find('input[type="submit"]').attr('disabled', 'disabled');
			},
			success: function(data){
				if (data['error']) {
					form.find(".error").html(data['error']);
				} else {
					$(function() {
						$(".map, .success").css("display", "block");
						$(".tabs-main, .form-top").css("display", "none");
					});
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			},
			complete: function(data) {
				form.find('input[type="submit"]').prop('disabled', false);
			}
		});
		return false;
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});