console.log("javascript is amazing")
console.log(20);
let name = "ahmed";
console.log(name);

// const prenom ="adama"; a privileger 
// var doc = 'document';peut etre modifier n'importe ou mais à eviter ne pas utiliser
// const FIRSTNAME = 3.466 quand c'est en majuscule signifie ne pas modifier
// const first_name = 'john' est autorise


// const michael = 78/1.69**2;
//   michael += 95/1.98**2;
// console.log(michael) ;
// const david = 92/1.95**2;
// console.log(david);

// const michaelHeight = 1.69;
// const michaelWeight = 78;


// const davidHeight = 1.95;
// const davidWeight = 92;

// // imc
// const BMIMichael = michaelHeight / michaelWeight ** 2;
// const BMIDavid = davidHeight / davidWeight ** 2;

// const michaelHeightBMI = BMIMichael > BMIDavid;

// if( BMIMichael > BMIDavid)
// {
//     console.log("michael a imc le plus eleve")
// }else{
//     console.log("pour david est plus eleve")
// }
// console.log()

// const firstName = 'john';
// const lastName = 'doe';
// const age = 36;
// const job = 'developer';
// console.log("hello, my name is " + firstName +" " + lastName + " i'm " + age + ' year OLD')

// Template literal
// console.log('hello, my name is $(firstName) $(lastName), i' m $(age) year old');




// const age = '36';

// console.log( parseInt(age) + 1 * 5);




// const money = 200;
// if(money)
// {
//     console.log("you have money")
// }else{
//     console.log("you should get a job")
// }

// const cost = "20€" - money
// if(cost)
// {
//     console.log("you have money")
// }else
// {
//     console.log("you are not rich guy")
// }

// console.log(10 == '10');
// console.log(10 === '10');

// const hasDriverLicence = true;
// const hasGoodVision = false;
// console.log(!hasGoodVision)

// if(hasDriverLicence && hasGoodVision)
// {
//     console.log('caroline  can drive her car')
// }else if(hasDriverLicence || hasGoodVision)
// {
//     console.log('caroline can may be used to drive her car')
// }
// if(!hasGoodVision)
// {
//     console.log('caroline should got to a doctor')
// }
// date=new Date();
// console.error(date);
// day = date.getDate();
// MOIS = date.getMonth()  + 1 ;
// annee = date.getFullYear()
// console.error(day + " " + MOIS + " " + annee)

// const a = 'hello';
// const b = 'world';
// console.log(a + b);

// const email = '';
// const password = 'password';
// const role = 'admin';
// const age = 17;

// if(age >= 18 && role === 'user' || role ==='admin')
// {
//     console.log('you can be an administrator');
// } else
// {
//     console.log('you can be not an administrator')
// }
// const score = 100;
// const Dolphins = 96+ 108 + 89 / 3;
// console.log(Dolphins)
// const Test1olphins= 97+ 112 + 101/ 3;
// console.log(Test1olphins)
// const TEST2olphins = (97 + 112 + 101/3)
// const moyenDolphins = TEST2olphins + Test1olphins + Dolphins/ 3;
// console.log(moyenDolphins)
// const  koalas = 88 + 91 + 110 / 3;
// console.log(koalas)
// const Test1koalas = 109 + 95 + 123 / 3;
// const Test2koalas = 109 + 95 + 106 / 3;
// console.log(Test2koalas)
// const moyenkoalas =  koalas + Test1koalas + Test2koalas / 3;
// console.log(moyenkoalas );

// if(moyenDolphins >=100 && moyenDolphins > moyenkoalas )
// {
//     console.log('dolphins a gagner')
// } else 
// {
//     console.log('koalas a gagner')
// }


// switch case

const day = "tuesday";

// if(day === "monday")
// {
//     console.log("learning javascript");
// }else if(day === "tuesday")
// {
//     console.log("learning javascript advanced");
// }else if(day === "wednesday")
// {
//     console.log("no coding");
// }else if(day === "thursday")
// {
//     console.log("learning javascript and coding challenge");
// }else if (day === "friday")
// {
//     console.log('reading for the week end');
// }else if(day === "sunday")
// {
//     console.log('enjoy with friends);
// }else if(day === 'saturday')
// {
//       console.log('sleepingt');
// }else if 
// {
//    console.log('end of the world);
// }
// 




switch(day)
{
    case 'monday':
        console.log('learning javascript');
        // return peut etre utiliser a la place de break
        break;

    case 'tuesday':
        console.log('leraning javascript advanced');
        break;

    default:
        console.log('end of the world');
}

console.log('end of instruction');




// operateur conditionnel(ternaire)

const firstname = 'magie';
const age = 17;
let majeur = 18


if(age > 18)
{
    console.log('you can have a driver license');
    majeur = true
}else 
{
    console.log(`sorry you can\'t have a driver license, please come back in ${18 - age} year`);
    majeur = false
}
console.log(majeur);
const result = age >= 18 ? 'you can have a driver license' : `sorry you can\'t have a driver license, please come back in ${18 - age} year`;
console.log(result);
// ? = si la condition est vrai 
// : = si la condition est fausse
// const majeur = age > 18 ? true : false
// const facture = 275;
// const somme = (275*15)/100;
// const total = somme + facture;
// // console.log(total);
// console.log(``)

// const facture1 = 40;
// const somme1 = (40*20)/100;
// const total1 = facture1 + somme1;
// console.log(`le prix de la facture est ${facture1}, le pouboir est de${somme1}, qui fait un total de ${total1}`)


