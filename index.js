let lenhhtX;
start();

function start() {
    lenhhtX = prompt("Input lenght cube edge", '')
    console.log(isNaN(parseFloat(lenhhtX)))
    while (isNaN(parseFloat(lenhhtX)))
    {
        alert("is not namber, reenter");
        lenhhtX = prompt("Input lenght cube edge", '');
    }
}


function calculetedSq(ln) {
    let sq = Math.pow(ln, 2) * 6;
    let cube = Math.pow(ln, 3);
    return [sq, cube];
}

let answer = calculetedSq(lenhhtX);
getAnswer(answer[0], answer[1]);

function getAnswer(sq, cube) {
    alert(`Обьем куба ${cube}, площадь всей поверхности ${sq}`)
}