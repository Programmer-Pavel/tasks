
function printTriangle() {
    let i = 0,
        j = 0;
    let max = 5;
    let space = "",
        star = "";

    while (i < max) {
        space = "";
        star = "";
        for (j = 0; j < max - i; j++) space += " ";
        for (j = 0; j < 1 * i + 1; j++) star += "#" + " ";
        console.log(space + star);
        i++;
    }
}
printTriangle()