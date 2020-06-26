import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ComingSoonModule} from 'coming-soon';
import {AppRoutingModule} from './app-routing.module';
import {ComingSoonComponent} from './coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule, ComingSoonModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
