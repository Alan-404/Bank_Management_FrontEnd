import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-my-infor',
  templateUrl: './my-infor.component.html',
  styleUrls: ['./my-infor.component.css']
})
export class MyInforComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  authResponse: any = {user: {}}
  bDate: string = ''
  showPhone: string = '';
  hiddenPhone: string = '';
  ngOnInit(): void {
    this.accountService.auth().subscribe(response => {
      this.authResponse = response
      const arrDate = this.authResponse.user.bDate.split('-');
      this.bDate = arrDate[2] + "-" + arrDate[1] + "-" + arrDate[0];
      for (var i =0; i<7; i++){
        this.showPhone+= (this.authResponse.user.phone[i]);
      }
      if (this.authResponse.user.phone.length == 10){
        this.hiddenPhone = "***";
      }
      else {
        this.hiddenPhone = "****";
      }
    })
  }

}
