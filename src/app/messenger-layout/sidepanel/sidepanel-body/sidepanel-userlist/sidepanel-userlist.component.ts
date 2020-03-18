import { UsersQuery } from './../../../state/users.query';
import { UsersService } from './../../../state/books.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/messenger-layout/state/user.model';

@Component({
  selector: 'app-sidepanel-userlist',
  templateUrl: './sidepanel-userlist.component.html',
  styleUrls: ['./sidepanel-userlist.component.scss']
})
export class SidepanelUserlistComponent implements OnInit {

  users$: Observable<User[]>;
  selectLoading$: Observable<boolean>;
  // sortControl = new FormControl('');

  constructor(private usersService: UsersService,
              private usersQuery: UsersQuery) { }

  ngOnInit() {
    debugger;
    this.usersService.getUsers();

    this.users$ = this.usersQuery.selectAll();

    const a = '';
  }

}
