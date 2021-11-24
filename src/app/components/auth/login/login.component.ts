import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/interfaces/Account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  message: string = '';
  showAlert: boolean = false;
  showSpinner: boolean = false;

  ngOnInit(): void {
  }

  //login handler
  account: Account = {email: '', password: ''};

  getInput(event: any){
    const name = event.target.name;
    const value = event.target.value;
    if (name == "email")
      this.account.email = value;
    else if (name == "password")
      this.account.password = value;
  }

  responseLogin: any = {success: false, message: '', accessToken: ''}
  loginAccount(){
    this.showSpinner=true;
    this.accountService.login(this.account).subscribe(response => {
      this.responseLogin = response;
      this.showSpinner=false
      if (!this.responseLogin.success){
        this.showAlert= true;
        this.message = this.responseLogin.message
        setTimeout(() => {
          this.showAlert = false;
          this.message='';
        }, 5000 )
      }
      else{
        localStorage.setItem('bank', this.responseLogin.accessToken);
        this.router.navigate(['home']).then(() => {
          window.location.reload();
        });
      }
    })
  }
  

}
