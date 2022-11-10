import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { IProjeto } from '../interface/iProjetos';

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
