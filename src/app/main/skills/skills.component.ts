import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/model/tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia/tecnologia.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public tecnologias:Tecnologia[]=[];  
  /*
  Debería hacer 3 llamadas a la api o funciones, para separar las habilidades en Softwares, Lenguajes y otras habilidades
  No funciona el ng-circle-progress
  */
  constructor(private tecnologiaService: TecnologiaService) { }

  ngOnInit(): void {
    // this.obtenerTodaTecnologias();
    this.getSkills();
  }

  obtenerTodaTecnologias():void{
    this.tecnologiaService.getTecnologias().subscribe(data=>{

      // console.log("data\n",typeof(data[0].nivel))
      this.tecnologias=data;
    })
  }

  getSkills():void{
    this.tecnologiaService.listSkill().subscribe(
      data=>{        
        this.tecnologias=data;
      }
    )
  }

  onRemove(id?:number){
    if(id!=undefined){
      this.tecnologiaService.deleteSkill(id).subscribe(
        data=>{          
          this.getSkills();          
        }, err=>{
          alert("No se pudo borrar la Tecnología")
        }

      )
    }
  }

}
