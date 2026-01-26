function rollDice()
{
    const numOfDice = document.getElementById("numOfDice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const values= [];
    const images = [];

    for(let i = 0 ; i < numOfDice ; i++)
    {
        const value = parseInt(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src = "dice_pics/${value}.png" alt="Dice${value}">`);
    }
    diceresult.textContent = `dice:${values.join(', ')}`;
    diceimages.innerHTML = images.join('');


}

myBtn.onclick = function()
{
    rollDice();
}