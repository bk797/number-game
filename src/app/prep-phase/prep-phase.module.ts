import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PrepServiceService } from './services/prep-service/prep-service.service';
import { PrepInputComponent } from './components/prep-input/prep-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    KeyFilterModule,
    FormsModule
  ],
  declarations: [PrepInputComponent],
  providers: [PrepServiceService],
  exports: [PrepInputComponent]
})
export class PrepPhaseModule { }
