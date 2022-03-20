const maxA = 100;
const maxB = 92;
const maxC = 84;
const maxD = 77;
const maxF = 69;
const floor = 0;

var grades = [];

let i = 0;
do
{
    var input = parseInt(prompt("Enter test score", "999"));
    if(input > -1 && input < 101)
    {
        if(input != 999)
        {
            grades[i] = input;
            i++;
        }
    }
    else if(input < floor || 
        input > maxA && input != 999)
    {
        alert("You entered " + input +
        ", Entry must range from 0 to 100");
    }
}
while(input != 999)

let resultString = "";
for(let x = 0; x < i; x++)
{
    resultString += "Grade " + grades[x].toString() + " = " + getGrade(grades[x]) + "</br>";
}
resultString += "</br> Goodbye";
document.write(resultString);


function getGrade(input)
{
    var grade = "";

    if(input > maxB && input <= maxA)
        grade = "A";
    if(input > maxC && input <= maxB)
        grade = "B";
    if(input > maxD && input <= maxC)
        grade = "C";
    if(input > maxF && input <= maxD)
        grade = "D";
    if(input >= floor && input <= maxF)
        grade = "F";

    return grade;
}