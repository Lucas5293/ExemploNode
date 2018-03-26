function enviarPost(){
	var atributo = $("#post_campo").val();
	$.ajax({
        url: '/exemploRest/'+atributo,
        type: 'POST',
        success:function(results) {
            alert(results);
        }
    });
}
function enviarGet(){
	$.ajax({
        url: '/exemploRest/',
        type: 'GET',
        success:function(results) {
            alert(results);
        }
    });
}

