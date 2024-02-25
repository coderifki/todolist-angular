import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getAllActivityGroups(email: string) {
    const url = `${this.baseUrl}/activity-groups`;
    const params = new HttpParams().set('email', email);
    return this.httpClient.get(url, { params });
  }

  createActivityGroup(email: string) {
    const url = `${this.baseUrl}/activity-groups`;
    const body = { email };
    return this.httpClient.post(url, body);
  }
}
