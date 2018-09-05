import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import { map } from "rxjs/operators";
 
import {Documento} from './documento';
import {ConfigService} from './config.service';
 
@Injectable()
export class DocumentoService {
 
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;
 
    constructor(private http: Http,
                private configService: ConfigService) { 
 
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/documento/';
 
        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers });
    }
 
    /**CONSULTA TODOS OS DOCUMENTOS CADASTRADAS */
    getDocumentos(){        
        return this.http.get(this.baseUrlService).pipe(map(res => res.json()));
    }
 
    /**ADICIONA UM NOVO DOCUMENTO */
    addDocumento(documento: Documento){
 
        return this.http.post(this.baseUrlService, JSON.stringify(documento),this.options)
        .pipe(map(res => res.json()));
    }
    /**EXCLUI UM DOCUMENTO */
    excluirDocumento(codigo:number){
 
        return this.http.delete(this.baseUrlService + codigo).pipe(map(res => res.json()));
    }
 
    /**CONSULTA UM DOCUMENTO PELO CÓDIGO */
    getDocumento(codigo:number){
 
        return this.http.get(this.baseUrlService + codigo).pipe(map(res => res.json()));
    }
 
    /**ATUALIZA INFORMAÇÕES DO DOCUMENTO */
    atualizarDocumento(documento:Documento){
 
        return this.http.put(this.baseUrlService, JSON.stringify(documento),this.options)
        .pipe(map(res => res.json()));
    }
 
}