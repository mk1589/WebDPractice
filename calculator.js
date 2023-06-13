function add(num1, num2){
    return num1 + num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function subtraction(num1, num2){
    return num1 - num2;
}
function division(num1, num2){
    return num1 / num2;
}
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}
calculator(4,5,add);
