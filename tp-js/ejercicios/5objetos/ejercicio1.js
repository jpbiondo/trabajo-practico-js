const persona = {
    nombre: "Juan",
    edad: 22,
    ciudad: "Mendoza",

    cambiarCiudad: function(ciudad) {
        this.ciudad = ciudad;
    },

    toString: function() {
        return `Persona: ${this.nombre}, Edad: ${this.edad}, Ciudad: ${this.ciudad}`;
    }
}

console.log(persona.toString());
persona.cambiarCiudad("Godoy Cruz");
console.log(persona.toString());