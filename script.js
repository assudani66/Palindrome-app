var entereddate = {
  day: 1,
  month: 2,
  year: 2020
}
function reverseStr(Str) {
  var charlist = Str.split('')
  var reverselist = charlist.reverse()
  return reverselist.join('')
}
function checkPalindrome(Str) {
  var reversestring = reverseStr(Str);
  return (Str === reversestring);
}
function converttostring(date) {
  var dateStr = { day: '', month: '', year: '' }
  if (date.day < 10) {
    dateStr.day = date.day + "0";
  } else {
    dateStr.day = date.day.toString();
  }
  if (date.month < 10) {
    dateStr.month = date.month + "0";
  } else {
    dateStr.month = date.month.toString();
  }
  dateStr.year = date.year.toString();
  return dateStr
}
function generatealldateformats(date) {
  var dateStr = converttostring(date)

  var Alldateformat = {
    DDMMYYYY: (dateStr.day + dateStr.month + dateStr.year),
    MMDDYYYY: dateStr.month + dateStr.date + dateStr.year,
    YYYYMMDD: dateStr.year + dateStr.month + dateStr.day,
    DDMMYY: dateStr.day + dateStr.month + dateStr.year.slice(-2),
    MMDDYY: dateStr.month + dateStr.day + dateStr.year.slice(-2)
    ,
    YYMMDD: dateStr.year.slice(-2) + dateStr.month + dateStr.day
  }
  return Alldateformat;
}
function checkPalindromeForAllDates(date) {
  var listofpalindromes = generatealldateformats(date)
  var palindromestatus = false;

  for (var i = 0; i < listofpalindromes.length; i++) {

    if (checkPalindrome(listofpalindromes[i])) {

      palindromestatus = true;
      console.log("isplaindorme")
      break
    }
  }
  return palindromestatus;

}
function isleapyear(year) {
  if (year % 4) {
    return true;
  }
  else {
    return false
  }
  if (year % 400) {
    return true
  }
  else {
    return false
  }
}
function getNextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;
  var daysinmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (month == 2) {
    if (isleapyear(year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    }
    else {
      if (day > 28) {
        day = 1
        month++;
      }
    }
  }
  if (day > daysinmonth[month - 1]) {
    day = 1
    month++
  }
  if (month > 12) {
    month = 1;
    year++
  }
  return {
    day:day,
    month: month,
    year:year
  }
}
console.log(isleapyear(entereddate.year))

function getNextPalindrome(date){
  var nextdate = getNextDate(date);
  var ctrl = 0
  while(1){
    if(checkPalindromeForAllDates(nextdate)){
      break;
    }
    ctrl++;
    nextdate = getNextDate(nextdate)
  }
  return [ctrl,nextdate]
}
console.log(getNextPalindrome(entereddate))
