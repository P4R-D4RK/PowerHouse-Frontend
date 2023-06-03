import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    localStorage.clear();    
  }

  userFormControl = new FormGroup({
    email: new FormControl('caro@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('caro12345', [Validators.required, Validators.minLength(7)]),
  });

  login() {
    localStorage.setItem('email',this.userFormControl.value.email!);
    this.router.navigateByUrl('home');
  }

}
