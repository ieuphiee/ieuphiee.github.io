
function quotes(){

var aquote = new Array;
aquote[0]="\"This universe speaks directly, even sings, to poets, primitives, mystics and children, and through tarot, everyone can hear its song.\"";
aquote[1]="\"Tarot banishes the ordinary and replaces it with awe and power.\"";
aquote[2]="\"Tarot lets me fly, swim and dig deep, when by nature I'm bound to the surface of things.\""
aquote[3]="\"Tarot readings are an attempt to understand ourselves better and discover how we might live better in the future.\""
aquote[4]="\"For me, tarot has become a practical compass for navigating the unknown.\""
aquote[5]="\"The unknowable lives in a pack of cards after it has been fairly shuffled but before it has been dealt, when all the possibilities are open, and when each possibility matters.\""
aquote[6]="\"I can read the tarot cards and believe in ghosts.\""
aquote[7]="\"The experience of truth flashes forth in a split second, within a moment. I study tarot for the flashing forth of truth in an image, a number or name.\""
aquote[8]="\"Everything you see has its roots in the unseen world.\""
aquote[9]="\"It seems that these old cards were conceived deep in the guts of human experience, at the most profound level of the human psyche.\""
aquote[10]="\"You are never alone when you have you, yourself and your Tarot cards.\""


rdmQuote = Math.floor(Math.random()*aquote.length);
document.getElementById("txtbox") .value=aquote[rdmQuote];

var el = document.getElementById("txtbox");

function fadeIn(el) {
  el.style.opacity = 0;


  var tick = function() {
    el.style.opacity = +el.style.opacity + 0.01;


    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}

fadeIn(el);

}

