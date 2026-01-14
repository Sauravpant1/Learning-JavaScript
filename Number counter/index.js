const label = document.getElementById("label");
const increase = document.getElementById("btnIncrease");
const decrease = document.getElementById("btnDecrease");
const reset = document.getElementById("btnReset");
let count = 0;
increase.onclick =function()
{
    count++;
    label.textContent = count;
}
decrease.onclick = function()
{
    count--;
    label.textContent = count;
}
reset.onclick = function()
{
    count = 0;
    label.textContent = count;
}