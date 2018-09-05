import { Estado } from "./estado";

export class Pessoa {
 
    codigo:number;
    estado:Estado;
    nome:string;	
    
    constructor(){
        this.estado = new Estado();
    }
}