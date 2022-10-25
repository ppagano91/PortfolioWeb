import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public formData:Persona={
    id:null,
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
  public isLogged: boolean=false
  modalEditAboutSwitch: boolean;
  constructor(private personaService: PersonaService) {

  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{
      // console.log("data\n",data);
      // console.log("formData\n",this.formData);
      return this.formData=data});
    this.isLogged=(localStorage.getItem("isLogged")=="true")

    this.personaService.$modalEditAbout.subscribe(
      (data) => (this.modalEditAboutSwitch = data)
    );
  }

  openEditAboutModal() {
    this.modalEditAboutSwitch = true;
  }
}
