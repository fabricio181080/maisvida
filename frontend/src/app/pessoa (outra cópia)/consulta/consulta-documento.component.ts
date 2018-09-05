import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
 
import {DocumentoService} from '../../services/documento.service';
 
import {Documento} from '../../services/documento';
 
import {Response} from '../../services/response';
 
@Component({
    selector: 'app-consulta-documento',
    templateUrl: './consulta-documento.component.html',
    styleUrls:["./consulta-documento.component.css"]
  })
  export class ConsultaComponent implements OnInit {
 
    private documentos: Documento[] = new Array();
    private titulo:string;
 
    constructor(private documentoService: DocumentoService,
                private router: Router){}
 
    ngOnInit() {
 
      /*SETA O TÍTULO */
      this.titulo = "Registros Cadastrados";
 
      /*CHAMA O SERVIÇO E RETORNA TODOS OS DOCUMENTOS CADASTRADAS */
      this.documentoService.getDocumentos().subscribe(res => this.documentos = res);
    }
 
    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA 
     * LINHA DA TABELA*/
    excluir(codigo:number, index:number):void {
 
      if(confirm("Deseja realmente excluir esse registro?")){
 
        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.documentoService.excluirDocumento(codigo).subscribe(response => {
 
              /**PEGA O RESPONSE DO SERVIÇO */
              let res:Response = <Response>response;
 
              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if(res.codigo == 1){
                alert(res.mensagem);
                this.documentos.splice(index,1);
              }
              else{
                /*0 = EXCEPTION GERADA NO SERVIÇO JAVA */
                alert(res.mensagem);
              }
          },
          (erro) => {                    
               /*MOSTRA ERROS NÃO TRATADOS */
               alert(erro);
          });        
      }
 
    }
 
    editar(codigo:number):void{
 
      this.router.navigate(['/cadastro-documento',codigo]);
 
    }
 
  }