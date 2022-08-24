import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HeroComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, HeroComponent],
})
export class CoreModule {}
