import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  

  constructor(private userService: UserService) { }

  
  registerHandler(): void {
    this.userService.register()
  }
}
