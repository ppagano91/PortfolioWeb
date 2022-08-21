import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { NewJobComponent } from './main/job/new-job/new-job.component';
import { EditJobComponent } from './main/job/edit-job/edit-job.component';

const routes: Routes=[
  {path:"portfolio", component: PortfolioComponent},
  // {path:"login", component: LoginComponent},
  {path:'experiencia/new',component: NewJobComponent},
  {path:'experiencia/edit/:id',component:EditJobComponent},
  {path:"", redirectTo:"portfolio", pathMatch:"full"},
];
@NgModule({
    declarations:[],
    imports:[CoreModule, MainModule, RouterModule.forRoot(routes)],    
    exports:[RouterModule],
})
export class AppRoutingModule {}
