$(document).ready(function(){
  $("#animales").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sonidos/animales.mp3');
    if(audioElement.paused){
      audioElement.play();
    }
  });
  $("#perro").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sonidos/perro.mp3');
    audioElement.play();
  });
  $("#gato").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sonidos/gato.mp3');
    audioElement.play();
  });
  $("#caballo").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sonidos/caballo.mp3');
    audioElement.play();
  });
  $("#aguila").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sonidos/aguila.mp3');
    audioElement.play();
  });
  $("#mono").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sonidos/mono.mp3');
    audioElement.play();
  });
  $("#pinguino").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sonidos/pinguino.mp3');
    audioElement.play();
  });
  $("#oso_polar").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sonidos/oso_polar.mp3');
    audioElement.play();
  });
  $("#hamster").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sonidos/hamster.mp3');
    audioElement.play();
  });
  $("#tortuga").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sonidos/tortuga.mp3');
    audioElement.play();
  });
  $("#pez").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sonidos/pez.mp3');
    audioElement.play();
  });
  $("#leon").click(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sonidos/leon.mp3');
    audioElement.play();
  });
});
