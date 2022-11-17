import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  project = require("db.json")

  constructor(private httpClient: HttpClient) { }

  obterTodos() {
    return new Promise((resolve, reject) => {

      if (!this.project) {
        reject("Não teve")
      } else {
        resolve(this.project)
      }
    })
  }


}
