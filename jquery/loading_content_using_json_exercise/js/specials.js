$(document).ready(function(){
	var specials_select = $('#specials select');
	$('#specials').append('<div id="specials-content"></div>');
	specials_select.parentsUntil('form').find('input[type="submit"]').parent().remove();

	specials_select.change(function(){
		$.getJSON('data/specials.json', function(data) {
			var selected_option = $('#specials select option:selected').val();
			var specials-content = $('#specials-content');
			
			specials-content.html("<span style='font-size:18px;font-weight:bold;color:white;'>" + data[selected_option].text +"</span>");
			specials-content.append("<img src='" + data[selected_option].image.slice(1) + "'/>");
			specials-content.css({'background-color': data[selected_option].color});
		});
	});
});