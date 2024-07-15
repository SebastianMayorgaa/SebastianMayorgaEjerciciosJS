document.getElementById('boton').addEventListener("click", () =>{
let peso = parseFloat(document.getElementById('peso').value);
let altura = parseFloat(document.getElementById('altura').value) /100;

let calculadora = (peso, altura) => {
    let calculo = peso / (altura * altura);
    let rango;

    if (calculo < 18.5) {
        rango = 'Bajo peso';
    } else if (calculo >= 18.5 && calculo <= 24.9) {
        rango = 'Normal';
    } else if (calculo >= 25 && calculo <= 29.9) {
        rango = 'Sobrepeso';
    } else {
        rango = 'Obesidad';
    }

    return { calculo: calculo, rango: rango };
}

let resultado = calculadora(peso, altura);
document.getElementById("resultado").value = "IMC: " + resultado.calculo.toFixed(2) + " - " + resultado.rango;
});