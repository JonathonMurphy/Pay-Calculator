var hourlyRate;
var salaryRate;
var hoursPerWeek;
var weeksPerYear;
var hourlyToSalaryRate;
var salaryToHourlyRate;

function totalHours(hoursPerWeek, weeksPerYear){
  var totalHours = hoursPerWeek * weeksPerYear;
  return totalHours
}

function hourlyToSalary(totalHours, hourly){
  hourlyToSalaryRate = totalHours * hourlyRate;
  return hourlyToSalaryRate;
}

function salaryToHourly(totalHours, salaryRate){
  salaryToHourlyRate = salaryRate / totalHours;
  return salaryToHourlyRate;
}
