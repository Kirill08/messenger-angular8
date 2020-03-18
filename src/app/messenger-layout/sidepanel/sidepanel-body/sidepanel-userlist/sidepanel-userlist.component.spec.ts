import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanelUserlistComponent } from './sidepanel-userlist.component';

describe('SidepanelUserlistComponent', () => {
  let component: SidepanelUserlistComponent;
  let fixture: ComponentFixture<SidepanelUserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidepanelUserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepanelUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
