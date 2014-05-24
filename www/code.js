document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

}

$('*[data-progress]').each(function(){
	theProgress = $(this).data('progress');
	$(this).append('<div class="advance" style="width:' + theProgress + '%"></div>');
});