let notas = [];
let idGlobal = 0;

function pintarTarjetas(notas) {
    let tarjetas = document.getElementById('card-container');
    tarjetas.innerHTML = '';

    if (notas.length === 0) {
        tarjetas.innerHTML = "NO HAY NOTAS PARA MOSTRAR"
        return
    }

    notas.forEach(nota => {
        let tarjeta = document.createElement('div')
        tarjeta.className = "card"
        tarjeta.innerHTML = `
        <div class="card-body">
        <input class="form-check-input" type="checkbox" onclick="marcarRealizada(${nota.id})"  ${nota.realizada ? "checked" : ""} value="" id="checkNota">
        <h5 id="titulo" class="card-title">${nota.titulo}</h5>
        <p id="texto" class="card-text">${nota.texto}</p>
        <br>
        <button id="borrarNota" type="button" class="btn btn-outline-danger" onclick="borrarNota(${nota.id})">Borrar nota</button>
        </div>
        `
        tarjetas.appendChild(tarjeta)
    });
}

document.getElementById('borrar').addEventListener('click', () => {
    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';
});
document.getElementById('guardar').addEventListener('click', () => {
    let titulo = document.getElementById('titulo').value
    let texto = document.getElementById('texto').value
    if (titulo && texto) {
        agregarNota(titulo, texto)
        pintarTarjetas(notas)
        document.getElementById('titulo').value
        document.getElementById('texto').value
    }
})
function agregarNota(titulo, texto) {
    idGlobal++;
    let nuevaNota = {
        id: idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    };
    notas.push(nuevaNota);
}

function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarTarjetas(notas);
}



function marcarRealizada(id) {
    let nota = notas.find(nota => nota.id === id)
    if (nota) {
        nota.realizada = !nota.realizada
        pintarTarjetas(notas)
    }
}
function filtroTexto(nota, buscarTexto, notaRealizada) {
    return notas.filter(nota => {
        let hayTitulo = nota.titulo.includes(buscarTexto);
        let hayTexto = nota.texto.includes(buscarTexto);
        let esRealizada = nota.realizada === notaRealizada;

        return (hayTitulo || hayTexto) && esRealizada;
    });
}

function filtros() {
    let buscarTexto = document.getElementById('buscar').value;
    let notaRealizada = document.getElementById('notaRealizada').checked;

    let notasFiltradas = filtroTexto(notas, buscarTexto, notaRealizada);
    pintarTarjetas(notasFiltradas);
}


document.getElementById('buscar').addEventListener('keyup', filtros)
document.getElementById('notaRealizada').addEventListener('click', filtros)
pintarTarjetas(notas);











