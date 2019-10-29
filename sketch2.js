var title;
var troll;
var troll2;

var presscount = 0;

var x = window.innerWidth;
var y = window.innerHeight;

var texts = [
  "wrong again",
  ":(",
  "try again for free",
  "i wish this was the right button",
  "when you try your best but you don't succeed",
  "an attemp was made",
  "i don't even think you tried at all",
  "you tried a little bit",
  "good but not the best",
  "really?",
  "oh come on",
  "is this even legal",
  "gold star 4 effort!",
  "world's okayest little",
];

function preload(){
  // put preload code here
}

function setup() {

  title = createElement("h1", "Ops! that was the wrong button!")
  troll = createButton("click to try again");

  troll.mousePressed(newTroll);
}

function newTroll(){
  var index = round(random(texts.length));
  troll2 = createButton(texts[index]);
  troll2.position(random(200, x-200), random(200, y-200));
  troll2.mousePressed(newTroll);

  presscount ++;
  console.log(presscount);

if(presscount == 6){
  troll2 = createButton("THIS WORKS NOW! I PROMISE!");
  troll2.style('color: red');
  troll2.mouseClicked(goToPage);
}
}

function goToPage(){
  window.open('index3.html', "_self");
}

function draw() {
}
