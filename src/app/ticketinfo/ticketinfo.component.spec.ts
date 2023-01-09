import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketinfoComponent } from './ticketinfo.component';

describe('TicketinfoComponent', () => {
  let component: TicketinfoComponent;
  let fixture: ComponentFixture<TicketinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
