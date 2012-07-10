$(document).ready(function() {
	initialize();

	function initialize() {
		$('#slideshow').prependTo($('body'));
		$('#slideshow li').hide();
		create_preview_pane();
		display($('#slideshow li').first(), 1);
	}

	function display(slide, slide_counter) {
		update_preview_panel(slide_counter);
		slide.fadeIn(1000).delay(1000).fadeOut(1000).queue(function(){
			slide.hide();
			$(this).dequeue();
			if (slide.next().length != 0) {
				display(slide.next('li'), slide_counter + 1);
			}
			else {
				display($('#slideshow li:first-child'), 1);
			}
		});
	}

	function update_preview_panel(slide_counter) {
		$('#thumbnail-list li').each(function(){
			$(this).css({'background-color':'white'});
		});
		$('#thumbnail-list li:nth-child(' + slide_counter + ')').css({'background-color':'orange'});
	}

	function create_preview_pane() {
		$('<div id="thumbnail-preview" style="width:100%;height:100px;margin-bottom:70px;"></div>').insertAfter($('#slideshow'));
		$('<ul id="thumbnail-list" style="list-style:none;"></ul>').appendTo('#thumbnail-preview');
		$('#slideshow img').each(function() {
			image = $(this).clone().css({width:100,height:100})
			$('#thumbnail-list').append('<li style="display:inline;padding:10px;padding-top:100px;"></li>');
			$('#thumbnail-list li').last().append(image);
		});
	}
});