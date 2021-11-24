import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Account } from '../interfaces/Account';
import { Observable } from 'rxjs';
import {urlApi, headerOptions} from '../commons/Constants'



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private request: HttpClient) { }

  login(account: Account):Observable<{}>{
    return this.request.post<{}>(`${urlApi}/account/login`, account)
  }

  auth():Observable<{}>{
    return this.request.get<{}>(`${urlApi}/account/auth`, headerOptions);
  }

}
