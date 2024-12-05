import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { SingUpUserRequest } from '../../interfaces/user/SingUpUserRequest';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterLink,
    ReactiveFormsModule,
  ],
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

  onSubmitRegisterForm(): void {
    if (this.registerForm.value && this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value as SingUpUserRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            alert('Usuario criado com sucesso');
            this.registerForm.reset;
          }
        },
        error: (error) => console.log(error)
      });
    }
  }
}