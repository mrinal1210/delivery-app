import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * navigateToForgotPasswordPage() is used to redirect the user to forgot password page in order to reset user's password.
   */
  public navigateToForgotPasswordPage() {
    this.router.navigate(['forgot-password']);
  }

  /**
   * navigateToHome() is used to redirect the user to application's home page.
   */
  public navigateToHome() {
    this.router.navigate(['app-home']);
  }

  /**
   * navigateToSignUpPage is used to redirect the user to sign up as a new user.
   */
  public navigateToSignUpPage() {
    this.router.navigate(['signup']);
  }
}
