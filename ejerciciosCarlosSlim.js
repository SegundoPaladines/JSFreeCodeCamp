const persona = {
    nombre: "Segundo",
    decirNombre: function (){
        console.log(this.nombre)
    },
    cambiarNombre(nombre){
        this.nombre = nombre;
    }
}

persona.decirNombre();
persona.cambiarNombre("Santander");
persona.decirNombre();

const dentroFn = function ingreso(fn){
    fn("Envio funciones");
}

dentroFn(mensaje = function(msg){console.log(msg)});

    