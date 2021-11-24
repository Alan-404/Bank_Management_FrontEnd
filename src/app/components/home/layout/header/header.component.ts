import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  showLogin: boolean = true;

  authResponse: any = {user: {}}
  ngOnInit(): void {
    this.accountService.auth().subscribe(response => {
      this.authResponse = response;
      console.log(this.authResponse)
    })
    if (localStorage.getItem('bank'))
      this.showLogin = false;
  }


  logoutAccount(){
    localStorage.removeItem('bank');
    this.router.navigate(['auth/login']);
  }

  myInforPage(){
    this.router.navigate(['home/my-information']);
  }

}
