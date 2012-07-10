$(document).ready(function () {
	$('input[name="q"]')[0].value = $('label[for="q"]')[0].innerHTML;

	$('input[name="q"]').addClass('hint');

	$('label[for="q"]').remove();

	$('input[name="q"]').bind('focus', function () {
		if ($(this)[0].value === "Enter search term") {
			$(this)[0].value = "";
			$(this).removeClass('hint');
		}
	});

	$('input[name="q"]').bind('blur', function () {
		if ($(this)[0].value === "") {
			$(this)[0].value = "Enter search term";
			$(this).addClass('hint');
		}
	});
});