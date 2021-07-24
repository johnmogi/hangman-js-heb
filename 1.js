const form = document.getElementsByTagName('form');
let input = document.getElementsByTagName('input');
let valid =false;

let threeWords = {
    1: 'cat',
    2: 'dog',
    3: 'boy'
}

function drawGame(numberOfLetters){
    console.log(numberOfLetters);
}

function validate(x){
    console.log(isNaN(x));
    
    if(isNaN(x)){
       return alert('must be a number');  
    }
    if(x == ''){
        return alert('can\'t be empty')
    }

    return valid = true;
}
function start(){
    let userChoose = +prompt('How manny letters?');
    validate(userChoose);
    console.log(valid);
    valid ? drawGame(userChoose) : start();
    
}

start();