// const facture2 = 430;
// const somme2 = (430*20)/100;
// const total2 = facture2 + somme2;
// console.log(`le prix de la facture est ${facture2}, le pouboir est de${somme2}, qui fait un total de ${total2}`)
// const bill = 275;
// const tips = bill >= 50 && bill <= 300 ? bill *0.15 : bill *0.2;
// const totalbill = bill+ tips;

// console.log(`the bill is ${bill},tips is ${tips} and total is ${totalbill > 300 ? `${totalbill} and you get 13 ponts}``)


//  declaration de function
// function logger(sayhello,message)
// {
//     const firstname = 'ahmed';
//     console.log(`${sayhello} ${firstname}, ${message}`);
// }
// // expression de function
// const fullName = function (firstName, lastName)
// {
//     return `${firstName} ${lastName}`;
// };

// console.log(fullName('ahmed','diarra'));



// // les functions flechées
// // const calcAge = (year) => {
// //   return 2023 - year;
// // };
// const calAge = (year) => 2023 - year;
// calAge(1982)

// console.log(`hello my name is ${fullName('ahmed','diarra')} and my age is ${calAge(1982)}`);


// les functions appelant d'autres functions
const cutFruitPrices = (fruit) => fruit * 4;
function fruitProcessor()
{
    const applePieces = cutFruitPrices(4);
    const orangePieces = cutFruitPrices(2);
    const juice =  `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(6, 3));
console.log(cutFruitPrices(7));


// const calcAverage = (score) => score   / 3;
// const moyenDolphins = calcAverage( 138);
// const moyenkoalas = calcAverage(168);


// function checkWinner()
// {
//    const avgDolphins = moyenDolphins;
//    const avgKoalas = moyenkoalas;

// }
// console.log(checkWinner(`koalas win ${moyenkoalas} a ${moyenDolphins}`));

// console.log(moyenDolphins);
// console.log(moyenkoalas);


const calcAverage = (score1,score2,score3) => 
{
    return (score1 +score2 + score3) / 3;
};

const avgDolphins = calcAverage()
const avgKoalas = calcAverage()

function checkWinner(avgDolphins, avgKoala )
{
    const result = 
    avgDolphins >= 2 * avgKoalas
    ? `dolphin wins ${avgDolphins} vs ${avgKoalas}`
    : avgKoalas >= 2 *  avgDolphins
    ? `koala wins ${avgKoalas} vs ${avgDolphins}`
    :`No winner`;
    return result;
}

console.log(checkWinner(avgDolphins,avgKoalas));

// console.log(`le gagnant est : ${result}`)
    
    

// console.log(`la moyen des 3 score : ${calcAverage(120, 89, 78)}`);

// les tableaux ou arrays
const players = ["mbappe", "Ney", "halland"];


// add players
// push permet de rajouter un element en dernier dans le tableau
// unshift permet de rajouter un element en premier
// pop permet de supprimer un element le dernier
// shift permet de suprimer le 1 element

players.push("messi");   
console.table(players);

players.unshift('ahmed');
console.table(players);

players.pop();
players.shift();
console.table(players);

// trouver l'index
console.log(players.indexOf('mbappe'));

// verifier q'un element exixte
console.log(players.includes('ahmed'));


// const calctips = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const bills = [125,555,44];
// const tips = [caltips(bills[0]), calctips(bills[1]), calctips(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];


function calTip(somme )
{
    
    const result = somme >= 50 && somme <= 300
    ? somme * 0.2
    : somme * 0.15
    return result
}
console.log(calTip(44));

const bills = [125, 555, 44]
const tips = [calTip(125),
    calTip(555),

]

// const calcAge = 2023 - userObj.birthYear;

// les objets
const user = ["john", "doe", 24, "developer"];
console.log(user[3]);
console.log(user);


const userObj = 
{
    firstname: 'john',
    lastname: 'doe',
    job: 'developer',
    age: 24,
};
console.log(userObj.job);

// assigner une nouvelle donnée a un objet
userObj.city = 'paris';

userObj.majeur = true;
userObj.friends = ["issa", 'tidiane'];


console.log(userObj);


// const question = prompt("which information you want to ?");
// console.log(question);

// console.log(userObj[question])
// userObj["job"] = userObj.job



// expression de function
// calcAge: function()
// {
//     return 2023 - userObj.birthYear
// }
// console.log(userObj.calcAge());

// fullName: function()
// {
    // return `${userObj.firstname} ${userObj.lastname}`;
// },
// 
// 

const tab1 = 
{
    firstname: 'michael',
    lastname: 'miller',
    poids: 78,
    taille: 1.69,

    calcBMI: function()
    {
        return tab1.poids / (tab1.taille * tab1.taille)
    }
    
}
  console.log(tab1.calcBMI());


const tab2 =
{
    firstname: 'david',
    lastname: 'smith',
    poids: 92,
    taille: 1.95,

    calcBMI: function()
    {
        return tab2.poids / (tab2.taille * tab2.taille);
    }

}
console.log(tab2.calcBMI());

if(tab1.calcBMI > tab2.calcBMI)
{
    console.log("michael a imc le plus eleve");
}else
{
    console.log("david a imc le plus eleve");
}
const message = tab1.calcBMI > tab2.calcBMI ? 'michael a imc le plus eleve' : `david a imc le plus eleve`;
console.log(message);

// une methode "fullman"
// retourne une concatenation de firstname est lastname
// fullname: 
// mot cle this 
console.log(this);


