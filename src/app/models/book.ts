export class Book {
    id_book:number;
    id_user:number;
    title:string;
    type:string;
    author:string;
    price:number;
    photo:string;
    constructor(titulo:string,tipo:string,autor:string,price:number,phot:string,id:number=0,id_u:number=0){
        this.id_book=id;
        this.id_user=id_u;
        this.title=titulo;
        this.type=tipo;
        this.author=autor;
        this.price=price;
        this.photo=phot;

    }
}
