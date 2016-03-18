$(document).ready(function(){
  $("#animales").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sounds/error.mp3');
    audioElement.play();
  });
});
