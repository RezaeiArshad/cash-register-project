const priceInput = document.getElementById("price-input");
const buttonDiv = document.getElementById("buttons-div");
const cashFromCustomer = document.getElementById("cash-from-customer");
const purchaseForm = document.getElementById("purchase-form");
const allSpans = [...document.querySelectorAll("#cash-in-drawer-div > p > span")]
let price = 1.87;
priceInput.value = price;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

let changeGiven = {

}

const cidUpdater = () => {
 allSpans.forEach((span, index) => span.innerText = cid[index][1])
}

cidUpdater()

for (let i = 0; i < 9; i++) {
    buttonDiv.innerHTML += `
    <div id="button"></div>
    `
}

const checkForPennies = (input) => {
    const valHere = 0.01 * 100;
    const cidTex = cid[0][0];
    while (input - valHere >= price * 100 && cid[0][1] >= 0.01) {
        input = input - valHere;
        cid[0][1] -= 0.01;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 0.01;
        }
        else {
            changeGiven[cidTex] = 0.01;
        }
        if (!(input - valHere >= price * 100) || !(cid[0][1] >= 0.01)) {
            console.log(input);
            console.log(changeGiven);
            console.log(cid);
    }
    } 
}

const checkForNickels = (input) => {
    const valHere = 0.05 * 100;
    const cidTex = cid[1][0];
    while (input - valHere >= price * 100 && cid[1][1] >= 0.05) {
        input = input - valHere;
        cid[1][1] -= 0.05;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 0.05;
        }
        else {
            changeGiven[cidTex] = 0.05;
        }
        if (!(input - valHere >= price * 100) || !(cid[1][1] >= 0.05)) {
            checkForPennies(input)
    }
    } 
}

const checkForDimes = (input) => {
    const valHere = 0.1 * 100;
    const cidTex = cid[2][0];
    while (input - valHere >= price * 100 && cid[2][1] >= 0.1) {
        input = input - valHere;
        cid[2][1] -= 0.1;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 0.1;
            changeGiven[cidTex] = Math.round(changeGiven[cidTex]);
        }
        else {
            changeGiven[cidTex] = 0.1;
            changeGiven[cidTex] = Math.round(changeGiven[cidTex]);
        }
        if (!(input - valHere >= price * 100) || !(cid[2][1] >= 0.1)) {
            checkForNickels(input)
    }
    } 
}

const checkForQuarters = (input) => {
    const valHere = 0.25 * 100;
    const cidTex = cid[3][0];
    while (input - valHere >= price * 100 && cid[3][1] >= 0.25) {
        input = input - valHere;
        cid[3][1] -= 0.25;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 0.25;
        }
        else {
            changeGiven[cidTex] = 0.25;
        }
        if (!(input - valHere >= price * 100) || !(cid[3][1] >= 0.25)) {
            checkForDimes(input);
    }
    } 
}

const checkForOnes = (input) => {
    const valHere = 1 * 100;
    const cidTex = cid[4][0];
    while (input - valHere >= price * 100 && cid[4][1] >= 1) {
        input = input - valHere;
        cid[4][1] -= 1;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 1;
        }
        else {
            changeGiven[cidTex] = 1;
        }
        if (!(input - valHere >= price * 100) || !(cid[4][1] >= 1)) {
            checkForQuarters(input)
    }
    } 
}

const checkForFives = (input) => {
    const valHere = 5 * 100;
    const cidTex = cid[5][0];
    while (input - valHere >= price * 100 && cid[5][1] >= 5) {
        input = input - valHere;
        cid[5][1] -= 5;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 5;
        }
        else {
            changeGiven[cidTex] = 5;
        }
        if (!(input - valHere >= price * 100) || !(cid[5][1] >= 5)) {
            checkForOnes(input)
    }
    } 
}

const checkForTens = (input) => {
    const valHere = 10 * 100;
    const cidTex = cid[6][0];
    while (input - valHere >= price * 100 && cid[6][1] >= 10) {
        input = input - valHere;
        cid[6][1] -= 10;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 10;
        }
        else {
            changeGiven[cidTex] = 10;
        }
        if (!(input - valHere >= price * 100) || !(cid[6][1] >= 10)) {
            checkForFives(input)
    }
    } 
}

const checkForTwenties = (input) => {
    const valHere = 20 * 100;
    const cidTex = cid[7][0];
    while (input - valHere >= price * 100 && cid[7][1] >= 20) {
        input = input - valHere;
        cid[7][1] -= 20;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 20;
        }
        else {
            changeGiven[cidTex] = 20;
        }
        if (!(input - valHere >= price * 100) || !(cid[7][1] >= 20)) {
            checkForTens(input)
    }
    } 
}

const checkForHundreds = (input) => {
    const valHere = 100 * 100;
    const cidTex = cid[8][0];
    while (input - valHere >= price * 100 && cid[8][1] >= 100) {
        input = input - valHere;
        cid[8][1] -= 100;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 100;
        }
        else {
            changeGiven[cidTex] = 100;
        }
        if (!(input - valHere >= price * 100) || !(cid[8][1] >= 100)) {
            checkForTwenties(input)
    }
    } 
}

const checkInput = (input) => {
    if (input < price) {
        alert("Customer does not have enough money to purchase the item")
        return
    }
    else if (input === price) {
        alert("No change due - customer paid with exact cash")
        return
    }
    else {
        checkForHundreds(input * 100)
    }
}

purchaseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    changeGiven = {};
    checkInput(Number(cashFromCustomer.value))
})

priceInput.addEventListener("onchange", () => {
    price = Number(priceInput.value);
})