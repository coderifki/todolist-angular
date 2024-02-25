import { Routes } from '@angular/router';
import { DashboardActivityComponent } from './dashboard-activity/dashboard-activity.component';
// Misalkan ini adalah komponen untuk halaman activity-groups
import { ItemListComponent } from './item-list/item-list.component';
import { ActivityGroupsComponent } from './acrivity-groups/acrivity-groups.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect ke dashboard ketika URL kosong
  { path: 'dashboard', component: DashboardActivityComponent },
  { path: 'activity-groups', component: ActivityGroupsComponent },
  { path: 'item-list', component: ItemListComponent },
];
