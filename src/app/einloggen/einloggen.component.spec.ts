import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinloggenComponent } from './einloggen.component';

describe('EinloggenComponent', () => {
  let component: EinloggenComponent;
  let fixture: ComponentFixture<EinloggenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinloggenComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EinloggenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
