(function () {
  function playMusic(){
    var myAudio = document.getElementById('playAudio');
    if (myAudio.duration > 0 && myAudio.paused) {
        myAudio.play()
    } else {
      myAudio.play()

    }
  }

  var body = document.body;
  body.addEventListener("click", function (ev) {
    playMusic();
  });
  window.onload = playMusic;
})();
