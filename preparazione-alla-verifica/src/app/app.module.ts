import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { MacchinmaXdXdXdXdXdComponent } from './macchinma-xd-xd-xd-xd-xd/macchinma-xd-xd-xd-xd-xd.component';
import { MacchinaComponent } from './macchina/macchina.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MacchinmaXdXdXdXdXdComponent,
    MacchinaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
