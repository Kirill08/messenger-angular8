import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentChatHeaderMenuComponent } from './current-chat-header-menu.component';

describe('CurrentChatHeaderMenuComponent', () => {
  let component: CurrentChatHeaderMenuComponent;
  let fixture: ComponentFixture<CurrentChatHeaderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentChatHeaderMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentChatHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
