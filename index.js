const submit = document.getElementById("submit");
const result = document.getElementById("result");
const attempt_score = document.getElementById("attempt_score")
let num = Math.floor((Math.random()*100)+1);
let attempts=0;
let loop = true;
console.log(num);
    submit.onclick = function(){
            attempts++;
            let guess = document.getElementById("guess").value;
            guess=Number(guess);
            if(guess === num){
                result.textContent="You got it right!!!";
                attempt_score.textContent=`Attempts = ${attempts}`;
                loop=false;
            }
            else{
                result.textContent = "Try again";
                attempt_score.textContent=`Attempts = ${attempts}`;
            }
    }
