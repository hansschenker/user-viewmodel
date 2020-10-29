import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../types/user';

@Component({
  selector: 'hs-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent implements OnInit {

  @Input() item: User;
  @Output() OnDelete = new EventEmitter<User>();
  @Output() OnDetail = new EventEmitter<User>();
  constructor() {}

  ngOnInit(): void {}

  delete(item: User) {
    this.OnDelete.emit(item);
  }
  detail(item: User) {
    this.OnDetail.emit(item);
  }

}
