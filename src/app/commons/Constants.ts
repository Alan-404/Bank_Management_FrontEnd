import { HttpHeaders } from "@angular/common/http"


export var urlApi= "http://localhost:8000"



export const headerOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('bank')}`
    })
  }