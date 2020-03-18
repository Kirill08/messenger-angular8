import { ID } from '@datorama/akita';
import { UsersStore } from './users.store';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

import { users } from './users.data';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private usersStore: UsersStore) {
  }

  getUsers() {
    timer(1000)
    .pipe(
      mapTo(users)
    )
    .subscribe(users => {
      this.usersStore.set(users);
    });
  }

  getUser(id: ID) {
    const user = users.find(user => user.id === +id);

    timer(1000)
    .pipe(mapTo(user))
    .subscribe(user => {
      this.usersStore.add(user);
    });
  }
}
