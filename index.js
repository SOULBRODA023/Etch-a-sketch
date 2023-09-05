document.addEventListener("DOMContentLoaded", () => {
  let container = document.getElementById("grid");
  let greenButton= document.querySelector(".green");
  let blueButton = document.querySelector(".blue");
  let randomButton = document.querySelector('.random');
  let blackButton = document.querySelector('.black');
  let greenColor = "#008000";
  let blueColor = "#0000ff";
  let blackColor = "#222";
  let currentColor;
  let gridSize = 16 * 16;

//create an even Listener for each button 
greenButton.addEventListener("click", ()=>{
  currentColor = greenColor;
})
blueButton.addEventListener("click", ()=>{
  currentColor = blueColor;
})
randomButton.addEventListener("click", ()=>{
  currentColor = getRandomColor();
})
blackButton.addEventListener("click", ()=>{
  currentColor = blackColor;
})


container.addEventListener('touchstart', (e)=>{
  if(e.target.classList.contains('cell')){
  e.target.style.backgroundColor = currentColor
  }
});
container.addEventListener('mouseover', (e)=>{
  if(e.target.classList.contains('cell')){
  e.target.style.backgroundColor = currentColor
  }
});

container.addEventListener('touchmove', (e)=>{
  e.preventDefault();
  if(e.target.classList.contains('cell')){
  e.target.style.backgroundColor = currentColor
  }
});




  // Create a loop that creates a cell in the grid container
  function createDiv() {
    for (var i = 0; i < gridSize; i++) {
      let oneCell = document.createElement("div");
      container.appendChild(oneCell);
      oneCell.classList.add("cell");
      
    }
  }
  createDiv();
  //create a function for the randomColor button 
  function getRandomColor(){
    let numbersLetters = '0123456789ABCDEF'
    let color = "#";
    for(i=0; i<6 ; i++){
      color+=numbersLetters[Math.floor( Math.random()*16)]
    }
    return color;
  }

});
