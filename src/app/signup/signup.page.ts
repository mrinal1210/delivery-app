import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * signUpUser is used to sign up a new user into the application.
   */
  public signUpUser() {
    this.router.navigate(['app-home']);
  }

  /**
   * navigateToSignIn is used to redirect the user to the login page.
   */
  public navigateToSignIn() {
    this.router.navigate(['login']);
  }
}
