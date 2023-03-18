$(document).ready(function(){
    alert("here");
    $('#view_button').click(getImage);
});

function getImage(){
    alert($('#date').val()) ;
    $.get('https://api.nasa.gov/planetary/apod',
        { "api_key" : "DEMO_KEY", "date" : $('#date').val() },"json")
        .done(showImage)
        .fail(noImage);
}

function showImage(data){
    $('#title').text(data.title);
    $('#pic').attr('src',data.url);
}

function noImage(error){
    alert(error.responseText);

}