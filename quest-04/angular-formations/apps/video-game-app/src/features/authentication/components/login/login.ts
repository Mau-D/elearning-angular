import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { AuthenticateUser } from '../../services/authenticate-user';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormFieldModule, MatButton, MatDividerModule, MatInputModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly service = inject(AuthenticateUser);
  private readonly router = inject(Router)
  logIn(): void {
    this.service
      .logIn({ nickName: 'Superman', password: 'abc123' }).pipe(tap(item => this.router.navigate(['/video-games'])))
      .subscribe();
    console.info('login');
  }
}
