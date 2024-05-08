// explore.js

const NORMAL_FACE_URL = 'assets/images/smiling.png';
const SPEAKING_FACE_URL = 'assets/images/smiling-open.png';

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

function populateVoices() {
  const voices = synth.getVoices();
  const voiceSelect = document.getElementById('voice-select');
  const defaultOption = document.createElement("option");
  voiceSelect.innerHTML = '';
  defaultOption.value = undefined;
  defaultOption.text = 'Select the voice';
  voiceSelect.appendChild(defaultOption); 
  voices.forEach(x => {
    const option = document.createElement("option");
    option.value = x.voiceURI;
    option.text = x.voiceURI;
    voiceSelect.appendChild(option); 
  });
}


window.speechSynthesis.onvoiceschanged = () => {
  populateVoices();
};

let selectedVoice = undefined;

function init() {
  const voiceSelect = document.getElementById('voice-select');
  voiceSelect.addEventListener('change', e => {
    if (e.target.value) {
      const voices = synth.getVoices();
      const found = voices.find(x => x.voiceURI === e.target.value);
      selectedVoice = found;
    } else {
      selectedVoice = undefined;
    }
  });

  populateVoices();

  const submitButton = document.getElementsByTagName('button')[0];
  const inputElement = document.getElementById('text-to-speak');
  const faceElement = document.querySelector('img');

  submitButton.addEventListener('click', () => {
    if (selectedVoice) {
      const sayThing = new SpeechSynthesisUtterance(inputElement.value);
      sayThing.voice = selectedVoice;
      faceElement.src = SPEAKING_FACE_URL;
      sayThing.onend = () => {
        faceElement.src = NORMAL_FACE_URL;
      };
      sayThing.onerror = () => {
        faceElement.src = NORMAL_FACE_URL;
      };
      synth.speak(sayThing);
    }
  });
}