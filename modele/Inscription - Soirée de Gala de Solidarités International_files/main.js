$(document).ready(function(){
   
    /*
if(window.location.hash = '#ancre-inscription') {
		$('html, body').animate({
			scrollTop:$('#ancre-inscription').offset().top
		}, 'slow');
	} 
*/

	//gestion du total Place
	var load_total = 0;
	if ($('#nb_place').val()) {
		load_total = parseInt($('#nb_place').val()) * 500;
		$('#totalPlace').html(load_total + '&nbsp;€');
	}
	if ($('#nb_table').val()) {
		load_total = load_total + parseInt($('#nb_table').val()) * 5000;
		$('#totalTable').html(parseInt($('#nb_table').val()) * 5000 + '0&nbsp;€');
	}
	if (load_total)
		$('#total').html(load_total + '&nbsp;€');
	
	$('#nb_place').on('keyup', function(e){
		var totalPlace = parseInt($(this).val()) * 500;
		var totalTable = parseInt($('#nb_table').val()) * 5000;
		totalTable = totalTable ? totalTable : 0;
		var total = totalPlace + totalTable; 
		$('#totalPlace').html(totalPlace ? totalPlace + '&nbsp;€' : '0&nbsp;€');
		$('#total').html(total ? total + '&nbsp;€' : '0&nbsp;€');
	}).on('blur', function(e) {
		var nbPlace = parseInt($(this).val());
		$(this).val(nbPlace ? nbPlace : null);
	});
	
	//gestion du total Table
	$('#nb_table').on('keyup', function(e) {
		var totalTable = parseInt($(this).val()) * 5000;
		var totalPlace = parseInt($('#nb_place').val()) * 500;
		totalTable = totalTable ? totalTable : 0;
		totalPlace = totalPlace ? totalPlace : 0;
		var total = totalPlace + totalTable;
		$('#totalTable').html(totalTable ? totalTable + '&nbsp;€' : '0&nbsp;€');
		$('#total').html(total ? total + '&nbsp;€' : '0&nbsp;€');
	}).on('blur', function(e) {
		var nbTable = parseInt($(this).val());
		$(this).val(nbTable ? nbTable : null);
	});
	
	//scroll inscription
	$('a[href^="#"]').click(function() {  
		var the_id = $(this).attr("href");  
		$('html, body').animate({
			scrollTop:$(the_id).offset().top
		}, 'slow');  
		return false;
	});  

});