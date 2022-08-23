import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  public formData: Proyecto={
    titulo:"",
    descripcion:"",
    fecha:null,
    foto:"",
    url:""
  }

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.detailProject(id).subscribe(
      data=>{
        this.formData=data;
      }, error=>{
        alert("Error al modificar proyecto en ngOnInit")
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id=this.activatedRoute.snapshot.params['id'];
    this.proyectoService.updateProject(id,this.formData).subscribe(
      data=>{
        this.router.navigate(['']);
      }, error=>{
        alert("Error al modificar proyecto en onUpdate");
        this.router.navigate(['']);
      }
    )
  }
}
