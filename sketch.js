var input;
var title;
var start;

function preload(){
  // put preload code here
}

function setup() {

  title = createElement("h1","Hello,");
  input = createInput("type your name");
  start = createButton("download your gift!");

  start.mouseClicked(goToPage);
}

function goToPage(){
  window.open('index2.html', "_self");
}

function draw() {
  title.html("Hello, " + input.value() + "!");
}
