import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmInputComponent } from './film-input.component';

describe('FilmInputComponent', () => {
  let component: FilmInputComponent;
  let fixture: ComponentFixture<FilmInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
