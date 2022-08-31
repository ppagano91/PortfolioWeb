import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  @Input() id: number;
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
    // const id = this.activatedRoute.snapshot.params['id'];
    const id =this.id;
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
    // const id=this.activatedRoute.snapshot.params['id'];
    const id =this.id;
    this.proyectoService.updateProject(id,this.formData).subscribe(
      data=>{
        window.location.reload();
      }, error=>{
        alert("Error al modificar proyecto en onUpdate");
        this.router.navigate(['']);
      }
    )
  }
  closeModal(){
    this.proyectoService.$modalEditProject.emit(false);
  }
}
