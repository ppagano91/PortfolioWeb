export class ExperienciaLaboral {
    id?:Number;
    nombre: String;
    descripcion: String;
    fechaInicio: Date;
    fechaFin: Date;
    esTrabajoActual: Boolean;
    tipoEmpleo: String;

    constructor(nombre: String,descripcion: String, fechaInicio: Date, fechaFin: Date, esTrabajoActual: Boolean, tipoEmpleo: String){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;
        this.esTrabajoActual=esTrabajoActual;
        this.tipoEmpleo=tipoEmpleo;
    }
}
