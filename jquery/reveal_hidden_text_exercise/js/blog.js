$(document).ready(function() {
	$('div #blog').find('h3 a').each(function() {
		$(this).removeAttr('href');
	});

	$('div #blog').find('h3').each(function() {
		$(this).click(function(){
			$('div #blog').find('p').not($(this).next('p')).slideUp();
			$(this).next('p').slideDown();
		});
	});
});