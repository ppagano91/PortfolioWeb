import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormacionAcademica } from 'src/app/model/formacion-academica';
import { FormacionAcademicaService } from 'src/app/services/formacion_academica/formacion-academica.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  @Input() id: number;
  public formData:FormacionAcademica={
    titulo:'',
    descripcion:'',
    institucion:'',
    fechaInicio:null,
    fechaFin:null,
    estado:'',
    link:'',
    image:'',
  }

  constructor(
    private educacionService: FormacionAcademicaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,    
    ) { }

  ngOnInit(): void {
    // const id = this.activatedRouter.snapshot.params['id'];
    const id = this.id;
    this.educacionService.detailEducation(id).subscribe(
      data=>{
        this.formData=data;
        console.log(this.formData.estado);
        console.log(typeof(this.formData.estado));
        

      },error=>{
        alert("Error al modificar educacion en ngOnInit");
        this.router.navigate(['']);
      }
    )
  }

  // ngOnChanges(changes: SimpleChanges):void{
  //   const id = this.activatedRouter.snapshot.params['id'];
  //   this.educacionService.detailEducation(id).subscribe(
  //     data=>{
  //       this.formData=data;
  //       console.log(this.formData.estado);
  //       console.log(typeof(this.formData.estado));
        

  //     },error=>{
  //       alert("Error al modificar educacion en ngOnInit");
  //       this.router.navigate(['']);
  //     }
  //   )
  // }

  onUpdate():void{
    // const id = this.activatedRouter.snapshot.params['id'];
    const id = this.id;
    if(this.formData.estado=="En curso"){
      this.formData.fechaFin=null;
    }
    this.educacionService.updateEducation(id, this.formData).subscribe(
      data=>{        
        window.location.reload();
      }, error=>{
        alert("Error al modificar educación en onUpdate");
        // console.log("error\n",error)
        this.router.navigate(['']);

      }
    )
  }
  closeModal(){
    this.educacionService.$modalEditEducation.emit(false);
  }

}
