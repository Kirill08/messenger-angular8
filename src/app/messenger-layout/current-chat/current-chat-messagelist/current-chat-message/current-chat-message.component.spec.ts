import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentChatMessageComponent } from './current-chat-message.component';

describe('CurrentChatMessageComponent', () => {
  let component: CurrentChatMessageComponent;
  let fixture: ComponentFixture<CurrentChatMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentChatMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
