import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../services/user.service';
import { AuthRequets } from '../../interfaces/user/AuthRequest';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
  private userService: UserService = inject(UserService);
  private cookieService: CookieService = inject(CookieService);
  private router: Router = inject(Router);

  onSubmitLoginForm(): void {
    console.log('Dados do formulário de login', this.loginForm.value);
    if (this.loginForm.value && this.loginForm.valid) {
      this.userService.authUser(this.loginForm.value as AuthRequets)
      .subscribe({
        next: (response) => {
          if (response) {
            this.cookieService.set('USER_COOKIE', response?.token);
            this.loginForm.reset();
            this.router.navigate(['/home']);
          }
        },
        error: (error) => console.log(error)
      })
    }
  }
}