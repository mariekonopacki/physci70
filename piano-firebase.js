// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCKQx4AfMdcswCzK1BpXU45Zm9G1IIf3h4",
  authDomain: "physci-70.firebaseapp.com",
  databaseURL: "https://physci-70.firebaseio.com",
  projectId: "physci-70",
  storageBucket: "physci-70.appspot.com",
  messagingSenderId: "451358951833",
  appId: "1:451358951833:web:e6d47f8c90249527502b08",
  measurementId: "G-13K0EBTQMK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a database reference to our blog
var ref = firebase.database().ref("/");

// Object that matches notes to frequencies
var frequencies = {"C": "261 ", "C#": "277 ", "D": "294 ", "D#": "311 ", "E": "330 ", "F": "349 ", "F#": "370 ", "G": "392 ", "G#": "415 ", "A": "440 ", "A#": "466 ", "B": "493 "}


// make the buttons call the function below
document.getElementById('clear-input').addEventListener('click', clearInput, false);
document.getElementById('submit-input').addEventListener('click', submitInput, false);


function clearInput() {
  document.getElementById('note-input').value = null;
}

function submitInput() {
  notes = document.getElementById('note-input').value;
  frequency_notes = convertInput(notes);
  ref.update({
    "MUSIC_ARR": frequency_notes
  })
  document.getElementById('note-input').value = null;
}

function convertInput(notes) {
  frequency_notes = "";
  notes_arr = notes.split(" ");
  for (var i = 0; i < notes_arr.length; i++) {
    current_note = notes_arr[i];
    frequency_notes += frequencies[current_note];
  }
  return frequency_notes
}
