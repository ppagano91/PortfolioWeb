import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public formData: Proyecto={
    titulo: '',
    descripcion: '',    
    fecha: new Date("YYYY-MM-DD"),
    foto:'',    
    url: '',
  }

  constructor(
    private proyectoService:ProyectoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const nuevoProyecto = this.formData;
    this.proyectoService.saveProject(nuevoProyecto).subscribe(
      data=>{
        alert("Proyecto añadido")
        window.location.reload();
      },
      error=>{
        alert("Ha ocurrido un error");
        this.router.navigate([''])
      }

    );
  }
  closeAddProjectModal(){
    this.proyectoService.$modalAddProject.emit(false);
  }

}
