let audio1;
let audio2;
let audio3;
let audio4;
let audio5;
let audio6;
let audio7;
let audio8;
let audio9;
let audio10;
let audio11;
let audio12;
let closed=true;

function hiHatSwitch(){
  if(closed)
    closed=false;
  else
    closed=true;
}

function button(audio,location) {
  audio = new Audio(location);
  audio.play();
}

function hiHat(){
  if(closed){
    audio8=new Audio('assets/hiHat.wav');
    audio8.play();
  }
  else{
    audio9=new Audio('assets/hiHatOpen.mp3')
    audio9.play();
  }
}

addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 65) {
      document.getElementById("aCymbal").click();
  }
});
addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 83) {
      document.getElementById("sCymbal").click();
  }
});
addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 68) {
      document.getElementById("dCymbal").click();
  }
});
addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 70) {
      document.getElementById("fCymbal").click();
  }
});
addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 90) {
      document.getElementById("zTom").click();
  }
});
addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 88) {
      document.getElementById("xTom").click();
  }
});
addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 67) {
      document.getElementById("cTom").click();
  }
});
addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 16) {
      document.getElementById("hiHat").click();
  }
});
addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 20) {
      document.getElementById("hiHatSwitch").click();
  }
});
addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 17) {
      document.getElementById("snare").click();
  }
});
addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 32) {
      document.getElementById("base").click();
  }
});
addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 86) {
      document.getElementById("jumbo").click();
  }
});