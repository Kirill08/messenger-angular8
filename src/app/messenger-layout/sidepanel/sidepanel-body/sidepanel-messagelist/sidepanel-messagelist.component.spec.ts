import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanelMessagelistComponent } from './sidepanel-messagelist.component';

describe('SidepanelMessagelistComponent', () => {
  let component: SidepanelMessagelistComponent;
  let fixture: ComponentFixture<SidepanelMessagelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidepanelMessagelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepanelMessagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
