import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlApi } from '../commons/Constants';
@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private request: HttpClient) { }


  getAll():Observable<{}>{
    return this.request.get<{}>(`${urlApi}/banner/banner_api`)
  }
}
