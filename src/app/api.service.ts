// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getAllActivityGroups(email: string): Observable<any[]> {
    const url = `${this.baseUrl}/activity-groups?email=${email}`;
    return this.httpClient.get<any[]>(url);
  }
}
