import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanelBodyComponent } from './sidepanel-body.component';

describe('SidepanelBodyComponent', () => {
  let component: SidepanelBodyComponent;
  let fixture: ComponentFixture<SidepanelBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidepanelBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepanelBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
