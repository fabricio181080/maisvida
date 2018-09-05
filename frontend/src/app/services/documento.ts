import { Pessoa } from "./pessoa";

export class Documento {
 
    codigo:number;
    pessoa:Pessoa;
    tipo:string;
    numero:string;
  
    constructor(){
        this.pessoa = new Pessoa();
    }
}