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

    for(var i=0; i<(arr.length-1); i++){
        var currentNum = arr[i];
        var nextNum = arr[i+1];
        if(currentNum > nextNum){
            arr[i+1] = currentNum;
            arr[i] = nextNum;
            for(var k=0; k<i; k++){
                var previousNum = arr[(i-1)-k];
                if(previousNum > nextNum){
                    arr[i-k] = previousNum;
                    arr[(i-1)-k] = nextNum;
                }
            }
        }
        printArray(arr);
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
