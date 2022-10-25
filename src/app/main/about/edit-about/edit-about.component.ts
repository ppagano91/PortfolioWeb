import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {  
  @Input() id: number;
  public formData:Persona={
    nombre:'',
    apellido:'',
    residencia:'',
    fechaNacimiento:null,    
    email:'',
    telefono:'',
    sobreMi:'',
    foto:'',
    github:'',
    instagram:'',
    linkedin:'',
    urlCV:'',

  }

  constructor(
    private personaService: PersonaService,
    private router: Router, 
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    // const id = this.activatedRouter.snapshot.params['id'];
    this.id
    console.log("id: ",this.id)
    this.personaService.detailAboutMe(this.id).subscribe(
      data=>{
        this.formData=data;        
      }, error=>{
        // alert("Error al modificar educación en onUpdate");
        // console.log("error\n",error)
        this.router.navigate(['']);

      }
    )
  }
  onUpdate():void{
    // const id = this.activatedRouter.snapshot.params['id'];
    const id = this.id;    
    this.personaService.updateAboutMe(id, this.formData).subscribe(
      data=>{        
        window.location.reload();
      }, error=>{
        alert("Error al modificar 'Sobre Mi' en onUpdate");
        // console.log("error\n",error)
        this.router.navigate(['']);

      }
    )
  }

  closeModal(){
    this.personaService.$modalEditAbout.emit(false);
  }
}
