import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrepInputComponent } from './prep-input/prep-input.component';

import { KeyFilterModule } from 'primeng/keyfilter';
import { PrepServiceService } from './prep-service/prep-service.service';
import { PrepOutputComponentComponent } from './prep-output-component/prep-output-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PrepInputComponent,
    PrepOutputComponentComponent
  ],
  imports: [
    BrowserModule,
    KeyFilterModule
  ],
  providers: [PrepServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
