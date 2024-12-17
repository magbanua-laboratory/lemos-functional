const display = document.getElementById("display");
function active(value) {
    display.value += value;
}
function Clear() {
    display.value = "";
}
function equal() {
    display.value= eval(display.value);
}
function slice() {
    display.value = display.value.slice(0, -1);
}