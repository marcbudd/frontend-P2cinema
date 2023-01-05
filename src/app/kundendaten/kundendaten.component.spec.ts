import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundendatenComponent } from './kundendaten.component';

describe('KundendatenComponent', () => {
  let component: KundendatenComponent;
  let fixture: ComponentFixture<KundendatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KundendatenComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KundendatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
