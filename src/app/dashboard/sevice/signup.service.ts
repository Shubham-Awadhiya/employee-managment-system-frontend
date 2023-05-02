import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = 'http://localhost:9090/auth';

  constructor(private http:HttpClient) { }
  
  createEmployee(employee:{}): Observable<Object> {
    return this.http.post(`${this.baseUrl}/signup`, employee);
  }
}
