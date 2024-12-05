import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { SingUpUserRequest } from '../../interfaces/user/SingUpUserRequest';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  private formsBuilder: FormBuilder = inject(FormBuilder);
  registerForm = this.formsBuilder.group({
    name: ['', Validators.required],
    birthDate: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
  private userService: UserService = inject(UserService);
  private router: Router = inject(Router);
  private snackbar: MatSnackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string): void {
    this.snackbar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  onSubmitRegisterForm(): void {
    // console.log('Dados do formulário de registro:', this.registerForm.value)
    if (this.registerForm.value && this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value as SingUpUserRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.openSnackBar('Usuario criado com sucesso', 'Fechar');
            this.registerForm.reset;
            this.router.navigate(['/login'])
          }
        },
        error: () => this.openSnackBar('Erro ao efetuar o cadastro!', 'Fechar')
      });
    }
  }
}
