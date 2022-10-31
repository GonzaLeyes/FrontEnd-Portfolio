export class Proyecto{
    id?: number;
    nombreP: string;
    descripcionP: string;
    enlaceP: string;

    constructor(nombreP: string, descripcionP: string, enlaceP: string){
        this.nombreP=nombreP;
        this.descripcionP=descripcionP;
        this.enlaceP=enlaceP;
    }


}