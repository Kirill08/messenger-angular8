import { EntityState, StoreConfig, EntityStore } from '@datorama/akita';
import { User } from './user.model';
import { Injectable } from '@angular/core';

export interface UsersState extends EntityState<User> {}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'users'})
export class UsersStore extends EntityStore<UsersState, User> {
  constructor() {
    super();
  }
}
