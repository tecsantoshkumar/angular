import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {TooltipModule} from 'primeng/tooltip';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { FieldPipe } from 'src/field.pipe';


@NgModule({
  declarations: [AdminProfileComponent,
    AdminCoursesComponent, 
    FieldPipe],
  imports: [CommonModule,AdminRoutingModule,
     TableModule, 
    TabViewModule,
    ButtonModule,
    DropdownModule,
    TooltipModule,
    MenuModule]
})
export class AdminModule { }
