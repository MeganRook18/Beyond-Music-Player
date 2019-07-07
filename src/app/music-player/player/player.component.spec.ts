import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponent } from './player.component';
import {MusicPlayerService} from '../music-player.service';
import {ActivatedRoute} from '@angular/router';

fdescribe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComponent ],
      providers: [MusicPlayerService]
    })
    .compileComponents();


    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
