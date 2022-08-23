import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnologia } from 'src/app/model/tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia/tecnologia.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  public formData: Tecnologia={
    nombre:"",
    descripcion:"",
    url:"",
    foto:"",
    nivel:0,
    tipo:"",

  }

  constructor(
    private tecnologiaService: TecnologiaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.tecnologiaService.detailSkill(id).subscribe(
      data=>{
        this.formData=data;
      }, error=>{
        alert("Error al modificar Tecnología en ngOnInit")
        this.router.navigate(['']);
      }
    )
  }
  onUpdate():void{
    const id=this.activatedRoute.snapshot.params['id'];
    this.tecnologiaService.updateSkill(id,this.formData).subscribe(
      data=>{
        this.router.navigate(['']);
      }, error=>{
        alert("Error al modificar proyecto en onUpdate");
        this.router.navigate(['']);
      }
    )
  }

}
