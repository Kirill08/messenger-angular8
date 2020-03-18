import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanelProfilebarComponent } from './sidepanel-profilebar.component';

describe('SidepanelProfilebarComponent', () => {
  let component: SidepanelProfilebarComponent;
  let fixture: ComponentFixture<SidepanelProfilebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidepanelProfilebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepanelProfilebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
