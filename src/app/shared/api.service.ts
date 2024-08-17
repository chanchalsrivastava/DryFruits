
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
// import { Product } from '../product/product.model';
import { CategoryModule } from '../home/category.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private apiUrl = 'http://143.110.188.54:7000';
  // private BaseUrl = 'https://api.doonsilk.com'; 
  // constructor(private http: HttpClient) {}

  // signUp(data: any): Observable<any> {
  //   const url = `${this.apiUrl}/signUp`;
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  //   return this.http.post(url, data, { headers });
  // }
  // addCategory(data: any): Observable<any> {           
  //   const url = `${this.BaseUrl}/addCategory`;
  //   return this.http.post(url, data);
  // }
  // get_all_categories(): Observable<CategoryModule[]> {
  //   return this.http.get<CategoryModule[]>(`${this.BaseUrl}/get_all_categories`).pipe(
  //     catchError((error) => {
  //       console.error('Error fetching categories:', error);
  //       throw error;
  //     })
  //   );
  // }

}
