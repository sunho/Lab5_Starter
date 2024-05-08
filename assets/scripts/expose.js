// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImg = document.querySelector('section>img');
  const hornAudio = document.querySelector('audio');

  hornSelect.addEventListener('change', e => {
    hornImg.src = 'assets/images/' + e.target.value + '.svg';
    hornAudio.src = 'assets/audio/' + e.target.value + '.mp3';
  });

  const volumeSlider = document.getElementById('volume');
  const volumeImg = document.querySelector('#volume-controls>img');

  volumeSlider.addEventListener('change', e => {
    hornAudio.volume = e.target.value / 100.0;
    if (e.target.value >= 67) {
      volumeImg.src = 'assets/icons/volume-level-3.svg';
    } else if (e.target.value >= 33) {
      volumeImg.src = 'assets/icons/volume-level-2.svg';
    } else if (e.target.value >= 1) {
      volumeImg.src = 'assets/icons/volume-level-1.svg';
    } else {
      volumeImg.src = 'assets/icons/volume-level-0.svg';
    }
  });

  const playSound = document.querySelector('button');
  const confetti = new JSConfetti();
  playSound.addEventListener('click', e=> {
    hornAudio.play();
    if (hornSelect.value == 'party-horn') {
      confetti.addConfetti();
    }
  })
}
