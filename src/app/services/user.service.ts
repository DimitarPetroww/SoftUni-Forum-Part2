import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  isLogged = false

  constructor() { }

  login(): void {
    this.isLogged = true
  }
  register(): void {
    this.isLogged = true
  }
  logout(): void {
    this.isLogged = false
  }
}
