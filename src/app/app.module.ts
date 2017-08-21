import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Usuario } from './app.usuario';
import { Tarefa } from './app.tarefa';
import { AppComponent } from './app.component';

import { UsuarioService } from './usuario.service';
import { TarefaService } from './tarefa.service';

const appRoutes:Routes = [
  {path:'texto',component:AppComponent},
  {path:'usuario',component:Usuario},
  {path:'tarefa',component:Tarefa}
];

@NgModule({
  declarations: [
    AppComponent,
    Usuario,
    Tarefa
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [UsuarioService, TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
