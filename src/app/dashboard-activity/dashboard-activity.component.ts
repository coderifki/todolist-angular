import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dashboard-activity',
  standalone: true,
  templateUrl: './dashboard-activity.component.html',
  styleUrl: './dashboard-activity.component.css',
  imports: [CardComponent],
})
export class DashboardActivityComponent {}
