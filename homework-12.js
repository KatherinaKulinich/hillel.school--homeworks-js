let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
    ]

 
let allBalance = users.map(val => val.balance);
console.log(allBalance);                                           //array with all balances


//delete characters:
let newArrayBalance = [];

for (let value of allBalance) {
    let item1 = '';
    let item2 = '';

    item1 = value.replace('$', '');
    item2 = item1.replace(',', '');
    newArrayBalance.push(item2);
}
console.warn(newArrayBalance);         


let arrBalanceNumber = newArrayBalance.map((val) => +val);
console.log(arrBalanceNumber);                                                        // to number

let sumBalance = arrBalanceNumber.reduce(function(a,b) {
    return a + b;
})
console.log(sumBalance);                            //знайти суму всіх балансів користувачів
 


let arrValBalance = [];
for (let k = 0; k < arrBalanceNumber.length; k++) {
    if (arrBalanceNumber[k] > 2000) {
        arrValBalance.push(k);
    }
}
console.log(arrValBalance);                              //arr indexes of balances >2000

let arrayTel = users.map(val => val.phone);
console.log(arrayTel);                           //arr of all phones



//Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів:
let arrayResult = [];

for (let value of arrValBalance) {
    let tel = '';
    tel = arrayTel.splice(arrValBalance[value], 1);
    arrayResult = arrayResult.concat(tel);
}

console.log(arrayResult);                          










// for (let k = 0; k < arrayTel.length; k++) {
//     // for (let x of arrValBalance) {
//     //     if (k == x) {
//     //         arrayResult.push(arrayTel[k]) ;
//     //     }
//     // }
// }



// console.warn(allBalance);

// let arr = allBalance.map((val) => val.substring(1, 9));
// console.log(arr);                                                         // del $
// let arr2 = arr.map((val) => val.substring(0, 1) + val.substring(2,7)) ;
// console.log(arr2);                                                        // del koma





// let newArray = [];
// for (let i = 0; i < allBalance.length; i++) {
//     let index1;
//     let index2;
//     let a = '';
//     let b = '';
//     index1 = allBalance[i].indexOf('$');
//     a = allBalance[i].slice(0, index1) + allBalance[i].slice(index1 +1 );
//     // console.log(a);
//     index2 = a.indexOf(',');
//     b = a.slice(0, index2) + a.slice(index2 + 1 );
//     // console.log(b);
    
//     newArray.push(b);
// }
// console.log(newArray);