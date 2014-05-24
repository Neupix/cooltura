document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

}

$('*[data-progress]').each(function(){
	theProgress = $(this).data('progress');

	$(this).append('<div class="advance" style="width:' + theProgress + '%"></div>');

	if(theProgress < 33) $(this).find('.advance').css('background', '#d00');
	if(theProgress == 100) $(this).find('.advance').css('background', '#06a');
});

$('*[data-section="evento"]').on('click', function() {
	thePrice = $(this).data('precio');

	$('#eventoPoster').attr('src', $(this).find('img').attr('src') );

	$('#evento .price').html( '$' + thePrice );
	$('#evento .title').html( $(this).data('title') );
});