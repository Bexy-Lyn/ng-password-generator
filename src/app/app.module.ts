import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AutosizeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
