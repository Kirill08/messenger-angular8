import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanelMessageComponent } from './sidepanel-message.component';

describe('SidepanelMessageComponent', () => {
  let component: SidepanelMessageComponent;
  let fixture: ComponentFixture<SidepanelMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidepanelMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepanelMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
