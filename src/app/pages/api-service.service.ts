import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private serverUrl = 'http://localhost:5000'; // Cambia el puerto si es diferente

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    const url = `${this.serverUrl}/extract_text`;
    return this.http.post<any>(url, formData);
  }


  miEndpoint(): Observable<any> {
    const url = `${this.serverUrl}/api/appPy`;
    return this.http.get<any>(url);
  }
}

