import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlayerComponent } from './music-player.component';
import {MusicPlayerService} from './music-player.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('MusicPlayerComponent', () => {
  let component: MusicPlayerComponent;
  let fixture: ComponentFixture<MusicPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          RouterModule,
          HttpClientModule
      ],
      declarations: [ MusicPlayerComponent ],
      providers: [MusicPlayerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
