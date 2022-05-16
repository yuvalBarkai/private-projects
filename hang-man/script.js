let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");
let sixth = document.getElementById("sixth");
let seventh = document.getElementById("seventh");
let eight = document.getElementById("eight");
let ninth = document.getElementById("ninth");
let tenth = document.getElementById("tenth");


const guessesLeft = document.getElementById("guessesLeft");
const submitButton = document.getElementById("submitButton");
let wordGuess = document.getElementById("wordGuess");
let letterGuess = document.getElementById("letterGuess");
let error = document.getElementById("errorMsg");
let usedLetters = document.getElementById("usedLetters");

const canvas = document.getElementById("canvas");
const painter = canvas.getContext("2d");

const characters = [first, second, third, fourth, fifth, sixth, seventh, eight, ninth, tenth];

let wordList = ["blue","luck","voodoo","galaxy","computer","password","sleep"]; // up to 10 characters

let word = "";

let remainingLetters="";
const guesses = 9;
let counter = guesses;

const RAD = Math.PI/180;
let wordSelected="";

newGame();

// presses submitButton if enter is pressed
letterGuess.addEventListener("keypress", function(event) { 
    if (event.key === "Enter") {
      event.preventDefault();
      submitButton.click();
    }
});
wordGuess.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submitButton.click();
    }
});

function newGame(){
    if(wordList.length==0){
        draw("clear");
        draw("end");
        submitButton.disabled=true;
    }
    else{
        word = takeWord(wordList);
        remainingLetters = word;
        
        for(let d = 0; d<characters.length;d++){ //delete previous lines
            characters[d].innerText="";
        }
        for(let i = 0; i<=word.length-1;i++){ //add lines
            characters[i].innerText="_";
        }

        counter=guesses;
        draw("clear");
        draw(counter);
        letterGuess.focus();
        usedLetters.innerText="";
        wordGuess.value="";
        submitButton.disabled=false;
        guessesLeft.innerText=counter;
    }   
}

function takeWord(list){ // takes a word from a list while removing it from the list    
    let index = Math.floor(Math.random()*list.length);

    wordSelected = list[index];
    list.splice(index,1);

    return wordSelected;
}

function submit(){
    error.innerText="";
    if(wordGuess.value){ // user entered word guess
        guessingWord();
    }
    else if(letterGuess.value){ // user entered only letter guess
        guessingLetter();
    }
    else{ // user submit without entering a value
        error.innerText="Please enter a value before submiting";
        letterGuess.focus();
    }
    guessesLeft.innerText=counter;
}

