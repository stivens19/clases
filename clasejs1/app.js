//let nombre=prompt("¿Cual es tu nombre?");
//alert(`Hola ${nombre}`);
//suma
let x = prompt('Ingrese el primer numero: ') * 1; //var
let y = Number(prompt('Ingrese el segundo numero: ')); //var
let suma = 0,
    resta, multiplicacion, division;

//suma concatenacion
suma = x + y;
let cadena = 'Esta es la suma:' + suma;
console.log(cadena); //15 x=6 y=9

//resta
x = 10;
resta = x - y;
console.log(`La resta es ${resta}`); //1 x=10 y=9

//multiplicacion
x = 1;
multiplicacion = x * y;
console.log(multiplicacion); //9 x=1 y=9

//division
y = 2;
division = x / y;
console.log(division); //0.5 x=1 y=2

const z = 100;

console.log(z); //100

//z=200;//esto es un error
//console.log(z);//200