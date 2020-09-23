import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersEpisodesComponent } from './characters-episodes.component';

describe('CharactersEpisodesComponent', () => {
  let component: CharactersEpisodesComponent;
  let fixture: ComponentFixture<CharactersEpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
