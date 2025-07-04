import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Wine } from './wine-list/Wine';
import { User } from './sign-up/User';

const WINES_URL = 'https://68680ea9d5933161d70aad91.mockapi.io/api/v1/wines';
const USERS_URL = 'https://68680ea9d5933161d70aad91.mockapi.io/api/v1/users';

@Injectable({
  providedIn: 'root'
})
export class WineDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Wine[]> {

    return this.http.get<Wine[]>(WINES_URL)
      .pipe(
        tap( (wines: Wine[]) => wines.forEach(wine => wine.quantity = 0))
      );
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(USERS_URL, user);
  }
}
