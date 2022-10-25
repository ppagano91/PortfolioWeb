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
  public isLogged: boolean=false
  modalAddProjectSwitch: boolean;
  modalEditProjectSwitch: boolean;
  public id:number=null;
  


  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    // this.getTodoProyectos();
    this.getProyectos();
    this.isLogged=(localStorage.getItem("isLogged")=="true")
    this.proyectoService.$modalAddProject.subscribe(
      (data) => (this.modalAddProjectSwitch = data)
    );

    this.proyectoService.$modalEditProject.subscribe(
      (data) => (this.modalEditProjectSwitch = data)
    );
  }

  openAddProjectModal() {
    this.modalAddProjectSwitch = true;
  }

  openEditProjectModal(id:number) {
    this.id=id;    
    this.modalEditProjectSwitch = true;
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
