import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from 'src/app/Services/authguard.service';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  {path: 'admin-profile', component: AdminProfileComponent},
  {path: 'admin-courses', component: AdminCoursesComponent, canActivate: [AuthguardService], data : {roles : ['Admin']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }