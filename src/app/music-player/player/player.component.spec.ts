import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {Location} from '@angular/common';
import {PlayerComponent} from './player.component';
import {MusicPlayerService} from '../music-player.service';
import {ActivatedRouteStub} from '../../../testing';
import {ActivatedRoute} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('PlayerComponent', () => {
    let component: PlayerComponent;
    let fixture: ComponentFixture<PlayerComponent>;
    let activatedRoute: ActivatedRouteStub;

    const videos = [{
        kind: 'youtube#playlistItemListResponse',
        etag: '"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/kQvHBXZO2EKXydjjgRUgHKNjnjA"',
        nextPageToken: 'CAoQAA',
        pageInfo: {
            totalResults: 49,
            resultsPerPage: 10
        },
        items: [
            {

                kind: 'youtube#playlistItem',
                etag: '"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/mn7-yF379SxjmQLPWfZ2mixhG48"',
                id: 'UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS41MzJCQjBCNDIyRkJDN0VD',
                snippet: {
                    publishedAt: '2014-09-04T16:00:41.000Z',
                    channelId: 'UCc1SpIDSvxrf5ofxUMyXReg',
                    title: 'Lamb Angelica',
                    description: 'From Lamb\'s 2003 album Between Darkness and Wonder',
                    thumbnails: {
                        default: {
                            url: 'https://i.ytimg.com/vi/X0qwQqwKLlM/default.jpg',
                            width: 120,
                            height: 90
                        },
                        medium: {
                            url: 'https://i.ytimg.com/vi/X0qwQqwKLlM/mqdefault.jpg',
                            width: 320,
                            height: 180
                        },
                        high: {
                            url: 'https://i.ytimg.com/vi/X0qwQqwKLlM/hqdefault.jpg',
                            width: 480,
                            height: 360
                        }
                    },
                    channelTitle: 'Danielle Major',
                    playlistId: 'PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ',
                    position: 0,
                    resourceId: {
                        kind: 'youtube#video',
                        videoId: 'X0qwQqwKLlM'
                    }
                },
                contentDetails: {
                    videoId: 'X0qwQqwKLlM',
                    videoPublishedAt: '2009-09-07T15:09:56.000Z'
                },
                status: {
                    privacyStatus: 'public'
                }
            },
        ]
    }];

    beforeEach(async(() => {
        activatedRoute = new ActivatedRouteStub({
            videoId: 'X0qwQqwKLlM',
        });


        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [PlayerComponent],
            providers: [
                MusicPlayerService,
                {
                    provide: Location,
                    useFactory: () =>
                        jasmine.createSpyObj<Location>('Location', ['back', 'replaceState']),
                },
                {
                    provide: ActivatedRoute,
                    useValue: activatedRoute,
                },]
        })
            .compileComponents();


        fixture = TestBed.createComponent(PlayerComponent);
        component = fixture.componentInstance;

        component.videos = videos;
    }));

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it("should render new video when route parameters videoId change", () => {
        activatedRoute.setParamMap({ videoId: 'newID' });
        fixture.detectChanges();

        expect(component.videoID).toBe('newID');
    });

});
