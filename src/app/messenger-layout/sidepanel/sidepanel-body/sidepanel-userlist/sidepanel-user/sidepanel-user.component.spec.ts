import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanelUserComponent } from './sidepanel-user.component';

describe('SidepanelUserComponent', () => {
  let component: SidepanelUserComponent;
  let fixture: ComponentFixture<SidepanelUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidepanelUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepanelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
