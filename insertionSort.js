function printArray(data){
    // print string
    var printedString = "";
    for(var k=0; k<data.length; k++){
        if(k === 0){
            printedString = data[k];
        } else {
            printedString = printedString + " " + data[k];
        }
    }
    console.log(printedString);
}



function processData(input) {
    //Enter your code here
    //create array of input data
    var lines = input.split("\n");
    var arr = lines[1].split(" ");
    for(var e=0; e<arr.length; e++){
        arr[e] = parseInt(arr[e]);
    }

    // create var for num, number to be compared
    var num = arr[(arr.length)-1];

    //sort logic
    for(var i=0; i<arr.length; i++){
        var nextNum = arr[(arr.length-2)-i];
        if(nextNum === undefined){
            arr[0] = num;
            printArray(arr);
        }else if(nextNum>num){
            arr[(arr.length-1)-i] = nextNum;
            printArray(arr);
        }else if(nextNum<num){
            arr[(arr.length-1)-i] = num;
            printArray(arr);
            { break; }
        }
    }


}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
