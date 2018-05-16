//Measure height of outer-container
var $outerContainerHeight = $('.outer-container').height();
//Measure height of viewport
var $windowHeight = $(window).height();
//Declare variable
var setPaddingBottom;
//Set padding-botton of outer-container to height of viewport minus 20px
$('.outer-container').css("padding-bottom", function(setPaddingBottom) {
  setPaddingBottom = $windowHeight - $outerContainerHeight - 20;
  return setPaddingBottom;
});


var hoursPerWeek =40;
var weeksPerYear = 52;
var hoursPerYear = 2080;

var hourlyPerHour;
var hourlyPerWeek;
var hourlyPerMonth;
var hourlyToSalaryRate;

var salaryToHourlyRate;
var salaryPerWeek;
var salaryPerMonth;
var salaryPerYear;

// HOURLY FUNCTIONS

//Shows the pre-tax earnings per week at an hourly rate
function hourlyToWeekly($payRateVal, hoursPerWeek){
  hourlyPerWeekUnrounded = $payRateVal * hoursPerWeek;
  hourlyPerWeek = hourlyPerWeekUnrounded.toFixed(2);
  return hourlyPerWeek;
}
//Shows the pre-tax earnings per month at an hourly rate
//4.333 week month
function hourlyToMonthly($payRateVal, weeksPerYear){
  var hourlyPerMonthUnrounded = $payRateVal * (hoursPerWeek * (weeksPerYear/12));
  hourlyPerMonth = hourlyPerMonthUnrounded.toFixed(2);
  return hourlyPerMonth;
}
//Converts an hourly pay rate into a salary pay rate
function hourlyToSalary(hoursPerYear, $payRateVal){
  hourlyToSalaryRate = hoursPerYear * $payRateVal;
  return hourlyToSalaryRate;
}

//SALARY FUNCTIONS

//Converts a salary pay rate into an hourly pay rate
function salaryToHourly(hoursPerYear, $payRateVal){
  var salaryToHourlyRateUnrounded = $payRateVal / hoursPerYear;
  salaryToHourlyRate = salaryToHourlyRateUnrounded.toFixed(2);
  return salaryToHourlyRate;
}
//Shows the pre-tax earnings per week at a salary rate
function salaryToWeekly($payRateVal, weeksPerYear){
  var salaryPerWeekUnrounded = $payRateVal / weeksPerYear;
  salaryPerWeek = salaryPerWeekUnrounded.toFixed(2);
  return salaryPerWeek;
}
//Shows the pre-tax earnings per month at a salary rate
//4.333 week month
function salarytoMonthly($payRateVal, weeksPerYear){
  salaryPerMonthUnrounded = $payRateVal / 12;
  salaryPerMonth = salaryPerMonthUnrounded.toFixed(2);
  return salaryPerMonth;
}


//Radio button selection
//Hourly Rate Input Form
//Salary Rate Input Form

//Pay rate
var $payRate = $(':input[type="number"]');
//Radio buttons
// var $radioButton = $('form:radio');
//Per Hour
var $perHour = $('#perHour');
//Per Week
var $perWeek = $('#perWeek');
//Per Month
var $perMonth = $('#perMonth');
//Per Year
var $perYear = $('#perYear');
//Submit button
var $submit = $('#submit')
//Submit button click action
$submit.on('click', function(e) {
  e.preventDefault();
  //Clear results
  $perHour.text('');
  $perWeek.text('');
  $perMonth.text('');
  $perYear.text('');
  //Get number from Form
  var $payRateVal = $payRate.val();
  //Check which radio button is checked
  if ($('.radio[value=hourly]').is(':checked')) { //Hourly
    //Run number through per hour function
    //Update per hour
    $perHour.append("Per Hour: " + $payRateVal);
    //Run number through per week function
    hourlyToWeekly($payRateVal, hoursPerWeek);
    //Update per week
    $perWeek.append("Per Week: " + hourlyPerWeek);
    //Run number through per month function
    hourlyToMonthly($payRateVal, weeksPerYear);
    //Update per month
    $perMonth.append("Per Month: " + hourlyPerMonth);
    //Run number through per year function
    hourlyToSalary(hoursPerYear, $payRateVal);
    //Update per year
    $perYear.append("Per Year: " + hourlyToSalaryRate);
    //Measure height of outer-container
    var $outerContainerHeight = $('.outer-container').height();
    //Measure height of viewport
    var $windowHeight = $(window).height();
    //Declare variable
    var setPaddingBottom;
    //Clear oadding-bottom
    $('.outer-container').css("padding-bottom", "0")
    //Set padding-bottom
    $('.outer-container').css("padding-bottom", function(setPaddingBottom) {
      setPaddingBottom = $windowHeight - $outerContainerHeight - 20;
      return setPaddingBottom;
    });
  } else { //Salary
    //Run number through per hour function
    salaryToHourly(hoursPerYear, $payRateVal);
    //Update per hour
    $perHour.append("Per Hour: " + salaryToHourlyRate);
    //Run number through per week function
    salaryToWeekly($payRateVal, weeksPerYear);
    //Update per week
    $perWeek.append("Per Week: " + salaryPerWeek);
    //Run number through per month function
    salarytoMonthly($payRateVal, weeksPerYear);
    //Update per month
    $perMonth.append("Per Month: " + salaryPerMonth);
    //Run number through per year function
    //Update per year
    $perYear.append("Per Year: " + $payRateVal);
    //Measure height of outer-container
    var $outerContainerHeight = $('.outer-container').height();
    //Measure height of viewport
    var $windowHeight = $(window).height();
    //Declare variable
    var setPaddingBottom;
    //Clear oadding-bottom
    $('.outer-container').css("padding-bottom", "0")
    //Set padding-bottom
    $('.outer-container').css("padding-bottom", function(setPaddingBottom) {
      setPaddingBottom = $windowHeight - $outerContainerHeight - 20;
      return setPaddingBottom;
    });
  }

});
