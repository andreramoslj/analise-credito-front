import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnaliseCreditoService {

  private baseUrl = 'http://localhost:8080/api/v1/analise-credito';

  constructor(private http: HttpClient) { }

  getAnaliseCredito(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAnaliseCredito(analiseCredito: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, analiseCredito);
  }

  updateAnaliseCredito(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAnaliseCredito(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAnaliseCreditosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAnaliseCreditosListCpf(cpf: string ): Observable<any> {
    return this.http.get(`${this.baseUrl}/consultar?cpf=${cpf}`);
  }
}