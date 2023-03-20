$(document).ready(function(){
    $('#view_button').click(fetchImage);
});

const fetchImage = async () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=';
    const picdate = $('#date').val()

    try {  
      const response = await fetch(`${url}${picdate}`);
      const data = await response.json();
      showImage(data);
    } catch (error) {
      console.log(error)
    }
  }
  
  const showImage = data => {
    $('#title').text(data.title);
    $('#pic').attr('src',data.url);
  }