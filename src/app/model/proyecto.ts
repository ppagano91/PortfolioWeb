export class Proyecto {
    id?:Number;
    titulo:String;
    descripcion: String;
    url: String;
    fecha: Date;
    foto:String;

    constructor(titulo:String,descripcion: String, url:String, fecha:Date, foto:String){
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.url=url;
        this.fecha=fecha;
        this.foto=foto;
    }
}

