import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentChatHeaderComponent } from './current-chat-header.component';

describe('CurrentChatHeaderComponent', () => {
  let component: CurrentChatHeaderComponent;
  let fixture: ComponentFixture<CurrentChatHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentChatHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentChatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
