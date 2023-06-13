function printPartialRow(n){
    var str = "";
    str = str + "*";
    for(var i = 0; i<n-2; i++){
        str = str + " ";
    }
    str = str + "*";
    console.log(str);
}
function printFullRow(n){
    var str = "";
    for(var i = 0; i < n; i++){
        str = str + "*";
    }
    console.log(str);
}
function printWholSquare(n){
    printFullRow(n);
    for(var i = 0; i<n-2; i++){
        printPartialRow(n);
    }
    printFullRow(n);

}
printWholSquare(10);


