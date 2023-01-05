import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmaddComponent } from './filmadd.component';

describe('FilmaddComponent', () => {
  let component: FilmaddComponent;
  let fixture: ComponentFixture<FilmaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmaddComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FilmaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
