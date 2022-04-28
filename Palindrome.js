const DateInput = document.querySelector("#DateInput");
const Output = document.querySelector("#ShowButton");
function nextpalindrome(ans)
{
    var i,nextans;
    var ans1 = parseInt(ans);
        for(i=ans1+1;i>0;i++)
        {
            nextans=palindrome(i);
            if(nextans == 1)
            {
                var finalAns = i;
                break;
            }
        }
    return finalAns;
}
function prevpalinrome(ans)
{
    var i,nextans;
    var ans1 = parseInt(ans);
        for(i=ans1-1;i>0;i--)
        {
            nextans=palindrome(i);
            if(nextans == 1)
            {
                var finalAns = i;
                break;
            }
        }
    return finalAns;
}
function palindrome(ans)
{
    var mod,rev;
    var orans = ans.toString();
    var orans1 = orans;
    rev = orans.split('').reverse().join('');
    if(orans1 === rev)
    {
        return 1;
    }
    else 
    {
        return 0;
    }
    
}
function EventListener(){
    var a = DateInput.value;
    var arr1 = a.split('-');
    var year = arr1[0];
    var month = arr1[1];
    var day  = arr1[2];
    var final = arr1.join('');
    // var ans = parseInt(final);
    // console.log(typeof ans);
    // console.log(final)
    // console.log(a + " "+year +" "+month + " "+day+" "+final);
    // var palans = palindrome(final);
    if(palindrome(final)==1)
    {
        console.log("Hurrey! your birthday is a palindrome...");
        
    }
    else
    {
        var finans1=nextpalindrome(final);
        // console.log(finans1);
        var finans2=prevpalinrome(final);
        var finalfinans1=finans1.toString().split('').reverse().join('');
        var finalfinans2=finans2.toString().split('').reverse().join('');
        // console.log(typeof finans1);
        // console.log(finans2);

        var dif1 = Math.abs(final - finans1);
        var dif2 = Math.abs(final - finans2);
        // console.log(dif1 +" "+ dif2);
        if(dif1 > dif2)
        {
            console.log(finalfinans1 + " is the nearest palindrome!!");
        }
        else if(dif1<dif2)
        {
            console.log(finalfinans2 + " is the nearest palindrome!!");
        }
    }
}
Output.addEventListener("click",EventListener);