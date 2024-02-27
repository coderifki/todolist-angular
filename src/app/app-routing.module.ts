import { RouterModule, Routes } from '@angular/router';
import { DashboardActivityComponent } from './dashboard-activity/dashboard-activity.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ActivityGroupsComponent } from './activity-groups/activity-groups.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect ke dashboard ketika URL kosong
  { path: 'dashboard', component: DashboardActivityComponent },
  { path: 'activity-groups', component: ActivityGroupsComponent },
  { path: 'item-list', component: ItemListComponent },
];

@NgModule({
  declarations: [ItemListComponent, ActivityGroupsComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
})
export class AppRoutingModule {}
