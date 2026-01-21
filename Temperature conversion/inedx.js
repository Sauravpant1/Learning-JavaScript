
const toFaren = document.getElementById("toFaren");
const toCelcius = document.getElementById("toCelcius");
const myBtn = document.getElementById("myBtn");
const ans = document.getElementById("ans");


myBtn.onclick = function()
{
    event.preventDefault();
    const myNumber =Number(document.getElementById("myNumber").value);
    ans.textContent = `${convert(myNumber)}`;
}

function convert(myNumber)
{
    if(toFaren.checked)
    {
        return `${myNumber*9/5+32} °F`;
    }
    else if(toCelcius.checked)
    {
        return `${myNumber-32*5/9}°C`;
    }
    else
    {
        return "Please select one of the above";
    }

}