export class ExperienciaLaboral {
    id?:number;
    nombre: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin: Date;
    esTrabajoActual: boolean;
    tipoEmpleo: string;
    empresa:string;
    tipoJornada:string;

    constructor(nombre: string,descripcion: string, fechaInicio: Date, fechaFin: Date, esTrabajoActual: boolean, tipoEmpleo: string, empresa:string,tipoJornada:string){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;
        this.esTrabajoActual=esTrabajoActual;
        this.tipoEmpleo=tipoEmpleo;
        this.empresa=empresa;
        this.tipoJornada=tipoJornada;
    }
}
