import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) {}

  /**
   * navigateToLoginPage() is used to redirect the user to the login page for sign in.
   */
  public navigateToLoginPage() {
    this.router.navigate(['login']);
  }
}
