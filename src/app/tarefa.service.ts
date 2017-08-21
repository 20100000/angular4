import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TarefaService {

  constructor(private http: Http) { }

      getTarefas() {

          return this.http.get('./assets/json/tarefa.json')
            .toPromise()
            .then(
                response => response.json().tarefas as tarefas
            )
            .catch();

      }

      getStatus() {
        let promise = this.http.get('./assets/json/status.json')
            .toPromise()
            .then(
                response => response.json().status as status)
            .catch();
        return promise;
      }

      getUsuarios() {
          return this.http.get('./assets/json/usuario.json')
            .toPromise()
            .then(
              response => response.json().usuarios as usuarios
            )
            .catch();
      }

}
