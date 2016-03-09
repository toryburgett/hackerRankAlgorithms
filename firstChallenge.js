function processData(input) {
    var lines = input.split("\n");
    var num = parseInt(lines[0]);
    var arr = lines[2].split(" ");
    for(var e=0; e<arr.length; e++){
        arr[e] = parseInt(arr[e]);
    }
    console.log(arr.indexOf(num));
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
