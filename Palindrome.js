const ip = document.querySelector("#DateInput");
const Output = document.querySelector("#ShowButton");
const dis = document.querySelector('#display');

function EventListener(e){
    // var input = DateInput.value.split('');
    // var rev = input.reverse();
    // var joinedinput = rev.join('');
    // dis.innerHTML = joinedinput;
    // ip.
    // const DateInput = ip.value.split('/').join('');
    // const half = DateInput.substring(0,Math.floor(DateInput.length/2));
    // const reversed = half.split("").reverse().join();
    // const first = DateInput.length%2 === 0 ? half : DateInput.substring(0,Math.ceil(DateInput.length/2));
    // var sample = first+reversed;
    // dis.innerHTML = sample;

    var str = ip.value;
    if(str!==''){
        var dateWithOutExtraChars = str.split('-');
        var date = {
            day:Number(dateWithOutExtraChars[1]),
            month:Number(dateWithOutExtraChars[2]),
            year:Number(dateWithOutExtraChars[0])
        };
        var isPal = checkPalindromeForAllForms(date);
        if(isPal){
            dis.innerHTML = 'Palindrome';
        }
        else{
        var [count,nextDate] = getNextPalindromeDate(date);
        dis.innerHTML = count + nextDate;
        }
    }
}
Output.addEventListener("click",EventListener);
function reversedStr(str){
    var ListOfChars = str.split('').reverse().join('');
    return ListOfChars;
}
function isPalindrome(str){
    var reverse = reversedStr(str);
    if(str === reverse){
        return true;
    }
    return false;
}
function convertDateToStr(date){
    var dateStr = {
        day:'',
        month:'',
        year:''
    };
    if(date.day < 10){
        dateStr.day = '0'+date.day;
    }
    else{
        dateStr.day = date.day.toString();
    }
    if(date.month < 10){
        dateStr.month = '0'+date.month;
    }
    else{
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
}
function getAllDateFormats(date){
    var dateStr = convertDateToStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    return [ddmmyyyy,mmddyy,mmddyyyy,yyyymmdd,ddmmyy,yymmdd];
}
function checkPalindromeForAllForms(date){
    var listOfPalindromes = getAllDateFormats(date);
    var flag = false;
    for(var i=0;i<listOfPalindromes.length;i++){
        if(isPalindrome(listOfPalindromes[i])){
            flag = true;
            break;
        }
    }
    return flag;
}
function isLeapYear(year){
    if(year %400 === 0){
        return true;
    }
    if(year %100===0){
        return false;
    }
    if(year%4===0){
        return true;
    }
    return false;
}
function getsNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var monthsList = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month == 2){
        if(isLeapYear(year)){
            if(day > 29){
                day =1;
                month++;
            }
        }
        else{
            if(day>28){
                day = 1;
                month++;
                }
            }
        }
    else{
        if(day>monthsList[month - 1]){
            day = 1;
            month++;
        }
    }

    if(month >12){
        month = 1;
        year++;
    }
    return {day:day,month:month,year:year}
}
function getNextPalindromeDate(date){
    var count = 0;
    var nextDate = getsNextDate(date);
    while(1){
        var flag = checkPalindromeForAllForms(nextDate);
        count++;
        if(flag == true){
            break;
        }
        nextDate = getsNextDate(nextDate);
    }
    return [count,nextDate];
}