import { Component, OnInit, ChangeDetectionStrategy,Output, EventEmitter, Input  } from '@angular/core';
import { User } from '../../types/user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  @Input() items: User[];
  @Output() OnDelete = new EventEmitter<User>();
  @Output() OnDetail = new EventEmitter<User>();
  constructor() {}

  ngOnInit(): void {}

  delete(item: User) {
    this.OnDelete.emit(item);
  }
  detail(item: User) {
    console.log("item list-detail:", item);
    this.OnDetail.emit(item);
  }

}
