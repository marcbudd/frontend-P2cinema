import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfahrtComponent } from './anfahrt.component';

describe('AnfahrtComponent', () => {
  let component: AnfahrtComponent;
  let fixture: ComponentFixture<AnfahrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfahrtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnfahrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
