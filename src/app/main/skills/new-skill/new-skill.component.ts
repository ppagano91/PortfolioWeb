import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from 'src/app/model/tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia/tecnologia.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const nuevaTecnologia=this.formData;
    this.tecnologiaService.saveSkill(nuevaTecnologia).subscribe(
      data => {        
        alert('Tecnología añadida');
        this.router.navigate(['']);
      },
      error => {
        alert('Ha ocurrido un error');
        this.router.navigate(['']);
      }
    )
  }
  closeAddSkillModal(){
    this.tecnologiaService.$modalAddSkill.emit(false);
  }

}
