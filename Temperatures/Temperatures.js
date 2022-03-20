let i = 0;
var tempsF = [];
var tempsC = [];

do
{
    var temp = prompt("Enter a temperature between 0 and 500 to convert to Celcius", 999);
    temp = parseFloat(temp);
    const celsius = (temp- 32 ) *  5 / 9 ;
    if (temp > -100 && temp < 500)
    {
        tempsF[i] = temp;
        tempsC[i] = celsius.toFixed(1);
        i++;
    }
    else if (temp < -100 ||
        temp > 500 && temp != 999)
    {
        alert("You entered " + temp +
        ", Entry must range from -100 to 500");
    }
}
while(temp != 999)

let resultString = "";
for(let x = 0; x < i; x++)
{
    resultString += tempsF[x].toString() + " Fahrenheit = " + tempsC[x] + " Celcius </br>";
}
resultString += "</br> Goodbye";
document.write(resultString);