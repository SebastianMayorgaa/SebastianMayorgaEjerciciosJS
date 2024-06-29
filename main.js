//Ejercicio 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de multiplicar (Los primeros 10 multiplos).

let numero = prompt ("Ingresa un numero:")
numero = parseInt (numero)

if (isNaN(numero)) {
    alert("Ingresa un numero valido")
} else{
    console.log("Tabla del " + numero + ":"); 


for (let i = 0; i <= 10; i++) {
    console.log(numero * i); 
}
}


//Ejercicio 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

 let suma = 0 

 while (true) {
     let numero2 = prompt ("Ingresa un numero")
     numero2 = parseInt (numero2)
 if (numero2 === 0) {
    break
 } 
 if (!isNaN(numero2)) {
    suma += numero2
    console.log(numero2);
 } else{
    alert("Ingresa un numero valido");
 }
}
console.log("La suma total es: " + suma);



//Ejercicio 3.-Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una variable guardar un numero que este en el rango 1 - 100. La persona debera poder ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado.

let numeroAdivinanza = Math.round((Math.random() * 100) + 1)
console.log(numeroAdivinanza);
let intentos = 0

while (true) {
    let numeroUsuario = parseInt(prompt("Ingresa un numero del 1 al 100"))
    if (numeroUsuario === numeroAdivinanza) {
        alert("Felicidades! Ganaste en " + intentos + " intentos")
        break
    } else {
        if (numeroUsuario < numeroAdivinanza) {
            alert("Tu numero es menor")
        } else {
            alert("Tu numero es mayor")
        }
        intentos++;
    }
}


//Ejercicio 4.- Realizar un programa que permita decir si un numero es primo. Un numero es primo si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo. Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el numero ya no es primo.

let numeroPrimo = parseInt(prompt("Ingresa un numero"))
console.log(numeroPrimo);
let divisor = 1
let divisorTotal = 0

while (divisor <= numeroPrimo) {
    if (numeroPrimo % divisor === 0) {
        divisorTotal++;
    } 
    divisor++;    
}
if (divisorTotal === 2) {
    alert("El numero es primo")
} else {
    alert("El numero no es primo")
}


// Ejercicio 5.- Realizar un programa que permita dado un numero, mostrar todos sus divisores.

let numeroDivUsuario = parseInt(prompt("Ingresa un numero"))
console.log("Los numeros divisores de " + numeroDivUsuario + " son:");

for (let i = 1; i <= numeroDivUsuario; i++) {
    if (numeroDivUsuario % i === 0) {
        console.log(i);
    }

}


//Ejercicio 6.- Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array.

let estadosMexico = ["Merida", "Chiapas", "Oaxaca", "CDMX", "Puebla", "Colima", "Jalisco", "Nayarit", "Sonora", "Sinaloa" ]
console.log(estadosMexico);


//Ejercicio 7.- Dado un array de 10 numeros, realizar un programa que muestre por consola el doble de cada uno de los elementos.

let numerosArreglo = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

numerosArreglo.forEach(function(numerosArreglo) {console.log(numerosArreglo * 2);

})


//Ejercicio 8.- Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentacion por cada elemento del array.

let familia = [
    {
        nombre: "James",
        apellido: "Potter",
        parentesco: "padre",
        vivo: (false)
    },
    {
        nombre: "Lily",
        apellido: "Evans",
        parentesco: "madre",
        vivo: (false)
    },
    {
        nombre: "Harry",
        apellido: "Potter",
        parentesco: "hijo",
        vivo: (true)
    },
    {
        nombre: "Sirius",
        apellido: "Black",
        parentesco: "padrino",
        vivo: (false)
    },
    {
        nombre: "Lord",
        apellido: "Voldemort",
        parentesco: "tio",
        vivo: (false)
    }
]
for (let i = 0; i < familia.length; i++) {
    console.log("Mi nombre es " + familia[i].nombre + " " + familia[i].apellido + " soy " + familia[i].parentesco + " y aun vivo " + familia[i].vivo)
}


//Ejercicio 9.- Dado un array de 10 numeros, realizar un programa que recorra el array y solo muestre los numeros impares.

let secuencia = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] % 2 !== 0) {
        console.log(secuencia[i]);
    }
}


//Ejercicio 10.- Realizar un programa que permita la entrada de numeros y calcule la suma de losnumeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0.

let Pares = 0;
let Impares = 0;
let numeroElegido;

while (true) {
    numeroElegido = parseInt(prompt("Ingresa un número (0 para terminar):"), 10);
    
    if (numeroElegido === 0) {
        break;
    }

    if (isNaN(numeroElegido)) {
        alert("Por favor, ingresa un número válido.");
        continue;
    }

    if (numeroElegido % 2 === 0) {
        Pares += numeroElegido;
    } else {
        Impares += numeroElegido;
    }
}

console.log("Suma de números pares: " + Pares);
console.log("Suma de números impares: " + Impares);


//Ejercicio 11.- Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas grande.

let arreglo1 = [46, 78, 65, 223, 14, 56, 67, 90, 100, 38]
console.log(arreglo1);
let mayor = arreglo1[0]

for (let i = 1; i < arreglo1.length; i++) {
    if (arreglo1[i] > mayor) {
        mayor = arreglo1[i]  
    }
}
console.log(alert("El numero mayor es " + mayor));


// //Ejercicio 12.- Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas chico.

let arreglo2 = [46, 78, 65, 223, 14, 56, 67, 90, 100, 38]
console.log(arreglo2);
let menor = arreglo2[0]

for (let i = 1; i < arreglo1.length; i++) {
    if (arreglo2[i] < menor) {
        menor = arreglo2[i]  
    }
}
console.log(alert("El numero menor es " + menor));


//Ejercicio 13.- Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje con el nombre de la persona ganadora.

let jugador1 = prompt("Ingresa tu nombre: (Jugador 1)")
let jugador2 = prompt("Ingresa tu nombre: (Jugador 2)")


let ganador = false

while (ganador == false) {
juego1 = parseInt(prompt("Elige tu opción (1-piedra , 2-papel , 3-tijeras"))
juego2 = parseInt(prompt("Elige tu opción (1-piedra , 2-papel , 3-tijeras"))   

if (juego1 == 1 && juego2 == 3 || juego1 == 2 && juego2 == 1 || juego1 == 3 && juego2 == 2){
    ganador = true 
console.log("El ganador es: " + jugador1);
} else if (juego2 == 1 && juego1 == 3 || juego2 == 2 && juego1 == 1 || juego2 == 3 && juego1 == 2) {
    ganador = true
console.log("El ganador es: " + jugador2);
} else {
    console.log("Empate");
}
}


//Ejercicio 14.- Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

let asterisco = "* "

for (let i = 1; i <= 5; i++) {
    console.log(asterisco);
    asterisco = asterisco + "* "
    
}


//Ejercicio 15.- Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado pero invertido.

let asterisco2 = "* * * * *"

for (let i = 5; i >= 1; i--) {
    console.log(asterisco2);
    asterisco2 = asterisco2.substring(0, asterisco2.length -2)
}