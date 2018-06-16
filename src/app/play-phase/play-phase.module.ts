import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayInputComponent } from './components/play-input/play-input.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FormsModule } from '@angular/forms';
import { PlayOutputService } from './services/play-output.service';

@NgModule({
  imports: [
    CommonModule,
    KeyFilterModule,
    FormsModule
  ],
  declarations: [PlayInputComponent],
  providers: [PlayOutputService],
  exports: [PlayInputComponent]
})
export class PlayPhaseModule { }
