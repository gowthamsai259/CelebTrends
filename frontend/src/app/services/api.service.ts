import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResponse {
  message: string;
  timestamp: string;
  status: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_BASE_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // GET request to the backend API
  getHello(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.API_BASE_URL}/hello`);
  }

  // POST request to the backend API
  postData(data: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.API_BASE_URL}/hello`, data);
  }

  // Generic GET method
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.API_BASE_URL}${endpoint}`);
  }

  // Generic POST method
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.API_BASE_URL}${endpoint}`, data);
  }

  // Generic PUT method
  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.API_BASE_URL}${endpoint}`, data);
  }

  // Generic DELETE method
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.API_BASE_URL}${endpoint}`);
  }
} 