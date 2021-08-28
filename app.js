var guess= Math.floor(Math.random()*100)+1
function findnumber()
{
if(document.getElementById('in').value =='')
{
document.getElementById('out').innerHTML='Enter a Valid number'
return   
 }
var num= parseInt(document.getElementById('in').value)
if(num > 100 || num < 1)
{
    document.getElementById('out').innerHTML = 'Out of range'
    return
}
if (num === guess)
document.getElementById('out').innerHTML = 'Kudos! You Got it'
else if(num > guess)
document.getElementById('out').innerHTML = 'Guess a small number'
else
document.getElementById('out').innerHTML = 'Guess a large number'
}
