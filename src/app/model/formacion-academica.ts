export class FormacionAcademica {
    id?: number;
    titulo: string;
    descripcion: string;
    institucion: string;
    fechaInicio: Date;
    fechaFin: Date;
    estado: string;
    link: string;
    image: string;

    constructor(titulo:string, descripcion: string, institucion: string, fechaInicio: Date, fechaFin: Date, estado: string, link: string, image: string){
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.institucion=institucion;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;
        this.estado=estado;
        this.link=link;
        this.image=image;

    }



}
