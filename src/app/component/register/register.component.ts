import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  toggleLogin = false;

  firstname = new FormControl('', [
    Validators.required
  ]);
  lastname = new FormControl('', [
    Validators.required
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
  ]);
  phone = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{10}$/)
  ]);
  reference = new FormControl('');

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('pattern') ? 'Not a valid email' : '';
  }
  getFirstErrorMessage() {
    if (this.firstname.hasError('required')) {
      return 'You must enter a firstname';
    }
  }
  getLastErrorMessage() {
    if (this.lastname.hasError('required')) {
      return 'You must enter a lastname';
    }
  }
  getPhoneErrorMessage() {
    if (this.phone.hasError('required')) {
      return 'You must enter a phone number';
    }
    return this.phone.hasError('pattern') ? 'Not a valid Number' : '';
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
  }

  toggleLoginPopup() {
    this.router.navigate(['/']);
  }

}
