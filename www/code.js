var evento = [];

function createEvento(nombre,fecha,hora,precio,cupo,imagen,direccion,organizador, categoria, sinopsis) {
	this.nombre = nombre || '';
	this.fecha = fecha || '';
	this.hora = hora || '';
	this.precio = precio || '';
	this.cupo = cupo || '';
	this.imagen = imagen || ''; 
	this.imageurl = 'img/evento/' + imagen + '.jpg';
	this.direccion = direccion || '';
	this.organizador = organizador || '';
	this.categoria = categoria || '';
	this.sinopsis = sinopsis || '';
};

evento[0] = new createEvento(
	'Rock It!',
	'Mayo 30',
	'8pm',
	'20',
	'50',
	'rockit',
	'Av Chapultepec 389',
	'Organizador',
	'Música',
	'Sinopsis'
);

evento[1] = new createEvento(
	'Sarah Chang',
	'Mayo 30',
	'8pm',
	'20',
	'50',
	'ev2',
	'Av Chapultepec 389',
	'Organizador',
	'Música',
	'Sinopsis'
);

evento[2] = new createEvento(
	'Opera Porgy',
	'Mayo 30',
	'8pm',
	'20',
	'50',
	'ev1',
	'Av Chapultepec 389',
	'Organizador',
	'Teatro',
	'Sinopsis'
);

evento[3] = new createEvento(
	'Rock It!',
	'Mayo 30',
	'8pm',
	'20',
	'50',
	'rockit',
	'Av Chapultepec 389',
	'Organizador',
	'Música',
	'Sinopsis'
);

evento[4] = new createEvento(
	'La verdad sospechosa',
	'Mayo 30',
	'8pm',
	'20',
	'50',
	'ev0',
	'Av Chapultepec 389',
	'Organizador',
	'Teatro',
	'Sinopsis'
);

var catalogoBuffer = "";
for(var x=0;x<evento.length;x++) {
	fund = Math.random() * 100 | 0;
	catalogoBuffer += '<aside class="d6"><aside class="sh"><aside style="background-image:url(' + evento[x].imageurl + ')" data-section="evento" data-id="' + x + '" class="evento" data-title="' + evento[x].nombre + '" data-precio="' + evento[x].precio + '"><aside class="float"><b class="le">FUNDING</b> <b class="ri">' + fund + '%</b><br><div class="progress" data-progress="' + fund + '"></div><span class="le"></span> <span class="ri"></span></aside></aside><aside class="info"><h1>' + evento[x].nombre + '</h1><span class="category">' + evento[x].categoria + '</span></aside></aside></article></aside>';
}
document.getElementById('home_catalogo').innerHTML = catalogoBuffer;
ui();

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

}

$('*[data-progress]').each(function(){
	theProgress = $(this).data('progress');
	$(this).append('<div class="advance" style="width:' + theProgress + '%"></div>');
	if(theProgress < 33) $(this).find('.advance').css('background', '#d00');
	if(theProgress > 60) $(this).find('.advance').css('background', '#06a');
});

$('*[data-section="evento"]').on('click', function() {
	id = $(this).data('id');

	$('#evento .title').html( evento[id].nombre);
	$('#eventoPoster').attr('src', evento[id].imageurl );
	$('#evento .price').html( '$' + evento[id].precio );

	$('#evento .fecha').html( evento[id].fecha);
	$('#evento .hora').html( evento[id].hora);
	$('#evento .precio').html( evento[id].precio);
	$('#evento .cupo').html( evento[id].cupo);
	$('#evento .direccion').html( evento[id].direccion);
	$('#evento .categoria').html( evento[id].categoria);
	$('#evento .sinopsis').html( evento[id].sinopsis);
});

	function share(url) {
		window.open(url, '_system');
		return false;
	}