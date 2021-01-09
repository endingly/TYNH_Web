import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotmationBoardComponent } from './infotmation-board.component';

describe('InfotmationBoardComponent', () => {
  let component: InfotmationBoardComponent;
  let fixture: ComponentFixture<InfotmationBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfotmationBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfotmationBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
