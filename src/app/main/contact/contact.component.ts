import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  persona: Persona = new Persona(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    new Date('1991-07-10'),
    '',
    '',
    '',
    ''
  );
  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });
  }

  alertMessage() {
    alert(
      'Por el momento esta funcionalidad no está habilitada.\n Te invito a ver mi CV con el link "Descarga mi CV"'
    );
  }
}
