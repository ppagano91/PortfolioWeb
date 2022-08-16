import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public proyectos:Proyecto[]=[]
  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.getTodoProyectos();
  }

  getTodoProyectos():void{
    this.proyectoService.getProyectos().subscribe(data=>{
      data.forEach(element=>{
        element.fecha=new Date(element.fecha);
      })
      this.proyectos=data;
    })
  }

}
