export class Tecnologia {
    id?:number;
    nombre:String;
    descripcion:String;
    url:String;
    tipo:String;
    nivel:number
    foto:String;

    constructor(nombre:String,descripcion:String, url:String, tipo:String, nivel:number, foto:String){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.url=url;
        this.tipo=tipo;
        this.nivel=nivel;
        this.foto=foto;
    }
}
