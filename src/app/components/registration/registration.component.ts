import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private _registerForm: FormGroup;

  constructor( private _form: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this._registerForm = this._form.group({
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit(){
    if (
      this._registerForm.value.email.trim() === '' ||
      this._registerForm.value.password.trim() === '' ||
      this._registerForm.value.confirmPassword.trim() === '' ||
      this._registerForm.value.password.trim() !== this._registerForm.value.confirmPassword.trim()
    ) {
      return;
    }
    this.authService.registerUserWithFirebase(this._registerForm.value);
  }

}
