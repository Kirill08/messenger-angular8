import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentChatHeaderProfileComponent } from './current-chat-header-profile.component';

describe('CurrentChatHeaderProfileComponent', () => {
  let component: CurrentChatHeaderProfileComponent;
  let fixture: ComponentFixture<CurrentChatHeaderProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentChatHeaderProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentChatHeaderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
