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

////////////////
///////////////

$('.easy-modal').easyModal({
      top: 100,
      overlay: 0.2
    });

    $('#hand-perro').click(function(e) {
      $('#modalPerro').trigger('openModal');
      e.preventDefault();
    });

    $('#hand-gato').click(function(e) {
      $('#modalGato').trigger('openModal');
      e.preventDefault();
    });

    $('#hand-caballo').click(function(e) {
      $('#modalCaballo').trigger('openModal');
      e.preventDefault();
    });

    $('#hand-leon').click(function(e) {
      $('#modalLeon').trigger('openModal');
      e.preventDefault();
    });

    $('#hand-oso').click(function(e) {
      $('#modalOso').trigger('openModal');
      e.preventDefault();
    });

    $('#hand-pez').click(function(e) {
      $('#modalPez').trigger('openModal');
      e.preventDefault();
    });

    $('#hand-hamster').click(function(e) {
      $('#modalHamster').trigger('openModal');
      e.preventDefault();
    });

    $('#hand-aguila').click(function(e) {
      $('#modalAguila').trigger('openModal');
      e.preventDefault();
    });

    $('#hand-pinguino').click(function(e) {
      $('#modalPinguino').trigger('openModal');
      e.preventDefault();
    });

    $('#hand-mono').click(function(e) {
      $('#modalMono').trigger('openModal');
      e.preventDefault();
    });

    $('#hand-tortuga').click(function(e) {
      $('#modalTortuga').trigger('openModal');
      e.preventDefault();
    });

});
