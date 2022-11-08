import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../servicos/projeto.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 project = require("db.json") ;


  constructor(private projetoService: ProjetoService) { }

  ngOnInit(): void {
  }

todosDaApi(){
this.projetoService.obterTodos()
.then(projetos => console.log(projetos))
.catch(error => console.log(error));
}

soPorId(){
this.projetoService.obterPorId(2)
.then(projetos => console.log(projetos))
.catch(error => console.log(error))
}
}
