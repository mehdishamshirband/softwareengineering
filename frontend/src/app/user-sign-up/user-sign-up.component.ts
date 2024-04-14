import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { UserRegister } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-sign-up',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './user-sign-up.component.html',
  styleUrl: './user-sign-up.component.css'
})
export class UserSignUpComponent {

  userRegister: UserRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  data_validator = [true, true, true];

  constructor(private userService: UserService) {}

  signUp() {
    this.data_validator = [true, true, true];
    if (!this.userService.validateEmail(this.userRegister.email)) {
      alert('Email address is not valid');
      this.data_validator[0] = false;
    }
    if (!this.userService.validatePassword(this.userRegister.password)) {
      alert('Password is not valid, it must contains at least 6 characters, 1 uppercase letter, 1 lowercase letter, 1 number');
      this.data_validator[1] = false;
    }
    if (!this.userService.validatePasswordMatch(this.userRegister.password, this.userRegister.confirmPassword)) {
      alert('Passwords do not match');
      this.data_validator[2] = false;
    }

    if(this.data_validator.every(Boolean)) {
      console.log("userRegister: ", this.userRegister);
      this.userService.createUser(this.userRegister).subscribe((result: any) => {
        if (result.error) {
          alert(result.error.email[0]);
        }
        console.warn(result);
      });
      //console.warn(this.userRegister);
    }

  }
}
