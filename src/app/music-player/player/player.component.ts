import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {MusicPlayerService} from '../music-player.service';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit, OnDestroy {

  public url = 'https://www.youtube.com/embed/';
  public videos: any[];

  public videoID: string;
  public videoURL: any;
  public videoPublished: any;
  public videoTitle: string;
  public videoDes: string;


  private unsubscribe$: Subject<any> = new Subject();
  private _subscription: Subscription;
  private _musicPlayerServiceSubscription: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private _musicPlayerService: MusicPlayerService,
    private _location: Location,
  ) {
  }

  ngOnInit() {
    this.videos = [];

    this._subscription = this._activatedRoute.paramMap.subscribe(params => {
      this.videoID = params.get('videoId');
      this.videoURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.url + this.videoID);

    });

    this._musicPlayerServiceSubscription = this._musicPlayerService.getVideosForChannel().pipe(takeUntil(this.unsubscribe$))
      .subscribe(list => {
        for (let element of list['items']) {
          this.videos.push(element);
        }
        this._getVideoDetails();
      });

  }

  public backToPreviousPage() {
    this._location.back();
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    if (this._musicPlayerServiceSubscription) {
      this._musicPlayerServiceSubscription.unsubscribe();
    }

  }

  private _getVideoDetails() {
    let video: any;
    for (let i = 0; i < this.videos.length; i++) {
      if (this.videos[i].contentDetails.videoId === this.videoID) {
        video = this.videos[i];
      }
    }

    this.videoDes = video.snippet.description;
    this.videoTitle = video.snippet.title;
    this.videoPublished = video.snippet.publishedAt;

  }

}
