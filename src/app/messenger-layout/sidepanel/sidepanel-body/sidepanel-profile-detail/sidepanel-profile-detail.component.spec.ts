import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanelProfileDetailComponent } from './sidepanel-profile-detail.component';

describe('SidepanelProfileDetailComponent', () => {
  let component: SidepanelProfileDetailComponent;
  let fixture: ComponentFixture<SidepanelProfileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidepanelProfileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepanelProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
