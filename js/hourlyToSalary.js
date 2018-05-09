var hoursPerWeek =40;
var weeksPerYear = 52;
var hoursPerYear;

var hourlyRate = 16.25;
var salaryRate = 45000;

var hourlyToSalaryRate;
var salaryToHourlyRate;
var hourlyPerWeek;
var salaryPerWeek;
var hourlyPerMonth;
var salaryPerMonth;

//Radio button selection
//Hourly Rate Input Form
//Salary Rate Input Form

//Per Hour
var perHourHTML = document.getElementById('perHour');
//Per Week
var perWeekHTML = document.getElementById('perWeek');
//Per Month
var perMonthHTML = document.getElementById('perMonth');
//Per Year
var perYearHTML = document.getElementById('perYear');

//Calculates the total hours worked per year
function totalHours(hoursPerWeek, weeksPerYear){
  hoursPerYear = hoursPerWeek * weeksPerYear;
  return hoursPerYear;
}
totalHours(hoursPerWeek, weeksPerYear);

//Converts an hourly pay rate into a salary pay rate
function hourlyToSalary(hoursPerYear, hourlyRate){
  hourlyToSalaryRate = hoursPerYear * hourlyRate;
  return hourlyToSalaryRate;
}
hourlyToSalary(hoursPerYear, hourlyRate);

//Converts a salary pay rate into an hourly pay rate
function salaryToHourly(hoursPerYear, salaryRate){
  var salaryToHourlyRateUnrounded = salaryRate / hoursPerYear;
  salaryToHourlyRate = salaryToHourlyRateUnrounded.toFixed(2);
  return salaryToHourlyRate;
}
salaryToHourly(hoursPerYear, salaryRate);

//Shows the pre-tax earnings per week at an hourly rate
function hourlyToWeekly(hourlyRate, hoursPerWeek){
  hourlyPerWeekUnrounded = hourlyRate * hoursPerWeek;
  hourlyPerWeek = hourlyPerWeekUnrounded.toFixed(2);
  return hourlyPerWeek;
}
hourlyToWeekly(hourlyRate, hoursPerWeek);

//Shows the pre-tax earnings per week at a salary rate
function salaryToWeekly(salaryRate, weeksPerYear){
  var salaryPerWeekUnrounded = salaryRate / weeksPerYear;
  salaryPerWeek = salaryPerWeekUnrounded.toFixed(2);
  return salaryPerWeek;
}
salaryToWeekly(salaryRate, weeksPerYear);

//Shows the pre-tax earnings per month at an hourly rate
//4.333 week month
function hourlyToMonthly(hourlyRate, weeksPerYear){
  var hourlyPerMonthUnrounded = hourlyRate * (hoursPerWeek * (weeksPerYear/12));
  hourlyPerMonth = hourlyPerMonthUnrounded.toFixed(2);
  return hourlyPerMonth;
}
hourlyToMonthly(hourlyRate, weeksPerYear);

//Shows the pre-tax earnings per month at a salary rate
//4.333 week month
function salarytoMonthly(salaryRate, weeksPerYear){
  salaryPerMonthUnrounded = salaryRate / 12;
  salaryPerMonth = salaryPerMonthUnrounded.toFixed(2);
  return salaryPerMonth;
}
salarytoMonthly(salaryRate, weeksPerYear);
