const result = document.getElementById("result");
const attempt_score = document.getElementById("attempt_score")
const play = document.getElementById("play");
play.onclick = function(){
    let loop = true;
    let num = Math.floor((Math.random()*100)+1);
    let attempts=0;
    console.log(num);
    while(loop){
        attempts++;
        let guess = window.prompt("Guess the number");
        if(isNaN(guess)){
            window.alert("Enter a valid number!");
        }
        if(guess<0||guess>100){
            window.alert("Enter a number only between 1 and 100");
        }
        if(guess==num){
            loop=false;
            result.textContent="You guessed it right!!";
            attempt_score.textContent=`You took ${attempts} attempts`;

        }
        if(guess<num){
            window.alert("Too low guess again!");
        }
        if(guess>num){
            window.alert("Too high guess again!");
        }
    

    }
}