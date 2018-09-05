import { Component, OnInit } from '@angular/core';
 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
 
import { DocumentoService } from '../../services/documento.service';
 
import { Documento } from '../../services/documento';
 
import { Response } from '../../services/response';
import { Pessoa } from '../../services/pessoa';
import { PessoaService } from '../../services/pessoa.service';
 
@Component({
    selector: 'app-cadastro-documento',
    templateUrl: './cadastro-documento.component.html',
    styleUrls:["./cadastro-documento.component.css"]
  })
  export class CadastroDocumentoComponent implements OnInit {
 
    private titulo:string;
    private documento:Documento = new Documento();
    private pessoas: Pessoa[] = new Array();
 
    constructor(private pessoaService: PessoaService,
                private documentoService: DocumentoService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}
 
    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {

      this.pessoaService.getPessoas().subscribe(res => this.pessoas = res);
 
      this.activatedRoute.params.subscribe(parametro=>{
 
        if(parametro["codigo"] == undefined){
 
          this.titulo = "Novo Cadastro de Documento";
        }
        else{
 
          this.titulo = "Editar Cadastro de Documento";
          this.documentoService.getDocumento(Number(parametro["codigo"])).subscribe(res => this.documento = res);
        }
 
      });      
    }
 
    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    salvar():void {
 
      /*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
      if(this.documento.codigo == undefined){
 
        /*CHAMA O SERVIÇO PARA ADICIONAR UM NOVO DOCUMENTO */
        this.documentoService.addDocumento(this.documento).subscribe(response => {
 
           //PEGA O RESPONSE DO RETORNO DO SERVIÇO
           let res:Response = <Response>response;
 
           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           if(res.codigo == 1){
            alert(res.mensagem);
            this.documento = new Documento();
           }
           else{
             /*
             ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
             NO SERVIDOR (CODIGO = 0)*/
             alert(res.mensagem);
           }
         },
         (erro) => {   
           /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
             EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
            alert(erro);
         });
 
      }
      else{
 
        /*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
        this.documentoService.atualizarDocumento(this.documento).subscribe(response => {
 
        //PEGA O RESPONSE DO RETORNO DO SERVIÇO
        let res:Response = <Response>response;
 
         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
        if(res.codigo == 1){
          alert(res.mensagem);
          this.router.navigate(['/consulta-documento']);
        }
         else{
          /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
          NO SERVIDOR (CODIGO = 0)*/
           alert(res.mensagem);
         }
       },
       (erro) => {                    
         /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
          EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
          alert(erro);
       });
      }
 
    }
 
  }