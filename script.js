function reverseString(str){
  var charOfString=str.split('');
  var reverseChar=charOfString.reverse();
  var reversedString=reverseChar.join('');
  return(reversedString);
}

function isPalindrome(str){
  var reverseStr=reverseString(str);
  if (str===reverseStr){
      return true;
  }
  else{
      return false;
  }
}

function dateToString(date){
  var dateInString={day:"",month:"",year:""};
  if (date.day<10){
      dateInString.day='0'+date.day;
  }
  else{
      dateInString.day=date.day.toString();
  }
  if (date.month<10){
      dateInString.month='0'+date.month;
  }
  else{
      dateInString.month=date.month.toString();
  }
  dateInString.year=date.year.toString();
  return(dateInString);
}

function returnDateFormat(dategiven){
  var datepassed=dateToString(dategiven);
  var ddmmyyyy=datepassed.day+datepassed.month+datepassed.year;
  var mmddyyyy=datepassed.month+datepassed.day+datepassed.year;
  var yyyymmdd=datepassed.year+datepassed.month+datepassed.day;
  var ddmmyy=datepassed.day+datepassed.month+datepassed.year.slice(-2);
  var mmddyy=datepassed.month+datepassed.day+datepassed.year.slice(-2)
  var yymmdd=datepassed.year.slice(-2)+datepassed.month+datepassed.day;
  var dateArray=[ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd,yymmdd];
  // console.log(dateArray);
  return(dateArray);
}

function checkPalindrome(arrOfDate){
  var isItpalindrome=false;
  for(var i=0;i<arrOfDate.length;i++){
      // console.log(`string passed is ${i} ${arrOfDate[i]}`)
      if(isPalindrome(arrOfDate[i])){
          isItpalindrome=true;
          break;
      }
  }
  // console.log(isItpalindrome);
  return (isItpalindrome);
}

//leap year
function Isleapyear(year){
  if (year%400==0){
      return true;
  }
  if (year%100==0){
      return false;
  }
  if (year%4==0){
      return true;
  }
}


function nextdate(date){
  daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
  

  if (date.day==daysInMonth[date.month-1]){

      if (date.month==12){
          date.month=1;
          date.day=1;
          date.year=date.year+1;
      }
      else if (date.month==2){

              if(Isleapyear(date.year)){
                  date.day=date.day+1;
              }

              else{
                  date.month=date.month+1;
                  date.day=1;
              }
      }

      else{
          date.month=date.month+1;
          date.day=1;
      }
      
  }

  else if ((date.day==29) && (date.month==2)){
      date.day=1;
      date.month=date.month+1;
  }


  else{
      date.day=date.day+1;
  }


  return(date);
}


var countPrevious=0;

function findNextPlaindromeDate(date){
  var ctrl=0;
  var nextday;
  var dateFormatOfNextDay;
  var nextpal;
  while(true){
      ctrl=ctrl+1;
      nextday=nextdate(date);
      dateFormatOfNextDay=returnDateFormat(nextday);
      nextpal=checkPalindrome(dateFormatOfNextDay);
      if(nextpal){
          return([ctrl,nextday]);
      }
  }
  
  
}

var dateent={};

function inputHandler(){
  if (dateEntered.value){

      var datearray=dateEntered.value.split("-");
      dateent.day=Number(datearray[2]);
      dateent.month=Number(datearray[1]);
      dateent.year=Number(datearray[0]);
      var dateformats=returnDateFormat(dateent);
      var ispalindrm=checkPalindrome(dateformats);
      console.log(ispalindrm)
      if (ispalindrm){
          display.innerText="Yay your birthday is a palindrome";
      }
      else{
          console.log("No");
          var nextpalindrome=findNextPlaindromeDate(dateent);
          var dayordays=(nextpalindrome[0]===1)?"day":"days";
          display.innerText=`Oh no your birthday is not a palindrome. The next palindrome date is ${nextpalindrome[1].day}-${nextpalindrome[1].month}-${nextpalindrome[1].year}. You missed it by ${nextpalindrome[0]} ${dayordays} 😞😞.`

      }

  }
  else{
      display.innerText="You have to enter your birthday first";

  }

}
  




var dateEntered=document.querySelector("#dateEntered");
var checkbutton=document.querySelector("#btn-check");
var result=document.querySelector("#display");
checkbutton.addEventListener("click",inputHandler);