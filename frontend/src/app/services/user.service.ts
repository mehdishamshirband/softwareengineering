import { Injectable } from '@angular/core';
import { User, UserLogin, UserRegister, UserForgetPassword } from '../interfaces/user.interface';
import {Observable, of} from "rxjs";
import {TravelPackage} from "../interfaces/booking.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSample: User = {
    id: 123456789,
    emailAddress: 'b_vauche@live.concordia.ca',
    firstName: 'Benjamin',
    lastName: 'Vauchel',
    birthDate: new Date(2001,5,31),
    phone: '4387381234',
    country: 'Canada',
    province: 'Quebec',
    city: 'Montreal',
    zipcode: 'H2A 3A5'
  };
  constructor() { }
  getUserSample(): User {
    return this.userSample;
  }

  validateEmail(email: string)  {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
};

  validatePassword(password: string) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return re.test(password);
  }

  validatePasswordMatch(password: string, confirmPassword: string) {
    return password === confirmPassword;
  }

  validatePhone(phone: string) {
    const re = /^\d{10}$/;
    return re.test(phone);
  }

}
