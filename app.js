let secretNum = 0;
let tries = 0;
let listSortedNums = [];
let maxNum = 10;
let maxTries = 3;
//

function setTextElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function verifyTry() {
    let userNum = parseInt(document.getElementById('valUser').value);
    console.log(`Numero secreto: ${secretNum}`);
    console.log(`Numero Usuario: ${userNum}`);
    if (secretNum == userNum) {
        setTextElement('p',`Acertaste el Numero en ${tries} ${(tries === 1) ? 'intento' : "intentos"}`);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        //Usuario no acerto
        
        if (secretNum > userNum) {
            setTextElement('p','El numero secretro es mayor');
        } else {
            setTextElement('p','El numero secretro es menor');
        }
        tries++;
        cleanInput();
    }
    return;
}

function genSecretNum() {
    let genNum = Math.floor(Math.random()*maxNum)+1;
    if (listSortedNums.length == maxNum) {
        setTextElement('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if (listSortedNums.includes(genNum)) {
            return genSecretNum();
        } else {
            listSortedNums.push(genNum);
            console.log(`Lista numeros generados: ${listSortedNums}`);
            return genNum;
        }
    }
}

function cleanInput() {
    document.querySelector('#valUser').value = '';
}

function restartGame() {
    //Limpiar Input
    cleanInput();
    InitialState();
    document.getElementById('restart').setAttribute('disabled',true);
}

function InitialState() {
    setTextElement('h1', 'Juego del Numero Secreto');
    setTextElement('p', `Indica Numeros del 1 al ${maxNum}`);  
    secretNum = genSecretNum();
    tries = 1;
}

InitialState();

