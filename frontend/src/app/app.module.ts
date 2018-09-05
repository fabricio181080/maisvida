import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './documento/consulta/consulta-documento.component';
import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
import { CadastroEstadoComponent } from './estado/cadastro/cadastro-estado.component';
import { CadastroDocumentoComponent } from './documento/cadastro/cadastro-documento.component';

import { ConfigService } from './services/config.service';
import { PessoaService } from './services/pessoa.service';
import { EstadoService } from './services/estado.service';
import { DocumentoService } from './services/documento.service';

const appRoutes: Routes = [
  { path: 'home',                       component: HomeComponent },
  { path: '',                           component: HomeComponent },
  { path: 'consulta-documento',            component: ConsultaComponent },
  { path: 'cadastro-documento',         component: CadastroDocumentoComponent },
  { path: 'cadastro-documento/:codigo', component: CadastroDocumentoComponent },
  { path: 'cadastro-pessoa',            component: CadastroComponent },
  { path: 'cadastro-pessoa/:codigo',    component: CadastroComponent },
  { path: 'cadastro-estado/:codigo',    component: CadastroEstadoComponent },
  { path: 'cadastro-estado',            component: CadastroEstadoComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroDocumentoComponent,
    CadastroComponent,
    CadastroEstadoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ConfigService, EstadoService, PessoaService, DocumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
