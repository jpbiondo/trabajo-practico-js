const libro = {
    titulo: "Don Quijote",
    autor: "Miguel de Cervantes",
    anio: 1605,
    esAntiguo: function() {
        return (new Date().getFullYear() - this.anio) > 10;
    }
}

console.log(`El libro "${libro.titulo}" es antiguo: ${libro.esAntiguo()}`);