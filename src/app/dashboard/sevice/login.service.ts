import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:9090/auth';

  constructor(private http:HttpClient) { }

  login(employee: {}): Observable<Object> {
    console.log(employee);
    
    return this.http.post(`${this.baseUrl}/login`, employee);
  }
}
