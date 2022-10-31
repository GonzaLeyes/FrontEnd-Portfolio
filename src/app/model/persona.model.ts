export class persona{
    //con el ? le indicamos que la variable no es necesaria
    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    descripcion: string;
    img: string;


    constructor(nombre: string, apellido: string, titulo:string, descripcion: string , img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion=descripcion;
        this.img = img;
    }
}