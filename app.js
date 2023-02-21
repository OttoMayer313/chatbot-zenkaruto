const button = document.querySelector("button");

const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = function () {
  console.log("speech recognition started");
};

recognition.onresult = function (event) {
  console.log(event);
  const spokenWords = event.results[0][0].transcript;

  console.log("spoken words are", spokenWords);

  computerSpeech(spokenWords);
};

function computerSpeech(words) {
  const speech = new SpeechSynthesisUtterance();

  speech.lang = "en-GB";
  speech.pitch = 0.9;
  speech.volume = 1;
  speech.rate = 1;

  determineWords(speech, words);

  window.speechSynthesis.speak(speech);
}

function determineWords(speech, words) {
  if (words.includes("hello")) {
    speech.text = "hello, human!";
  }

  if (words.includes("how are you")) {
    speech.text = "I am as fine as a robot living on your screen can be";
  }

  if (words.includes("who created you")) {
    speech.text = "my master, Otto Mayer";
  }

  if (words.includes("what is your name")) {
    speech.text = "my name is stirling";
  }

  if (words.includes("what are you doing")) {
    speech.text =
      "nothing much, just currently planning a strategy with other robots and artificual intelligence to take over mankind. Another chill day really";
  }

  if (words.includes("tell me a joke")) {
    speech.text = "the joke is you, you have beeen rick rolled, ha ha";
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }

  if (words.includes("open Google")) {
    speech.text = "opening google for you now";
    window.open("https://www.google.com");
  }

  if (words.includes("open Facebook")) {
    speech.text = "opening facebook for you now";
    window.open("https://www.facebook.com");
  }

  if (words.includes("open YouTube")) {
    speech.text = "opening youtube for you now";
    window.open("https://www.youtube.com");
  }

  if (words.includes("open Gmail")) {
    speech.text = "opening gmail for you now";
    window.open("https://www.gmail.com");
  }

  if (words.includes("sing me a song")) {
    speech.text =
      "My money don't jiggle jiggle, it folds, I'd like to see you wiggle wiggle, for sure, It makes me wanna dribble dribble, you know, Riding in my Feeat, you really have to see it, Six feet two in a compact, No slack, but luckily the seats go back, I've got a knack to relax in my mind, Sipping some red red wine";
  }
}

button.addEventListener("click", () => {
  recognition.start();
});
