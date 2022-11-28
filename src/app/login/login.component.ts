import {Component, OnInit} from '@angular/core';
import {Acc} from "../acc";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor() {
  }

  ngOnInit(): void {
  }

  accounts: Acc[] = [{
    account: "vinh",
    password: "123456"
  }]

  loginForm = new FormGroup({
    account: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)]),
  })

  check() {
    // @ts-ignore
    if (this.account?.value == this.accounts.account & this.password?.value == this.accounts.password) {
      alert('Login true')
    } else {
      alert('login fail')
    }
  }

  get account() {
    return this.loginForm.get('account')
  }

  get password() {
    return this.loginForm.get('password')
  }

}
