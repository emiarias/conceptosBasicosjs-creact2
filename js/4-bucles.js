/* 
mientras se cumple la condicion logica
while(condicion logica){
    todas las lineas que yo quiero repetir varias veces
    agregar una linea de codigo que haga que la condicion no se cumpla en algun momento
}
*/

// crear un programa que muestre una lista de numeros del 1 al 100, cada uno en un renglon nuevo: (Numero: 1)

// let contador = 1;

// while(contador <= 100){
//     document.write(`<p>Número: ${contador}</p>`)
//     //incrementar el contenido de contador
//     contador = contador + 1
// }

//do-while hacer-mientras

/*
do{
    todas las lineas de codigo que quiero repetir
    agregar una linea de codigo que haga que la condicion no se cumpla en algun momento
}while(condicion logica)
*/


let numero = 1
do{
    document.write(`<p>Número: ${numero}</p>`)
    numero++ //numero= numero +1;
}while(numero <= 100)


//for si se cumple la condicion ejecuta el codigo

/*
    for(inicializar una variable; condicion logica ; incrementar o decrementar la variable inicializada){
        todas las lineas de codigo que quiero ejecutar
    }
*/

//quiero crear una cuenta regresiva de 10 a 0

for(let cuenta=-1; cuenta>=0; cuenta--){
    document.write(`<p>Cuenta regresiva: ${cuenta}</p>`)
}