function guessingWord(){
    if(wordGuess.value.toLowerCase()==word){
        draw("won");
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

let usedLetterValidation = [",",];
function guessingLetter(){
    let correctLetter = false;
    let alreadyUsed = false;
    for(let i = 0; i<=word.length-1;i++){
        if(letterGuess.value.toLowerCase()==word[i]){
            correctLetter=true; 

            if(letterGuess.value.toLowerCase()==remainingLetters[i]){ // Validation it wasnt used before
                characters[i].innerText=word[i];
                remainingLetters=remainingLetters.replace(word[i],"0");
            }
            else
                error.innerText = "Already used word";  
        }
    }   
    if(!correctLetter){
        for(let l = 0;l<usedLetterValidation.length;l++){
            if(letterGuess.value.toLowerCase()==usedLetterValidation[l])
                alreadyUsed = true;
        }
        if(alreadyUsed)
            error.innerText = "Already tried that";
        else{
            usedLetters.innerText += ` ${letterGuess.value.toLowerCase()}`;
            usedLetterValidation.push(letterGuess.value.toLowerCase());
            counter--;
        }
    }

    letterGuess.value="";
    if(remainingLetters==(word.length-1)*"0")
        draw("won");
    else{
        draw(counter);
        letterGuess.focus();
    }
}

//showcases drawing for testing
/* for(let t=counter; t>=0;t--){
    draw(t);
} */
// draw("won")

function draw(guess){
    switch(guess){
        
        default://lost
            console.log("lost");
            painter.clearRect(0,210,160,50);
            let tmp = 130;
            let myInterval = setInterval(()=>{
                painter.strokeStyle = "red"
                painter.beginPath();
                painter.moveTo(96,tmp);
                painter.lineTo(96,tmp+5);
                painter.stroke();
                tmp = tmp + 6;
                if(tmp>170){
                    clearInterval(myInterval)
                    painter.beginPath(); // text bubble
                    painter.strokeStyle = "black";
                    painter.lineWidth = 2;
                    painter.moveTo(102,125);
                    painter.lineTo(120,80);
                    painter.lineTo(220,80);
                    painter.lineTo(220,115);
                    painter.lineTo(120,115);
                    painter.lineTo(102,125);
                    painter.stroke();
                    painter.beginPath(); 
                    painter.font = "15px Arial"
                    painter.fillStyle = "rgb(193,0,0)"
                    painter.fillText("Your stupidity",125,95,105);
                    painter.fillText("killed me",126,110,105);
                    painter.font = "35px Arial"
                    painter.fillStyle="purple"
                    painter.fillText(`The word was ''${word}''`,10,295,280)
                }
                    
            },400)

            submitButton.disabled=true;
            break;

        case "end":
            painter.font = "50px arial"
            painter.fillText("Game Over",20,150);
            break;

        case "clear":
            painter.clearRect(0,0,canvas.width,canvas.height);

            break;
            
        case "won"://win
            console.log("won");
            painter.clearRect(0,0,300,300);
            painter.beginPath(); //head
            painter.arc(180,120,50,0,2*Math.PI);
            painter.stroke();
            painter.beginPath(); // mouth
            painter.arc(180,120,35,30*RAD,150*RAD)
            painter.stroke();
            painter.beginPath(); // left eye
            painter.arc(160,105,10,0,2*Math.PI)
            painter.stroke();
            painter.beginPath(); // right eye
            painter.arc(200,105,10,0,2*Math.PI)
            painter.stroke();
            painter.beginPath(); // nose
            painter.moveTo(180,115);
            painter.lineTo(175,130);
            painter.lineTo(185,128);
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
            painter.lineTo(160,200);
            painter.stroke();
            painter.beginPath(); //right leg
            painter.moveTo(180,230);
            painter.lineTo(200,260);
            painter.stroke();
            painter.beginPath(); //left leg
            painter.moveTo(180,230); 
            painter.lineTo(160,260);
            painter.stroke();
            submitButton.disabled=true;
            break;

        case guesses://start screen
            console.log("starting screen");
            painter.lineWidth = 3;
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
            painter.lineTo(160,200);
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
            painter.lineWidth = 5;
            painter.beginPath(); // first step
            painter.moveTo(150,260);
            painter.lineTo(150,240);
            painter.lineTo(120,240);
            painter.stroke();
    
            break;

        case guesses-4://guess 4
            console.log("guess 4");
            painter.beginPath(); // second step
            painter.moveTo(120,240);
            painter.lineTo(120,215);
            painter.lineTo(100,215);
            painter.stroke();

            break;

        case guesses-5://guess 5
            console.log("guess 5");
            painter.beginPath();
            painter.moveTo(100,215);
            painter.lineTo(0,215);
            painter.stroke();

            break;

        case guesses-6://guess 6
            console.log("guess 6");

            painter.lineWidth = 1;
            painter.beginPath(); //rope
            painter.arc(107,112,20,RAD*240,RAD*110,true);
            painter.stroke();
            painter.beginPath(); //rope
            painter.arc(90,112,20,RAD*300,RAD*62);
            painter.stroke();

            break;            

        case guesses-7://guess 7
            console.log("guess 7");
            painter.beginPath(); //delete
            painter.clearRect(155,125,60,140);

            painter.lineWidth = 3;
            painter.beginPath(); //head
            painter.arc(140,148,10,0,2*Math.PI);
            painter.stroke();
            painter.beginPath(); //body
            painter.moveTo(140,160);
            painter.lineTo(140,210);
            painter.stroke();
            painter.beginPath(); //right arm
            painter.moveTo(140,160); 
            painter.lineTo(155,185);
            painter.stroke();
            painter.beginPath();
            painter.moveTo(140,160); //left arm
            painter.lineTo(130,190);
            painter.stroke();
            painter.beginPath();
            painter.moveTo(140,210); //right leg
            painter.lineTo(150,240);
            painter.stroke();
            painter.beginPath();
            painter.moveTo(140,210); //left leg
            painter.lineTo(130,240);
            painter.stroke();

            break;
        
        case guesses-8://guess 8
        console.log("guess 8");
        painter.beginPath(); //delete
        painter.clearRect(127,135,44,103);

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
        painter.lineTo(125,215);
        painter.stroke();
        painter.beginPath();
        painter.moveTo(98,190); //left leg
        painter.lineTo(60,215);
        painter.stroke();

        break;
    }
}