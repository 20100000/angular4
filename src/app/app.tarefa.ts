/**
 * Created by tiago on 20/08/2017.
 */
import {Component, OnInit} from '@angular/core';
import { TarefaService } from './tarefa.service';
import {copyObj} from "@angular/animations/browser/src/util";


@Component({
  selector: 'app-root',
  templateUrl: './app.tarefa.html',
  styleUrls: ['./app.component.css']
})

export class Tarefa implements OnInit{
  constructor(private  tarefaService:TarefaService){}

   titulo = "Tarefas";
   tarefas  = [];
   status   = [];
   usuarios = [];

    obterTarefa():void{
      this.tarefaService.getTarefas()
        .then((tarefas:tarefas)=>{ this.tarefas = tarefas; })
        .catch((data) => {console.log(data)});

    }

    obterUsuario():void{
      this.tarefaService.getUsuarios()
        .then((usuarios:usuarios)=>{ this.usuarios = usuarios; })
        .catch((data) => {console.log(data)});
    }

    obterStatus():any{
      this.tarefaService.getStatus()
        .then((status:status)=>{ this.status = status; })
        .catch((data) => {console.log(data)});
    }

    onDelete(item) {
      if (confirm("Tem certeza?")) {
          this.tarefas = this.tarefas.filter(taf => taf.id !== item.id);
      }
    }

    statusName(id){
        var n = "";
        let array = this.status;
        array.forEach(function (value) {
          if (id === value.id ) {
            n = value.name;
          }
        });

        return n;
    }

    userName(id){
          var n = "";
          let array = this.usuarios;
          array.forEach(function (value) {
            if (id === value.id ) {
              n = value.name;
            }
          });

          return n;
    }

    modell ={name : "", atividade:[],ussuario:{}, idUsuario:"", status:""};
    openModel(model){
      this.modell = model || {name : "", atividade:[],ussuario:{}, idUsuario:"", status:""} ;
      console.log(this.modell);
    }

    atividade = "";
    addAtividade(){
        this.modell.atividade.push({at:this.atividade});
        this.atividade = "";

    }

    newTarefa(){
      this.tarefas.push(this.modell);
      console.log(this.tarefas);
      this.modell ={name : "", atividade:[], idUsuario:"", status:""};
    }

    ngOnInit(){
      this.obterUsuario();
      this.obterStatus();
      this.obterTarefa();
    }
}
