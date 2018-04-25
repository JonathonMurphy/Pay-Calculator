var hoursPerWeek =40;
var weeksPerYear = 52;
var hoursPerYear;

var hourlyRate = 16;
var salaryRate = 38000;

var hourlyToSalaryRate;
var salaryToHourlyRate;
var hourlyPerWeek;
var salaryPerWeek;
var hourlyPerMonth;
var salaryPerMonth;

function totalHours(hoursPerWeek, weeksPerYear){
  hoursPerYear = hoursPerWeek * weeksPerYear;
  return hoursPerYear;
}
totalHours(hoursPerWeek, weeksPerYear);

function hourlyToSalary(hoursPerYear, hourlyRate){
  hourlyToSalaryRate = hoursPerYear * hourlyRate;
  return hourlyToSalaryRate;
}
hourlyToSalary(hoursPerYear, hourlyRate);

function salaryToHourly(hoursPerYear, salaryRate){
  salaryToHourlyRate = salaryRate / hoursPerYear;
  return salaryToHourlyRate;
}
salaryToHourly(hoursPerYear, salaryRate);

function hourlyToWeekly(hourlyRate, hoursPerWeek){
  hourlyPerWeek = hourlyRate * hoursPerWeek;
  return hourlyPerWeek;
}
hourlyToWeekly(hourlyRate, hoursPerWeek);

function salaryToWeekly(salaryRate, weeksPerYear){
  salaryPerWeek = salaryRate / weeksPerYear;
  return salaryPerWeek;
}
salaryToWeekly(salaryRate, weeksPerYear);

function hourlyToMonthly(hourlyRate, weeksPerYear){
  hourlyPerMonth = hourlyRate * (hoursPerWeek * (weeksPerYear/12));
  return hourlyPerMonth;
}
hourlyToMonthly(hourlyRate, weeksPerYear);

function salarytoMonthly(salaryRate, weeksPerYear){
  salaryPerMonth = salaryRate / 12;
  return salaryPerMonth;
}
salarytoMonthly(salaryRate, weeksPerYear);
