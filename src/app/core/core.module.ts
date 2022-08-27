import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HeroComponent, ModalComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, HeroComponent, ModalComponent],
})
export class CoreModule {}
