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
  public nuevo_proyecto:String="./../../../assets/images/nuevo_proyecto3.jpg"


  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    // this.getTodoProyectos();
    this.getProyectos();
  }

  getTodoProyectos():void{
    this.proyectoService.getProyectos().subscribe(data=>{
      data.forEach(element=>{
        element.fecha=new Date(element.fecha);
      })
      this.proyectos=data;
    })
  }

  getProyectos():void{
    this.proyectoService.getProyectos().subscribe(data=>{
      data.forEach(element=>{
        element.fecha=new Date(element.fecha);
      })
      this.proyectos=data;
    })
  }

  onRemove(id?:number){
    if(id!=undefined){
      this.proyectoService.deleteProject(id).subscribe(
        data=>{          
          this.getProyectos();          
        }, err=>{
          alert("No se pudo borrar el Proyecto")
        }

      )
    }
  }

}
