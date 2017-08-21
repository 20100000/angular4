/**
 * Created by tiago on 20/08/2017.
 */
import { Component ,OnInit} from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.usuario.html',
  styleUrls: ['./app.component.css']
})
export class Usuario implements OnInit{
   constructor(private  usuarioService:UsuarioService){}

   titulo = "Usuários";
   usuarios = [];
   tarefas = [];

   tarefasUser(id){
       var n = 0;

       let array = this.tarefas;
       array.forEach(function (value) {
           if (id === value.idUsuario ) {
                n++;
           }
       });

       return n;
   }

    onDelete(item) {
      if (confirm("Tem certeza?")) {
        this.usuarios = this.usuarios.filter(use => use.id !== item.id);
      }
    }

    modell ={name : ""};
    openModel(model){
      this.modell = model || {name : ""} ;
      console.log(this.modell);
    }

    newUser(){
      this.tarefas.push(this.modell);
      console.log(this.tarefas);
      this.modell ={name : ""};
    }

    obterUsuario():any{
      this.usuarioService.getUsuarios()
        .then((usuarios:usuarios)=>{ this.usuarios =usuarios;})
        .catch();
    }
    obterTarefa():any{
      this.usuarioService.getTarefas()
        .then((tarefas:tarefas)=>{ this.tarefas =tarefas;})
        .catch();
    }

    ngOnInit(){
        this.obterTarefa();
        this.obterUsuario();

    }
}
