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

const hasDriverLicence = true;
const hasGoodVision = false;
console.log(!hasGoodVision)

if(hasDriverLicence && hasGoodVision)
{
    console.log('caroline  can drive her car')
}else if(hasDriverLicence || hasGoodVision)
{
    console.log('caroline can may be used to drive her car')
}
if(!hasGoodVision)
{
    console.log('caroline should got to a doctor')
}
date=new Date();
console.error(date);
day = date.getDate();
MOIS = date.getMonth()  + 1 ;
annee = date.getFullYear()
console.error(day + " " + MOIS + " " + annee)

const a = 'hello';
const b = 'world';
console.log(a + b);

const email = '';
const password = 'password';
const role = 'admin';
const age = 17;

if(age >= 18 && role === 'user' || role ==='admin')
{
    console.log('you can be an administrator');
} else
{
    console.log('you can be not an administrator')
}
const score = 100;
const Dolphins = 96+ 108 + 89 / 3;
console.log(Dolphins)
const Test1olphins= 97+ 112 + 101/ 3;
console.log(Test1olphins)
const TEST2olphins = (97 + 112 + 101/3)
const moyenDolphins = TEST2olphins + Test1olphins + Dolphins/ 3;
console.log(moyenDolphins)
const  koalas = 88 + 91 + 110 / 3;
console.log(koalas)
const Test1koalas = 109 + 95 + 123 / 3;
const Test2koalas = 109 + 95 + 106 / 3;
console.log(Test2koalas)
const moyenkoalas =  koalas + Test1koalas + Test2koalas / 3;
console.log(moyenkoalas );

if(moyenDolphins >=100 && moyenDolphins > moyenkoalas )
{
    console.log('dolphins a gagner')
} else 
{
    console.log('koalas a gagner')
}


