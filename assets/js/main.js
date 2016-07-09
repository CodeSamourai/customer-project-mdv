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
		load_total = parseInt($('#nb_place').val()) * 90;
		$('#totalPlace').html(load_total + '&nbsp;€');
	}
	if ($('#nb_table').val()) {
		load_total = load_total + parseInt($('#nb_table').val()) * 900;
		$('#totalTable').html(parseInt($('#nb_table').val()) * 900 + '&nbsp;€');
	}
	if ($('#nb_table_vip').val()) {
		load_total = load_total + parseInt($('#nb_table_vip').val()) * 900;
		$('#totalTableVip').html(parseInt($('#nb_table_vip').val()) * 900 + '&nbsp;€');
	}
	if (load_total)
		$('#total').html(load_total + '&nbsp;€');
	
	$('#nb_place').on('keyup', function(e){
		var totalPlace = parseInt($(this).val()) * 90;
		var totalTableVip = parseInt($('#nb_table_vip').val()) * 900;
		var totalTable = parseInt($('#nb_table').val()) * 900;
		totalTableVip = totalTableVip ? totalTableVip : 0;
		totalTable = totalTable ? totalTable : 0;
		totalPlace = totalPlace ? totalPlace : 0;
		var total = totalPlace + totalTable + totalTableVip;
		$('#totalPlace').html(totalPlace ? totalPlace + '&nbsp;€' : '0&nbsp;€');
		$('#total').html(total ? total + '&nbsp;€' : '0&nbsp;€');
	}).on('blur', function(e) {
		var nbPlace = parseInt($(this).val());
		$(this).val(nbPlace ? nbPlace : null);
	});
	
	//gestion du total Table
	$('#nb_table').on('keyup', function(e) {
		var totalTable = parseInt($(this).val()) * 900;
		var totalTableVip = parseInt($('#nb_table_vip').val()) * 900;
		var totalPlace = parseInt($('#nb_place').val()) * 90;
		totalTableVip = totalTableVip ? totalTableVip : 0;
		totalTable = totalTable ? totalTable : 0;
		totalPlace = totalPlace ? totalPlace : 0;
		var total = totalPlace + totalTable + totalTableVip;
		$('#totalTable').html(totalTable ? totalTable + '&nbsp;€' : '0&nbsp;€');
		$('#total').html(total ? total + '&nbsp;€' : '0&nbsp;€');
	}).on('blur', function(e) {
		var nbTable = parseInt($(this).val());
		$(this).val(nbTable ? nbTable : null);
	});
	
	//gestion du total Table VIP
	$('#nb_table_vip').on('keyup', function(e) {
		var totalTableVip = parseInt($(this).val()) * 900;
		var totalTable = parseInt($('#nb_table').val()) * 900;
		var totalPlace = parseInt($('#nb_place').val()) * 90;
		totalTableVip = totalTableVip ? totalTableVip : 0;
		totalTable = totalTable ? totalTable : 0;
		totalPlace = totalPlace ? totalPlace : 0;
		var total = totalPlace + totalTable + totalTableVip;
		$('#totalTableVip').html(totalTableVip ? totalTableVip + '&nbsp;€' : '0&nbsp;€');
		$('#total').html(total ? total + '&nbsp;€' : '0&nbsp;€');
	}).on('blur', function(e) {
		var nbTableVip = parseInt($(this).val());
		$(this).val(nbTableVip ? nbTableVip : null);
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