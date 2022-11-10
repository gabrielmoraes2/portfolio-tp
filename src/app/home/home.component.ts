import { Component, OnInit } from '@angular/core';
import { IProjeto } from '../interface/iProjetos';
import { ProjetoService } from '../servicos/projeto.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects = require("db.json");

  project!: IProjeto[]


  constructor(private projetoService: ProjetoService) { }

  ngOnInit(): void {
    this.project = this.projects.projetos
  }
}
