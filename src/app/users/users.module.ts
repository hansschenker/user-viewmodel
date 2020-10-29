import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
// users
import { UsersRoutingModule } from './users-routing.module';
import { UsersPage } from './users.page';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';


@NgModule({
  declarations: [UsersPage, UserListComponent, UserFormComponent, UserSearchComponent, UserFilterComponent, UserListItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  exports: [UsersPage, UserListComponent, UserFormComponent, UserSearchComponent, UserFilterComponent, UserListItemComponent]
})
export class UsersModule { }
