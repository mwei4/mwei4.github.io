var i = 0;
var txt = '👋 I\'m Michael Wei, broadly interested in computer science, math, and operations research. I\'m currently a sophomore at Cornell University, studying computer science.';
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("about-me").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}