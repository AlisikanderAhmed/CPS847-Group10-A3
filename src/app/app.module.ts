import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatePipeComponent } from './components/date-pipe/date-pipe.component';
import { OurHttpService } from './our-http.service';

@NgModule({
  declarations: [
    AppComponent,
    DatePipeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [OurHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
