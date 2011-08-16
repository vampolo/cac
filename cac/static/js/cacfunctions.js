$(document).ready(function() {
	$('#survey').submit(function(event) {
		event.preventDefault();
		
		var inputs = $('#survey').serializeArray();
		
		if(inputs.length < 10){
			$( "#dialog-error" ).dialog({
				height: 150,
				width: 300,
				modal: true
			});
			return;
		}
		
		var counter = 0;
		
		$.each(inputs, function(i, field){
			if(field.value=='yes'){
				counter = counter + 1
			}
		});
		
		if(counter >= 3){
			$( "#dialog" ).dialog({
				height: 300,
				width: 300,
				modal: true
			});
		}
		
	});
});
