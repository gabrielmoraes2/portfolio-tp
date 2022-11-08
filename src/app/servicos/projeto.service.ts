import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { IProjeto } from '../interface/iProjetos';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

constructor(private httpClient: HttpClient) { }

obterTodos(){
return this.httpClient.get<IProjeto[]>(`${API_PATH}Projetos`).toPromise();
}

obterPorId(id: number){
return this.httpClient.get<IProjeto>(`${API_PATH}Projetos/${id}`).toPromise()
}

}
