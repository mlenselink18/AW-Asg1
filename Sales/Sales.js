const  region1 = [1540, 1130, 1580, 1105];
const  region2 = [2010, 1168, 2305, 4102];
const  region3 = [2450, 1847, 2710, 2391];
const  region4 = [1845, 1491, 1284, 1575];
const  region5 = [2120, 1767, 1599, 3888];

const allSales = [region1, region2, region3, region4, region5];

const quarterly = getQuarterly();
const regionally = getRegionally();
const all = getAll();

var elementQ = document.getElementById("salesQuarter");
var elementR = document.getElementById("salesRegion");
var elementT = document.getElementById("salesTotal");

elementQ.innerHTML = quarterly;
elementR.innerHTML = regionally;
elementT.innerHTML = all;

function getQuarterly()
{
    var quarterly = "";
    let Q1 = 0;
    let Q2 = 0;
    let Q3 = 0;
    let Q4 = 0;
    for(let val of allSales)
    {
        Q1 += val[0]; 
        Q2 += val[1];
        Q3 += val[2];
        Q4 += val[3];
    }
    quarterly += "Q1: $" + Q1.toString() + " </br> ";
    quarterly += "Q2: $" + Q2.toString() + " </br> ";
    quarterly += "Q3: $" + Q3.toString() + " </br> ";
    quarterly += "Q4: $" + Q4.toString() + " </br> ";

    return quarterly;
}

function getRegionally()
{
    let regionalSales = [0, 0, 0, 0, 0];
    for(let i in allSales)
    {
        for(let x in allSales[i])
        {
            regionalSales[i] += allSales[i][x];
        }
    }

    let regionalString = "";

    for(let r in regionalSales)
    {
        regionalString += "Region " + (r + 1).toString() + ": $" + regionalSales[r].toString() + "</br>";
    }

    return regionalString;
}

function getAll()
{
    let total = 0;
    for(let i in allSales)
    {
        for(let x of allSales[i])
        {
           total += x;
        }
    }

    let returnString = "$" + total.toString();

    return returnString;
}