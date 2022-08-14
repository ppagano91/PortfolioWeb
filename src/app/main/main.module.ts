import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    EducationComponent,
  ],
  imports: [CommonModule, NgCircleProgressModule.forRoot({
    radius: 100,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: '#78C000',
    innerStrokeColor: '#C7E596',
    animationDuration: 300,
  }),],
  exports: [
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    EducationComponent,    
  ],
})
export class MainModule {}
