import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaufenComponent } from './kaufen.component';

describe('KaufenComponent', () => {
  let component: KaufenComponent;
  let fixture: ComponentFixture<KaufenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaufenComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KaufenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
