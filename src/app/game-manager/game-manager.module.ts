import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameManagerComponent } from './components/game-manager/game-manager.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { TwoInputsComponent } from './components/two-inputs/two-inputs.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
    KeyFilterModule,
    CardModule,
    FormsModule,
    ButtonModule
  ],
  declarations: [GameManagerComponent, TwoInputsComponent],
  exports: [GameManagerComponent]
})
export class GameManagerModule { }
