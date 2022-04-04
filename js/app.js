$(function () {
	
	$('.porady__przycisk-pokaz').click(function () {
		
		$(this).parent().addClass('porady__panel--aktywny');
		
	})
	
	
	
});


$(function () {
	
	$('.porady__przycisk-ukryj').click(function () {
		
		$(this).parent().removeClass('porady__panel--aktywny');
		
	})
	
	
	
});


$(function () {
	
	$('.oferta__przycisk-cennik').click(function () {
		
		$(this).addClass('oferta__przycisk--aktywny')
		.prev().removeClass('oferta__przycisk--aktywny')
		.parent().prev().css('transform', 'translateX(-100%)')
		
		
	})
	
	
	
});

$(function () {
	
	$('.oferta__przycisk-opis').click(function () {
		
		$(this).addClass('oferta__przycisk--aktywny')
		.next().removeClass('oferta__przycisk--aktywny')
		.parent().prev().css('transform', 'translateX(0)')
		
	})
	
	
	
});



