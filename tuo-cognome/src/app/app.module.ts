import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { PokemonYComponent } from './pokemon-y/pokemon-y.component';
import { PokemonZComponent } from './pokemon-z/pokemon-z.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    PokemonYComponent,
    PokemonZComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
