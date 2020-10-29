import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { map, scan } from 'rxjs/operators';
// shared
import { Viewmodel, VmFn } from '../shared/viewmodel';
// user
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'user-page',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPage implements OnInit {
  vm$: Observable<Viewmodel<User>>;
  // ussr input state
  addState = new Subject<User>();
  updateState = new Subject<User>();
  deleteState = new Subject<User>();
  detailState = new Subject<User>();

  constructor(private svc: UserService) {
    type vmFn = VmFn<User>;
    this.vm$ = merge(this.dataChange$, this.addChange$).pipe(
      scan((oldVm: Viewmodel<User>, reduceVm: vmFn) => reduceVm(oldVm), {
        items: [],
      } as Viewmodel<User>)
    );
  } // constructor

  // state changes
  dataChange$ = this.svc.users$.pipe(
    map((users: User[]) => (vm: Viewmodel<User>) => ({ ...vm, items: users }))
  );

  addChange$ = this.addState.pipe(
    map((user: User) => (vm: Viewmodel<User>) => ({
      ...vm,
      items: [...vm.items, { ...user }],
    }))
  );

  ngOnInit(): void {}
} // class
