export class FormacionAcademica {
    id?: Number;
    titulo: String;
    descripcion: String;
    fechaInicio: Date;
    fechaFin: Date;
    estado: String;
    link: String;
    image: String;

    constructor(titulo:String, descripcion: String, fechaInicio: Date, fechaFin: Date, estado: String, link: String, image: String){
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;
        this.estado=estado;
        this.link=link;
        this.image=image;

    }



}
