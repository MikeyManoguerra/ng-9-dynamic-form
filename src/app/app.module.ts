import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFieldHostDirective } from './form-field-host.directive';
import { TheInputComponent } from './inputs/the-input.component';
import { TheSelectComponent } from './inputs/the-select.component';
import { TheTextAreaComponent } from './inputs/the-text-area.component';
import { FormFieldComponent } from './form-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldHostDirective,
    FormFieldComponent,
    TheInputComponent,
    TheSelectComponent,
    TheTextAreaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ //needed until ivy is enabled
    TheTextAreaComponent,
    TheInputComponent,
    TheSelectComponent
  ]
})
export class AppModule { }
