export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    sobreMi: String;    
    email:String;
    telefono: String;
    residencia:String;
    fechaNacimiento: Date;
    foto: String;

    constructor(nombre: String, apellido: String, email:String, sobreMi: String, dni: String, telefono: String, residencia:String, fechaNacimiento: Date, foto: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.residencia = residencia;
        this.email = email;        
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.sobreMi = sobreMi;
        this.foto = foto;
    }

}
