import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import { map } from "rxjs/operators";
 
import {Estado} from './estado';
import {ConfigService} from './config.service';
 
@Injectable()
export class EstadoService {
 
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;
 
    constructor(private http: Http,
                private configService: ConfigService) { 
 
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/estado/';
 
        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers });
    }
 
    /**CONSULTA TODOS OS ESTADOS CADASTRADAS */
    getEstados(){        
        return this.http.get(this.baseUrlService).pipe(map(res => res.json()));
    }
 
    /**ADICIONA UM NOVO ESTADO */
    addEstado(estado: Estado){
 
        return this.http.post(this.baseUrlService, JSON.stringify(estado),this.options)
        .pipe(map(res => res.json()));
    }
    /**EXCLUI UM ESTADO */
    excluirEstado(codigo:number){
 
        return this.http.delete(this.baseUrlService + codigo).pipe(map(res => res.json()));
    }
 
    /**CONSULTA UM ESTADO PELO CÓDIGO */
    getEstado(codigo:number){
 
        return this.http.get(this.baseUrlService + codigo).pipe(map(res => res.json()));
    }
 
    /**ATUALIZA INFORMAÇÕES DO ESTADO */
    atualizarEstado(estado:Estado){
 
        return this.http.put(this.baseUrlService, JSON.stringify(estado),this.options)
        .pipe(map(res => res.json()));
    }
 
}