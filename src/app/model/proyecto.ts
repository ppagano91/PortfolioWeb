export class Proyecto {
    id?:number;
    titulo:string;
    descripcion: string;
    url: string;
    fecha: Date;
    foto:string;

    constructor(titulo:string,descripcion: string, url:string, fecha:Date, foto:string){
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.url=url;
        this.fecha=fecha;
        this.foto=foto;
    }
}

