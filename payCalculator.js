//Need to figure out how Social Security, Medicare, Fed and State Taxes are calculated

const oldHours = 40;
const oldPayTotal = 480;
const oldPayTotalNet =350;
const oldPayRate = 12;

const aspiraPay = 9.25;
const platesPay = 7.25;

var aspiraHours;
var platesHours;

//array to hold the combination of hours between the two jobs that will get me the same amount of pay as my old job
var hourCombos = [];


//need to output the number of hours for each job that will get me the same pay as before.
//need to output all possible whole number hour combonations

//a function that will take the pay rate of one job and multiply it by a number of hours (x), starting at 1
// then increment the number of hours until 60, and add that number to the pay rate of the other job multiplied by (y = 60 - x)

function calcCombinedHours() {
	var holdValue;
	while (x = 1; x++; x > 60)
		var y = 60 - x;
		holdValue = (aspiraPay * x) + (platesPay * y);
		console.log(holdValue);
}

calcCombinedHours();
