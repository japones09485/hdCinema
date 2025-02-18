import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlAPI = environment.apiUrl; 

  constructor(private http: HttpClient) {} 


  //categories

  get_categories() {
    return this.http.get(`${this.urlAPI}/categories`); 
  }

}
