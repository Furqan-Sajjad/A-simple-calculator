let screen = document.querySelector("#screen");
let input = document.querySelector(".btn");
function displayvalue(value){
    screen.value += value;
    console.log(value);
}
function calculate(){
    screen.value = eval(screen.value)
    if(isNaN(screen.value) || screen.value == undefined){
        alert("Error")
        screen.value = "";
    }
}
function clearScreen(){
    screen.value = "";
}
function removeLastChracter(){
    screen.value = screen.value.slice(0 , -1);
}