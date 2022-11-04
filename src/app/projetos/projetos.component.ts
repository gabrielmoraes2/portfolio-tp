import { Component, OnInit } from '@angular/core';
import { Projetos } from '../shared/material/model/projetos';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor(private projetosService: ProjetosComponent) { }

proj!: Projetos[]

  ngOnInit() {
  }

projetinho(){

}

}
