import {Component, OnInit} from '@angular/core';
import {MusicPlayerService} from './music-player.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.sass']
})
export class MusicPlayerComponent implements OnInit {

  public videos: any[];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(
    private _musicPlayerService: MusicPlayerService
  ) {}

  ngOnInit() {
    this.videos = [];

    this._musicPlayerService.getVideosForChannel().pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista['items']) {
          this.videos.push(element);
        }
      });

  }
}
