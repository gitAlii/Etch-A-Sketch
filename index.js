//create a main div element
const mainDiv = document.createElement('div');

//Gives classname of maindiv
mainDiv.className = 'mainDiv';



//puts a div classname-sketchBoard into the main div x16
for (i = 0; i < 16; i++) {
    //global scope
    let sketchBoard = document.createElement('div');
    
    sketchBoard.className = 'sketchBoard';
    
    for(j = 0; j <16; j++) {
        //function block scope
        let smallSquare = document.createElement('div');
        smallSquare.className = 'smallSquare';
        sketchBoard.append(smallSquare)
        
    }
   
    //slects the maindiv class and adds sketchBoard div to it as a child element
    mainDiv.append(sketchBoard);
};

 //eventlistener for hover effect
  mainDiv.addEventListener("mouseover", e => {
    if(e.target.classList == "smallSquare") {
      colorChange(e.target);
    };
  }); 
  

function colorChange (smallSquare) {
  smallSquare.classList.add("sketchEffect");
};



//append the main div to the body to display
document.body.append(mainDiv);