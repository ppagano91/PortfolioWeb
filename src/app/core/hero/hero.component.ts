import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona/persona.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  persona:Persona = new Persona("","","","","","","",new Date("1991-07-10"),"","","","");

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona=data})

  }

}
