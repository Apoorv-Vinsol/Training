$(document).ready(function() {
	$('#blog li h3').each(function(index){
		$(this).parent().append('<div id="content_' + index + '"></div>');
		$(this).data("inner_div", {id: 'content_' + index});
	});
	$('#blog a').each(function(){
		$(this).click(function(e) {
			e.preventDefault();
			$('#' + $(this).parent().data("inner_div").id).load($(this).attr('href'));
		});
		
	});
})