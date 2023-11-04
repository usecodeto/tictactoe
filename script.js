// console.log('welcome to TIc TAC TOE')

let ting = new Audio('ting.mp3');
let gameover = new Audio('gameover.wav');
let music = new Audio('music.mp3')
turn = "X";
let isgameover = false;


// function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// function to check if player won or not
const checkWin = () => {
    let boxtext = (document.getElementsByClassName('boxtext'))
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            console.log(boxtext[e[0]].innerText, 'hello harry')
            document.querySelector('.turninfo').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
        }
    })



}
// music.play();
// Game Logic
let boxitem = Array.from(document.getElementsByClassName("boxitem"));
boxitem.forEach(element => {
    element.addEventListener('click', () => {
        // console.log(element)
        let boxtext = element.querySelector('.boxtext');
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            ting.play();
            turn = changeTurn();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName('turninfo')[0].innerText = 'Turn for ' + turn;
            }
            // console.log(turn)
        }
    })
})
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxtext = Array.from(document.getElementsByClassName('boxtext'));
    boxtext.forEach(element => {
        element.innerText = '';
    })
    turn = "X";
    isgameover = false;
    if (!isgameover) {
        document.getElementsByClassName('turninfo')[0].innerText = 'Turn for ' + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '00px';
    }
})

