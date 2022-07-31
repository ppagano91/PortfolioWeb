import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';

const routes: Routes=[
  {path:"portfolio", component: PortfolioComponent},
  {path:"login", component: LoginComponent},
  {path:"", redirectTo:"login", pathMatch:"full"}
];
@NgModule({
    declarations:[],
    imports:[CoreModule, MainModule, RouterModule.forRoot(routes)],    
    exports:[RouterModule],
})
export class AppRoutingModule {}
