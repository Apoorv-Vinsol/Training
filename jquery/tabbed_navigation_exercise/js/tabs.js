$(document).ready(function(){
	var modules = $('div .module');

	modules.hide();
	modules.first().show();
	var ul_element = $('<ul></ul>').insertBefore(modules.first());

	modules.each(function() {
		var module = $(this);
		$(this).find('h2').each(function(){
			ul_element.append('<li style="cursor:pointer">' + $(this).text() + '</li>');
			ul_element.children('li').last().bind('click', function() {
				ul_element.children('li').removeClass('current');
				$(this).addClass('current');
				modules.hide();
				module.show();
			});
		});
	});
});