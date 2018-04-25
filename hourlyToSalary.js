var hourlyRate = 9.25;
var salaryRate = 37000;
var hoursPerWeek =30;
var weeksPerYear = 52;
var hoursPerYear;
var hourlyToSalaryRate;
var salaryToHourlyRate;

function totalHours(hoursPerWeek, weeksPerYear){
  hoursPerYear = hoursPerWeek * weeksPerYear;
  return hoursPerYear;
}

function hourlyToSalary(hoursPerYear, hourlyRate){
  hourlyToSalaryRate = hoursPerYear * hourlyRate;
  return hourlyToSalaryRate;
}

function salaryToHourly(hoursPerYear, salaryRate){
  salaryToHourlyRate = salaryRate / hoursPerYear;
  return salaryToHourlyRate;
}

totalHours(hoursPerWeek, weeksPerYear);
hourlyToSalary(hoursPerYear, hourlyRate);
salaryToHourly(hoursPerYear, salaryRate);
