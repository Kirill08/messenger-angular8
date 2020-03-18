import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentChatMessagelistComponent } from './current-chat-messagelist.component';

describe('CurrentChatMessagelistComponent', () => {
  let component: CurrentChatMessagelistComponent;
  let fixture: ComponentFixture<CurrentChatMessagelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentChatMessagelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentChatMessagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
