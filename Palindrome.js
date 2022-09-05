const DateInput = document.querySelector("#DateInput");
const Output = document.querySelector("#ShowButton");

function EventListener(){
    var input = DateInput.split('');
    var rev = input.reverse();
    return rev.join('');
}
EventListener(DateInput);
Output.addEventListener("click",EventListener);