
var words = ['EXPENSE', 'COOK', 'JUSTIFY', 'RIDGE', 'BARTENDER'];
var word = words[Math.floor(Math.random() * words.length)];
const hangmanImages = [
    "./assets/head.svg",
    "./assets/body.svg",
    "./assets/left-hand.svg",
    "./assets/right-hand.svg",
    "./assets/left-leg.svg",
    "./assets/right-leg.svg"
];
var attempts = 6;
var correct=0;
var guess;
var imagenb=0;
const keyboard = document.querySelectorAll('.letter');
const hang= document.getElementById('hang');
const answersection = document.getElementById('answer-section');
for (let i = 0; i < word.length; i++) {
    const underscore = document.createElement('span');
    underscore.textContent = '_';
    answersection.appendChild(underscore);
}

function letterclick(){
    const letter = event.target;
    guess = letter.textContent;
    correctguess=false;
    for (let i =0;i<word.length;i++){
        if(word[i]===guess){
            var correctguess=true;
            answersection.children[i].textContent=guess;
            correct+=1; 
        }
    }
    if(!correctguess){
        attempts--;
        const newImage = document.createElement('img');
        newImage.src = hangmanImages[imagenb];
        newImage.classList=hangmanImages[imagenb].split('/').pop().split('.')[0];
        console.log(hangmanImages[imagenb]);
        hang.appendChild(newImage);
        imagenb+=1;
    }
    letter.removeEventListener("click", letterclick);

    if(attempts==0){
        keyboard.forEach(letter=>{
            letter.removeEventListener("click", letterclick);
        });
        alert("You Lose!");
    }

    if(correct===word.length){
        keyboard.forEach(letter=>{  
            letter.removeEventListener("click", letterclick);
        });
        alert("You Win!");
    } 
}
keyboard.forEach(letter=>{
    letter.addEventListener("click",letterclick);
});


