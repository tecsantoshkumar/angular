import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputernetworkingRoutingModule } from './computernetworking-routing.module';
import { CCNAComponent } from './ccna/ccna.component';
import { ComputerNetworkingCoursesComponent } from './computer-networking-courses/computer-networking-courses.component';
import { HardwareNetworkingComponent } from './hardware-networking/hardware-networking.component';
import { LinuxComponent } from './linux/linux.component';
import { AccordionModule } from 'ngx-accordion';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { TabsModule } from 'ngx-tabset';
import { CommonsModule } from '../common/common.module';


@NgModule({
  declarations: [  HardwareNetworkingComponent,
    ComputerNetworkingCoursesComponent,
    CCNAComponent,
    LinuxComponent,],
  imports: [
    CommonModule,
    ComputernetworkingRoutingModule,TabsModule, AccordionModule,
    NgxScrollTopModule, CarouselModule,CommonsModule
  ]
})
export class ComputernetworkingModule { }
