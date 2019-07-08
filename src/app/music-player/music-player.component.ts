import {Component, OnInit} from '@angular/core';
import {MusicPlayerService} from './music-player.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-music-player',
    templateUrl: './music-player.component.html',
    styleUrls: ['./music-player.component.sass'],
    animations: [
        trigger('opacity', [
            transition(':enter', [
                style({opacity: 0}),
                animate('.8s', style({opacity: 1})),
            ]),
            transition(':leave', [
                style({opacity: 1}),
                animate('.8s', style({opacity: 0})),
            ]),
        ]),
    ]
})
export class MusicPlayerComponent implements OnInit {

    public videos: any[];
    private unsubscribe$: Subject<any> = new Subject();

    constructor(
        private _musicPlayerService: MusicPlayerService
    ) {
    }

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
