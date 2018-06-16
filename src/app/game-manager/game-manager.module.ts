import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameManagerComponent } from './components/game-manager/game-manager.component';
import { PrepPhaseModule } from '../prep-phase/prep-phase.module';
import { CardModule } from 'primeng/card';
import { PlayPhaseModule } from '../play-phase/play-phase.module';
import { GameMessagesService } from './services/game-messages.service';
import { DonePhaseModule } from '../done-phase/done-phase.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PrepPhaseModule,
    PlayPhaseModule,
    DonePhaseModule
  ],
  declarations: [GameManagerComponent],
  providers: [GameMessagesService],
  exports: [GameManagerComponent]
})
export class GameManagerModule { }
