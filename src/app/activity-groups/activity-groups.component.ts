// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { tap, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './activity-groups.component.html',
  styleUrls: ['./activity-groups.component.css'],
})
export class ActivityGroupsComponent implements OnInit {
  data: any[] = [];
  email: string = 'rifkiramadhan.dev@gmail.com';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiService
      .getAllActivityGroups(this.email)
      .pipe(
        tap((data) => {
          console.log('Fetched Data:', data);
          this.data = data;
        }),
        catchError((error) => {
          console.error('Error fetching data:', error);
          return throwError(error);
        })
      )
      .subscribe();
  }
}
