import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activity-groups',
  templateUrl: './activity-groups.component.html',
  styleUrls: ['./activity-groups.component.css'],
})
export class ActivityGroupsComponent implements OnInit {
  activityGroups: any[] = []; // Inisialisasi variabel untuk menyimpan data activity groups

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchActivityGroups(); // Panggil method fetchActivityGroups saat komponen diinisialisasi
  }

  fetchActivityGroups(): void {
    // Lakukan HTTP GET request ke API untuk mengambil data activity groups
    this.http
      .get<any[]>(
        'https://floating-mountain-35184.herokuapp.com/activity-groups'
      )
      .subscribe(
        (data: any[]) => {
          console.log(data);
          this.activityGroups = data; // Simpan data yang diterima ke dalam variabel activityGroups
        },
        (error) => {
          console.error('Error fetching activity groups:', error); // Tangani error jika terjadi
        }
      );
  }
}
