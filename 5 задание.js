var arr = [];

function fillArray() {
    function getRandom(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
    var n = 10;
    for (var i = 0; i < n; i++) {
        arr[i] = getRandom(-100, 100);
    }
    console.log(arr)
}
fillArray()

function replaceFromArray () {
    var newArray = arr.map(e => e < 0 ? 0 : e)
    console.log(newArray)
}
replaceFromArray()
