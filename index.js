// write your code below!
function happyHolidays(){
  return "Happy Holidays!"
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday,name){
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(days,holiday){
  return `It's ${days} days until ${holiday}!`
}

happyHolidayTo();
happyHolidaysTo("Vinod");
happyHolidayTo("Holi","Vinod");
holidayCountdown(1,"Holi");