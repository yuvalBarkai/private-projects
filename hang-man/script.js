let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");
let sixth = document.getElementById("sixth");
let seventh = document.getElementById("seventh");
let eight = document.getElementById("eight");

const button = document.getElementsByClassName("btn")
let wordGuess = document.getElementById("wordGuess");
let letterGuess = document.getElementById("letterGuess");

const canvas = document.getElementById("canvas");
const painter = canvas.getContext("2d");
painter.lineWidth = 3;

const characters = [first, second, third, fourth, fifth, sixth, seventh, eight];

const word = "shina";
const guesses = 8;
let counter = guesses;

//delete previous lines
/* for(let i = 0; i<=characters.length;i++){
    characters[i].innerText="";
} */

//add lines
for(let i = 0; i<=word.length-1;i++){
    characters[i].innerText="_";
}

const RAD = Math.PI/180;
draw(counter);


function submit(){
    if(wordGuess.value){ // user entered word guess
        guessingWord();
    }
    else if(letterGuess.value){ // user entered only letter guess
        guessingLetter();
    }
    else{ // user submit without entering a value
        alert("Please enter a value before submiting");
        letterGuess.focus();
    }
}

function guessingWord(){
    if(wordGuess.value==word){
        draw("won");
        button.disabled=true;
        for(let i = 0; i<=word.length-1;i++){
            characters[i].innerText=word[i];
        }
    }
    else{
        counter--;
        draw(counter);
        wordGuess.value="";
        letterGuess.focus();
    }
}

function guessingLetter(){
    for(let i = 0; i<=word.length-1;i++){
        if(letterGuess.value==word[i]){
            characters[i].innerText=word[i];
            break;
        }
    }

    letterGuess.value="";
    counter--;
    draw(counter);
    letterGuess.focus();
}

function draw(guess){
    switch(guess){
        
        default://lost
            console.log("lost");
            painter.beginPath(); //delete
            painter.clearRect(148,125,65,140);

            painter.lineWidth = 3;
            painter.beginPath(); //head
            painter.arc(98,120,10,0,2*Math.PI);
            painter.stroke();
            painter.beginPath(); //body
            painter.moveTo(98,130);
            painter.lineTo(98,190);
            painter.stroke();
            painter.beginPath(); //right arm
            painter.moveTo(98,130); 
            painter.lineTo(128,160);
            painter.stroke();
            painter.beginPath();
            painter.moveTo(98,130); //left arm
            painter.lineTo(68,160);
            painter.stroke();
            painter.beginPath();
            painter.moveTo(98,190); //right leg
            painter.lineTo(118,220);
            painter.stroke();
            painter.beginPath();
            painter.moveTo(98,190); //left leg
            painter.lineTo(68,220);
            painter.stroke();
            
            break;

        case "won"://win
            console.log("won");
            
            break;

        case guesses://start screen
            console.log("starting screen");
            painter.beginPath(); //head
            painter.arc(180,160,10,0,2*Math.PI);
            painter.stroke();
            painter.beginPath(); //body
            painter.moveTo(180,170);
            painter.lineTo(180,230);
            painter.stroke();
            painter.beginPath(); //right arm
            painter.moveTo(180,170);
            painter.lineTo(210,200);
            painter.stroke();
            painter.beginPath(); //left arm
            painter.moveTo(180,170);
            painter.lineTo(150,200);
            painter.stroke();
            painter.beginPath(); //right leg
            painter.moveTo(180,230);
            painter.lineTo(200,260);
            painter.stroke();
            painter.beginPath(); //left leg
            painter.moveTo(180,230); 
            painter.lineTo(160,260);
            painter.stroke();

            break;

        case guesses-1://guess 1
            console.log("guess 1");
            painter.beginPath(); //right hanging leg
            painter.moveTo(240,200); 
            painter.lineTo(270,260);
            painter.stroke();
            painter.beginPath(); //left hanging leg
            painter.moveTo(240,200);
            painter.lineTo(220,260);
            painter.stroke();
            break;

        case guesses-2://guess 2
            console.log("guess 2");
            
            painter.beginPath(); //hanging device
            painter.moveTo(240,200); 
            painter.lineTo(240,50);
            painter.lineTo(100,50);
            painter.lineTo(100,80);
            painter.lineTo(102,83);
            painter.lineTo(97,86);
            painter.lineTo(103,91);
            painter.lineTo(96,96);
            painter.stroke();
            break;

        case guesses-3://guess 3
            console.log("guess 3");
            painter.lineWidth = 1;
            painter.beginPath(); //rope
            painter.arc(107,112,20,RAD*240,RAD*110,true);
            painter.stroke();
            painter.beginPath(); //rope
            painter.arc(90,112,20,RAD*300,RAD*62);
            painter.stroke();
            break;

        case guesses-4://guess 4
            console.log("guess 4");
            painter.lineWidth = 5;
            painter.beginPath(); // first step
            painter.moveTo(150,260);
            painter.lineTo(150,240);
            painter.lineTo(120,240);
            painter.stroke();
            break;

        case guesses-5://guess 5
            console.log("guess 5");
            painter.beginPath(); // second step
            painter.moveTo(120,240);
            painter.lineTo(120,215);
            painter.lineTo(100,215);
            painter.stroke();
            break;

        case guesses-6://guess 6
            console.log("guess 6");
            
            break;

        case guesses-7://guess 7
            console.log("guess 7");
            break;
    }
}