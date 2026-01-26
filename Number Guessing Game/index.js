const min = Number(prompt("Enter the minimum value"));
const max = Number(prompt("Enter the maximum value"));
const ans = Math.floor(Math.random()*(max-min+1))+min;
console.log(ans);
let attempts = 0;
let guess;
let running = true;
while(running)
{
    guess = prompt(`Enter a number between ${min} and ${max}`);
    guess = parseInt(guess);
    if(isNaN(guess))
    {
        alert(`${guess} is not a number`);
    }
    else if(guess < min || guess > max)
    {
        alert(`Please Enter number between ${min} and ${max}`);
    }
    else
    { 
        attempts++;
        if(guess < ans)
        {
             alert("Too low !");
        }
        else if(guess > ans)
        {
            alert("Too high")
        }
        else
        {
            document.write(`The answer was ${guess} <br> It took you ${attempts} attempts`);
            running = false;
        }

    }
   
}
