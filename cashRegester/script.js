const priceInput = document.getElementById("price-input");
const buttonDiv = document.getElementById("buttons-div");
const cashFromCustomer = document.getElementById("cash");
const purchaseForm = document.getElementById("purchase-form");
const changeDue = document.getElementById("change-due")
const allSpans = [...document.querySelectorAll("#cash-in-drawer-div > p > span")]
let price = 3.26;
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

let tempCid = []

let changeGiven = {}

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
    const valHere = 0.01 * 1000;
    const cidTex = cid[0][0];
    cid[0][1] = cid[0][1] * 1000
    while (input >= valHere && cid[0][1] >= 10) {
        input = input - valHere;
        cid[0][1] -= 10;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 10;
        }
        else {
            changeGiven[cidTex] = 10;
        }
        }
        if (!(input >= valHere) || !(cid[0][1] >= 10)) {
            if (changeGiven[cidTex]) {
                changeGiven[cidTex] = changeGiven[cidTex] / 1000;
              }
            cid[0][1] = cid[0][1] / 1000;
            const outOfCash = cid.every((el) => el[1] === 0)
              
            if (input === 0 && outOfCash) {
                changeDue.innerText = "Status: CLOSED";
                Object.entries(changeGiven).forEach((el) => {
                changeDue.innerText += ` ${el[0]}: $${el[1]} `
                cidUpdater()
            });
            }
            else if (input === 0) {
                changeDue.innerText = "Status: OPEN"
                Object.entries(changeGiven).forEach((el) => {
                changeDue.innerText += ` ${el[0]}: $${el[1]} `
                cidUpdater()
            });
            }
            else {
            changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
            cid = tempCid;
            cidUpdater()
        }
    
    }  
}

const checkForNickels = (input) => {
    const valHere = 0.05 * 1000;
    const cidTex = cid[1][0];
    cid[1][1] = cid[1][1] * 1000;
    while (input >= valHere && cid[1][1] >= 500) {
        input = input - valHere;
        cid[1][1] -= 500;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 500;
        }
        else {
            changeGiven[cidTex] = 500;
        }
        }
        if (!(input >= valHere) || !(cid[1][1] >= 500)) {
            if (changeGiven[cidTex]) {
                changeGiven[cidTex] = changeGiven[cidTex] / 1000;
              }
            cid[1][1] = cid[1][1] / 1000;
            checkForPennies(input)
    } 
}

const checkForDimes = (input) => {
    const valHere = 0.1 * 1000;
    const cidTex = cid[2][0];
    cid[2][1] = cid[2][1] * 1000;
    while (input >= valHere && cid[2][1] >= 100) {
        input = input - valHere;
        cid[2][1] -= 100;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 100;    
        }
        else {
            changeGiven[cidTex] = 100;
        }
        }
        if (!(input >= valHere) || !(cid[2][1] >= 100)) {
            if (changeGiven[cidTex]) {
                changeGiven[cidTex] = changeGiven[cidTex] / 1000;
              }
            cid[2][1] = cid[2][1] / 1000;
            checkForNickels(input);
    }  
}

const checkForQuarters = (input) => {
    const valHere = 0.25 * 100;
    const cidTex = cid[3][0];
    cid[3][1] = cid[3][1] * 100;
    while (input >= valHere && cid[3][1] >= 25) {
        input = input - valHere;
        cid[3][1] -= 25;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 25;
        }
        else {
            changeGiven[cidTex] = 25;
        }
        }
        if (!(input >= valHere) || !(cid[3][1] >= 25)) {
            if (changeGiven[cidTex]) {
              changeGiven[cidTex] = changeGiven[cidTex] / 100;
            }
           cid[3][1] = cid[3][1] / 100;
           checkForDimes(input * 10)
    }  
}

const checkForOnes = (input) => {
    const valHere = 1 * 100;
    const cidTex = cid[4][0];
    while (input >= valHere && cid[4][1] >= 1) {
        input = input - valHere;
        cid[4][1] -= 1;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 1;
        }
        else {
            changeGiven[cidTex] = 1;
        }
        }
        if (!(input >= valHere) || !(cid[4][1] >= 1)) {
            checkForQuarters(input);
    } 
}

const checkForFives = (input) => {
    const valHere = 5 * 100;
    const cidTex = cid[5][0];
    while (input >= valHere && cid[5][1] >= 5) {
        input = input - valHere;
        cid[5][1] -= 5;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 5;
        }
        else {
            changeGiven[cidTex] = 5;
        }
        }
        if (!(input >= valHere) || !(cid[5][1] >= 5)) {
            checkForOnes(input);
    }  
}

const checkForTens = (input) => {
    const valHere = 10 * 100;
    const cidTex = cid[6][0];
    while (input >= valHere && cid[6][1] >= 10) {
        input = input - valHere;
        cid[6][1] -= 10;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 10;
        }
        else {
            changeGiven[cidTex] = 10;
        }
        }
        if (!(input >= valHere) || !(cid[6][1] >= 10)) {
            checkForFives(input);
    }
}

const checkForTwenties = (input) => {
    const valHere = 20 * 100;
    const cidTex = cid[7][0];
    while (input >= valHere && cid[7][1] >= 20) {
        input = input - valHere;
        cid[7][1] -= 20;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 20;
        }
        else {
            changeGiven[cidTex] = 20;
        }
        }
        if (!(input >= valHere) || !(cid[7][1] >= 20)) {
            checkForTens(input);
    }   
}

const checkForHundreds = (input) => {
    const valHere = 100 * 100;
    const cidTex = cid[8][0];
    while (input >= valHere && cid[8][1] >= 100) {
        input = input - valHere;
        cid[8][1] -= 100;
        if (changeGiven[cidTex]) {
            changeGiven[cidTex] += 100;
        }
        else {
            changeGiven[cidTex] = 100;
        }
        }
        if (!(input >= valHere) || !(cid[8][1] >= 100)) {
            checkForTwenties(input);          
    }  
}

const checkInput = (input) => {
    if (input < price) {
        alert("Customer does not have enough money to purchase the item")
        return
    }
    else if (input === price) {
        changeDue.innerText = "No change due - customer paid with exact cash";
        return
    }
    else {
        changeGiven = {};
        changeDue.innerText = "";
        tempCid = cid;
        checkForHundreds((input * 100) - (price * 100));
    }
}

purchaseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput(Number(cashFromCustomer.value))
})

priceInput.addEventListener("onchange", () => {
    price = parseInt(priceInput.value);
})