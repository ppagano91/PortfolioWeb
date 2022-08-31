import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { JobComponent } from './job/job.component';
import { NewJobComponent } from './job/new-job/new-job.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditJobComponent } from './job/edit-job/edit-job.component';
import { NewEducationComponent } from './education/new-education/new-education.component';
import { EditEducationComponent } from './education/edit-education/edit-education.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { NewSkillComponent } from './skills/new-skill/new-skill.component';
import { EditSkillComponent } from './skills/edit-skill/edit-skill.component';
import { EditAboutComponent } from './about/edit-about/edit-about.component';

@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    EducationComponent,
    JobComponent,
    NewJobComponent,
    EditJobComponent,
    NewEducationComponent,
    EditEducationComponent,
    NewProjectComponent,
    EditProjectComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditAboutComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, NgCircleProgressModule.forRoot({
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
    JobComponent,
    NewJobComponent,
    
  ],
})
export class MainModule {}
