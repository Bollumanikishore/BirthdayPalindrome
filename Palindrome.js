const DateInput = document.querySelector("#DateInput");
const Output = document.querySelector("#ShowButton");
function EventListener(){
    var a = DateInput.value;
    var arr1 = a.split('-');
    var year = arr1[0];
    var month = arr1[1];
    var day  = arr1[2];
    var final = arr1.join('');
    console.log(a + " "+year +" "+month + " "+day+" "+final);
}
Output.addEventListener("click",EventListener);