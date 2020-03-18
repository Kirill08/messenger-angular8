import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentChatMessagebarComponent } from './current-chat-messagebar.component';

describe('CurrentChatMessagebarComponent', () => {
  let component: CurrentChatMessagebarComponent;
  let fixture: ComponentFixture<CurrentChatMessagebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentChatMessagebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentChatMessagebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
