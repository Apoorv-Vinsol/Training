$(document).ready(function () {
	var input_text_box = $('input[name="q"]');
	var search_label = $('label[for="q"]')
	
	input_text_box[0].value = search_label[0].innerHTML;

	input_text_box.addClass('hint');

	search_label.remove();

	input_text_box.bind('focus', function () {
		if ($(this)[0].value === "Enter search term") {
			$(this)[0].value = "";
			$(this).removeClass('hint');
		}
	});

	input_text_box.bind('blur', function () {
		if ($(this)[0].value === "") {
			$(this)[0].value = "Enter search term";
			$(this).addClass('hint');
		}
	});
});