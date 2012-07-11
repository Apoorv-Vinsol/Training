$(document).ready(function() {
	var blog_div = $('div #blog');

	blog_div.find('h3 a').each(function() {
		$(this).removeAttr('href');
	});

	blog_div.find('h3').each(function() {
		$(this).click(function(){
			blog_div.find('p').not($(this).next('p')).slideUp();
			$(this).next('p').slideDown();
		});
	});
});