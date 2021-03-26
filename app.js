let odd =0, even = 0;

function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 48 + 7);
    return randomNumber
}

function biasedEngine() {
    var randomNumber = getRandomNumber();
    if (randomNumber % 2 === 0)
        return randomNumber % 6;
    else 
        return (Math.floor(randomNumber / 2)) % 6;
}

function castDice() {
    var img = document.querySelector('img');
    var text = document.querySelector('h1');

    var numberReceived = biasedEngine();
    text.textContent = numberReceived;
    img.src = "img/"+ numberReceived + ".png";
    var pro = document.querySelector('h2');

    if (numberReceived % 2 === 0)
        even += 1;
    else 
        odd += 1;   
    let total = odd + even;
    let probabilty = `Odd: ${Number.parseFloat(odd / total).toFixed(2)} Even: ${Number.parseFloat(even / total).toFixed(2)}`;
    pro.textContent = probabilty;
}
castDice();