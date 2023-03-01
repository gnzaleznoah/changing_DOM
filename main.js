
let myButton = document.querySelector(".create-boxes");
myButton.addEventListener("click", renderBoxes);
//get the number of boxes to make from user

function getNumBoxes() {
  var numBoxes = Number(prompt("how many boxes?"));

  if (numBoxes <= 0 || Number.isNaN(numBoxes)) {
    return 0;
  }
  return numBoxes;
}

//Makes boxes based on user input.
//We use tempHolder to build the boxes in memory only.
function makeBoxes() {
  const numBoxes = getNumBoxes();
  const tempHolder = document.createDocumentFragment();

  // Repeat Loop
  for (let i = 1; i <= numBoxes; i++) {
    let box = document.createElement("DIV");
    let txt = document.createTextNode(i);
    box.className = "box";

    box.addEventListener("click", (e) => {
      e.target.classList.toggle("spin");
    });

    box.appendChild(txt);
    tempHolder.appendChild(box);
  } //end loop

  return tempHolder;
}

// actually put the boxes we get from makeBoxes on the page
function renderBoxes(e) {
  //get the data-holder attribute value from the button
  const containerName = e.target.dataset.holder;
  const container = document.querySelector(containerName);
  const boxes = makeBoxes();

  if (boxes.children.length === 0) {
    container.innerHTML = "Try Again. Please type a positive whole number";
  } else {
    // clearout previous stuff before adding new boxes
    container.innerHTML = "";
    container.appendChild(boxes);
  }
}

const go_btn = document.querySelector('.go-btn');
const go_btn2 = document.querySelector('.go-btn2');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');

//this toggles the existence of the mover1 class 
//to box1's class attribute.
go_btn.addEventListener('click', (e) => {
  box1.classList.toggle('mover1');
});

//this toggles the existence of the mover2 class 
//to box2's class attribute.
go_btn2.addEventListener('click', (e) => {
  box2.classList.toggle('mover2');
});