import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private http: HttpClient = inject(HttpClient);
  private url: string = "https://lol2-4vk5.onrender.com"
  private cookieService: CookieService = inject(CookieService);
  // private auth_token: string = this.cookieService.get('USER_COOKIE')

  getAllChampions(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    })
    return this.http.get(`${this.url}/champions`, {headers: headers});
  }

  getChampionsById(id: string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    })
    return this.http.get(`${this.url}/champions/${id}`, {headers: headers})
  }
}
