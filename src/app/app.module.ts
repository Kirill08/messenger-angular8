import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessengerLayoutComponent } from './messenger-layout/messenger-layout.component';
import { SidepanelComponent } from './messenger-layout/sidepanel/sidepanel.component';
import { CurrentChatComponent } from './messenger-layout/current-chat/current-chat.component';
import { SidepanelBodyComponent } from './messenger-layout/sidepanel/sidepanel-body/sidepanel-body.component';
import { SidepanelMessagelistComponent } from './messenger-layout/sidepanel/sidepanel-body/sidepanel-messagelist/sidepanel-messagelist.component';
import { SidepanelMessageComponent } from './messenger-layout/sidepanel/sidepanel-body/sidepanel-messagelist/sidepanel-message/sidepanel-message.component';
import { SidepanelUserlistComponent } from './messenger-layout/sidepanel/sidepanel-body/sidepanel-userlist/sidepanel-userlist.component';
import { SidepanelUserComponent } from './messenger-layout/sidepanel/sidepanel-body/sidepanel-userlist/sidepanel-user/sidepanel-user.component';
import { ProfileDetailComponent } from './messenger-layout/sidepanel/sidepanel-body/profile-detail/profile-detail.component';
import { SidepanelProfilebarComponent } from './messenger-layout/sidepanel/sidepanel-body/sidepanel-profilebar/sidepanel-profilebar.component';
import { SidepanelProfileDetailComponent } from './messenger-layout/sidepanel/sidepanel-body/sidepanel-profile-detail/sidepanel-profile-detail.component';
import { SidepanelMenuComponent } from './messenger-layout/sidepanel/sidepanel-menu/sidepanel-menu.component';
import { SidepanelHeadbarComponent } from './messenger-layout/sidepanel/sidepanel-headbar/sidepanel-headbar.component';
import { SidepanelSearchComponent } from './messenger-layout/sidepanel/sidepanel-search/sidepanel-search.component';
import { CurrentChatHeaderComponent } from './messenger-layout/current-chat/current-chat-header/current-chat-header.component';
import { CurrentChatHeaderMenuComponent } from './messenger-layout/current-chat/current-chat-header/current-chat-header-menu/current-chat-header-menu.component';
import { CurrentChatHeaderProfileComponent } from './messenger-layout/current-chat/current-chat-header/current-chat-header-profile/current-chat-header-profile.component';
import { CurrentChatMessagelistComponent } from './messenger-layout/current-chat/current-chat-messagelist/current-chat-messagelist.component';
import { CurrentChatMessagebarComponent } from './messenger-layout/current-chat/current-chat-messagebar/current-chat-messagebar.component';
import { CurrentChatMessageComponent } from './messenger-layout/current-chat/current-chat-messagelist/current-chat-message/current-chat-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessengerLayoutComponent,
    SidepanelComponent,
    CurrentChatComponent,
    SidepanelBodyComponent,
    SidepanelMessagelistComponent,
    SidepanelMessageComponent,
    SidepanelUserlistComponent,
    SidepanelUserComponent,
    ProfileDetailComponent,
    SidepanelProfilebarComponent,
    SidepanelProfileDetailComponent,
    SidepanelMenuComponent,
    SidepanelHeadbarComponent,
    SidepanelSearchComponent,
    CurrentChatHeaderComponent,
    CurrentChatHeaderMenuComponent,
    CurrentChatHeaderProfileComponent,
    CurrentChatMessagelistComponent,
    CurrentChatMessagebarComponent,
    CurrentChatMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
