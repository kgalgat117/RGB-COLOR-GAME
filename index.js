var numSquares = 6;
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var colors = generateRandomColors(numSquares);
var colorDisplay = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var pickedcolor = pickColor();


easyButton.addEventListener("click",function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3 ;
    colors = generateRandomColors(numSquares);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});
hardButton.addEventListener("click",function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    for(var i=0; i<squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
});





resetButton.addEventListener("click",function(){
    messageDisplay.textContent = "";
    resetButton.textContent = "new colors";
    colors = generateRandomColors(numSquares);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    for(var i=0;i<colors.length;i++){
    squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedcolor;

for(var i=0;i<colors.length;i++){
    squares[i].style.background = colors[i];
    
    squares[i].addEventListener("click",function(){
       var clickedColor = this.style.background;
        console.log(clickedColor , pickedcolor);
        if(clickedColor === pickedcolor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }
        else{
            this.style.background = "black";
            messageDisplay.textContent = "Try Again";
        }
    });
}



function changeColors(color){
    for(var i=0 ; i<colors.length; i++){
        squares[i].style.background = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}