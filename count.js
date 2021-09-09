let countOne = 0;
let countTwo = 0;
let countThree = 0;
const countDown = setInterval(() => {
    const getId = document.getElementById("count-down-one");
    getId.innerText = countOne;
    countOne++;
    if (countOne > 1000) {
        return clearInterval(countDown);
    }
}, 1);
const countDownTwo = setInterval(() => {
    const getId = document.getElementById("count-down-two");
    getId.innerText = countTwo;
    countTwo++;
    if (countTwo > 500) {
        return clearInterval(countDownTwo);
    }
}, 1);
const countDownThree = setInterval(() => {
    const getId = document.getElementById("count-down-three");
    getId.innerText = countThree;
    countThree++;
    if (countThree > 550) {
        return clearInterval(countDownThree);
    }
}, 1);

countDown();
countDownTwo();
countDownThree();

//
// const countDown = (getCountId, count) => {
//     const getId = document.getElementById("count-down-" + getCountId);

//     count++;
//     getId.innerText = count;
//     if (count > 500) {
//         return clearInterval(countDown);
//     }

// }
// let getFunction = countDown("one", 0);
// let getFunction2 = countDown("two", 0);
// let getFunction3 = countDown("three", 0);
// setInterval(getFunction, 1);
// setInterval(getFunction2, 1);
// setInterval(getFunction3, 1);









