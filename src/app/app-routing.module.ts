import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { NewJobComponent } from './main/job/new-job/new-job.component';
import { EditJobComponent } from './main/job/edit-job/edit-job.component';
import { EditEducationComponent } from './main/education/edit-education/edit-education.component';
import { NewEducationComponent } from './main/education/new-education/new-education.component';
import { EditProjectComponent } from './main/projects/edit-project/edit-project.component';
import { NewProjectComponent } from './main/projects/new-project/new-project.component';
import { NewSkillComponent } from './main/skills/new-skill/new-skill.component';
import { EditSkillComponent } from './main/skills/edit-skill/edit-skill.component';

const routes: Routes=[
  {path:"portfolio", component: PortfolioComponent},
  {path:"login", component: LoginComponent},
  {path:'experiencia/new',component: NewJobComponent},
  {path:'experiencia/edit/:id',component:EditJobComponent},
  {path:'educacion/new',component:NewEducationComponent},
  {path:'educacion/edit/:id',component:EditEducationComponent},
  {path:'proyecto/new',component:NewProjectComponent},
  {path:'proyecto/update/:id',component:EditProjectComponent},
  {path:'tecnologia/new',component:NewSkillComponent},
  {path:'tecnologia/update/:id',component:EditSkillComponent},
  {path:"", redirectTo:"portfolio", pathMatch:"full"},
];
@NgModule({
    declarations:[],
    imports:[CoreModule, MainModule, RouterModule.forRoot(routes)],    
    exports:[RouterModule],
})
export class AppRoutingModule {}
