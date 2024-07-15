
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keyup', (e) => {
        let peso = parseFloat(document.getElementById('pesomx').value) || 0;
        let dolar = parseFloat(document.getElementById('dolar').value) || 0;
        let tasa = 17.62;

        let conversion = (peso, dolar, tasa) => {
            let conversionDolar = dolar * tasa;
            let conversionPeso = peso / tasa;

            return { conversionDolar, conversionPeso };
        }

        let resultado = conversion(peso, dolar, tasa);

        if (e.target.id === 'dolar') {
            document.getElementById('pesomx').value = resultado.conversionDolar.toFixed(2);
        } else if (e.target.id === 'pesomx') {
            document.getElementById('dolar').value = resultado.conversionPeso.toFixed(2);
        }
    });
});
