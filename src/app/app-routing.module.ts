import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicPlayerComponent } from './music-player/music-player.component';
import {PlayerComponent} from './music-player/player/player.component';

const routes: Routes = [
  { path: 'music-player', component: MusicPlayerComponent,  data: { animation: 'HomePage'}},
  { path: 'watch/:videoId', component: PlayerComponent, data: { animation: 'PlayerPage'} },

  // otherwise redirect to Music Player
  { path: "**", redirectTo: "/music-player", pathMatch: "full" }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
