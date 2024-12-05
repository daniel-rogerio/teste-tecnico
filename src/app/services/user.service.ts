import { inject, Injectable } from '@angular/core';
import { SingUpUserRequest } from '../models/interfaces/user/SingUpUserRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingUpUserResponse } from '../models/interfaces/user/SingUpUserResponse';
import { AuthRequets } from '../models/interfaces/user/AuthRequests';
import { AuthResponse } from '../models/interfaces/user/AuthResponse';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http: HttpClient = inject(HttpClient);
  private url: string = 'https://lol2-4vk5.onrender.com';
  private cookieService: CookieService = inject(CookieService);

  registerUser(requestDatas: SingUpUserRequest): Observable<SingUpUserResponse> {
    return this.http.post<SingUpUserResponse>(`${this.url}/register`,requestDatas);
  }

  authUser(requestDatas: AuthRequets): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.url}/login`, requestDatas);
  }

  userLogged(): boolean {
    const token: string = this.cookieService.get('USER_COOKIE');
    return token ? true : false;
  }
}