import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLogged: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      //   deviceInfo:this.formBuilder.group({
      //   deviceId: ["17867868768"],
      //   deviceType:["DEVICE_TYPE_ANDROID"],
      //   notificationToken:["67657575eececc34"]
      // })
    });
  }

  ngOnInit(): void {
    console.log('this.form: ', this.form);
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  login(): void {
    if (typeof Storage !== undefined) {
      if (
        this.form.value.email == 'argentina@programa.com' &&
        this.form.value.password == 'AP123'
      ) {
        localStorage.clear();
        this.isLogged = true;
        localStorage.setItem('email', 'argentina@programa.com');
        localStorage.setItem('password', 'AP123');
        localStorage.setItem('isLogged', 'true');
        this.router.navigate(['portfolio'])
      } else if (
        this.form.value.email !== 'argentina@programa.com' &&
        this.form.value.password == 'AP123'
      ) {
        alert('El email es incorrecto');
        // LocalStorage no soportado en este navegador
      } else if (
        this.form.value.email == 'argentina@programa.com' &&
        this.form.value.password !== 'AP123'
      ) {
        this.isLogged = false;
        alert('El password es incorrecto');
      } else {
        this.isLogged = false;
        alert('El email y el password son incorrectos');
      }
    }
  }
}
