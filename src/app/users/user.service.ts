import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";
import { User } from './types/user';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'my-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  users$: Observable<User[]> = this.http.get<User[]>("/api/users").pipe(
    catchError( err => throwError(err))
  )

  addUser(user: User) {
    return this.http.post<User>("/api/users", user, httpOptions)
  }

} // class
