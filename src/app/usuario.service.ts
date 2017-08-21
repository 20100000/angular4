import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  getUsuarios() {
      return this.http.get('./assets/json/usuario.json')
        .toPromise()
        .then(response => response.json().usuarios as usuarios)
        .catch();
  }

  getTarefas() {
      return this.http.get('./assets/json/tarefa.json')
        .toPromise()
        .then(response => response.json().tarefas as tarefas)
        .catch();
  }

}
