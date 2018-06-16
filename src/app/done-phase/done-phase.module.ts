import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ResetService } from './services/reset.service';
import { DoneScreenComponent } from './components/done-screen/done-screen.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [DoneScreenComponent],
  providers: [ResetService],
  exports: [DoneScreenComponent]
})
export class DonePhaseModule { }
