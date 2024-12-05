import { inject, Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  private userService: UserService = inject(UserService);
  private router: Router = inject(Router);

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.userService.userLogged()) {
      this.router.navigate(['/login']);
      return false;
    }

    this.userService.userLogged();
    return true;
  }
}
