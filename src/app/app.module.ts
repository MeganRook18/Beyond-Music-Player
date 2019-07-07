import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './music-player/player/player.component';
import { HeaderComponent } from './music-player/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicPlayerComponent,
    PlayerComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
