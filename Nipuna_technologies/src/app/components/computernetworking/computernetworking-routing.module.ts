import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCNAComponent } from './ccna/ccna.component';
import { ComputerNetworkingCoursesComponent } from './computer-networking-courses/computer-networking-courses.component';
import { HardwareNetworkingComponent } from './hardware-networking/hardware-networking.component';
import { LinuxComponent } from './linux/linux.component';


const routes: Routes = [ 
  { path: 'hardware-and-networking-training-institute-guntur', component: HardwareNetworkingComponent,
  data: {
    title: "Computer Hardware and Networking training institute in Guntur.",
    description : "Best Computer Hardware and Networking training institute in Guntur. Hardware and Networking Course in Guntur provides real-time and placement focused computer Hardware and Networking Training in Guntur."
  } },
{ path: 'computer-networking-courses-training-institute-guntur', component: ComputerNetworkingCoursesComponent,
data: {
  title: "Computer Networking Training in Guntur",
  description : "Best Computer Networking courses in Guntur Best IT Hardware and Networking Training with Placement in Guntur and also find IT Hardware and Networking courses"
} },
{ path: 'ccna-training-institute-guntur', component: CCNAComponent,
data: {
  title: "CCNA Training Training in Guntur",
  description : "Learn CCNA Course in Guntur provides real-time and placement focused Cisco CCNA training in Guntur . Our CCNA certification course includes basic to advanced level."
} },
{ path: 'linux-training-institute-guntur', component: LinuxComponent,
data: {
  title: "Linux Training Training in Guntur",
  description : "Linux Course in Guntur provided by Nipuna Technologies, helps you handle system software, hardware and build connections between the software and physical."
} },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputernetworkingRoutingModule { }
