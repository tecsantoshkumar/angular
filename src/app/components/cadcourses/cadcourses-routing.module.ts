import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnsysComponent } from './ansys/ansys.component';
import { AutocadMechanicalComponent } from './autocad-mechanical/autocad-mechanical.component';
import { AutocadComponent } from './autocad/autocad.component';
import { Autocadcivil3dComponent } from './autocadcivil3d/autocadcivil3d.component';
import { Autocadcivil3dsmaxComponent } from './autocadcivil3dsmax/autocadcivil3dsmax.component';
import { CadCoursesComponent } from './cad-courses/cad-courses.component';
import { CatiaComponent } from './catia/catia.component';
import { CNCMachineComponent } from './cnc-machine/cnc-machine.component';
import { CreoComponent } from './creo/creo.component';
import { ETABSComponent } from './etabs/etabs.component';
import { Mechanical3dprintingComponent } from './mechanical3dprinting/mechanical3dprinting.component';
import { MxroadComponent } from './mxroad/mxroad.component';
import { RevitComponent } from './revit/revit.component';
import { SketchUpComponent } from './sketch-up/sketch-up.component';
import { SolidworksComponent } from './solidworks/solidworks.component';
import { StaddproComponent } from './staddpro/staddpro.component';
import { UnigraphicsComponent } from './unigraphics/unigraphics.component';



const routes: Routes = [
  { path: 'ansys-training-institute-guntur', component: AnsysComponent,
data: {
  title: "ANSYS Course in Guntur ANSYS Online Training.",
  description: "Ansys Course in Guntur Offered by Nipuna Technologies is the most powerful Ansys Training with Certified Trainers, Affordable fees, Certification at ANSYS Courses Online in Guntur."
} },
{ path: 'Autocad-training-institute-guntur', component: AutocadComponent,
data: {
  title: "AutoCAD Course in Guntur | AutoCAD Training | AutoCAD Training Online in Guntur.",
  description :"Are you looking for an AutoCAD Course in Guntur? Join Nipuna Technologies for the best AutoCAD Certification Course provides AutoCAD Training in AutoCAD 2D/3D (Mechanical, CIVIL, Electrical)."
} },
{ path: 'autocad-mechanical-training-institute-guntur', component: AutocadMechanicalComponent,
data: {
  title: "Mechanical AutoCAD  Course in Guntur AutoCAD online course.",
  description : "Accelerate your career with the Best Mechanical AutoCAD Course in Guntur at Nipuna Technologies. Our AutoCAD online course for mechanical engineering  offers 15+ Modules, 10+ Certifications, & 100% Placements Assistance. Learn an AutoCAD software course to master the advanced concepts in AutoCAD. "
} },

  { path: 'autocad-civil-3d-training-institute-guntur', component: Autocadcivil3dComponent,
  data: {
    title: "AutoCAD Civil 3D Training in Guntur, AutoCAD Civil 3D.",
    description : "AutoCAD Civil 3D Training in Guntur at Nipuna Technologies helps you master the AutoCAD Civil 3D Software advanced concepts. Our AutoCAD Civil 3D Course in Guntur Offers Real-Time Projects with Expert Trainers."
  } },

  { path: 'autocad-3dsmax-training-institute-guntur', component: Autocadcivil3dsmaxComponent,
  data: {
    title: "3Ds Max    Course in Guntur, 3ds Max Training in Guntur.",
    description : "Nipuna Technologies offers  3Ds Max Course in Guntur. We provide comprehensive 3ds Max Training in Guntur, 3ds Max Course Online  with 100% placement assistance."
  } },
  {path:'cad-courses-training-institute-guntur',component: CadCoursesComponent,
  data: {
    title: "CAD Courses in Guntur, Online CAD Course, CAD Training in Guntur.",
    description : "Nipuna Technologies Offers Civil CAD Software Courses and Mechanical CAD Software Courses that covers all modules of CAD courses in Guntur. ETABS, Civil 3D, AutoCAD Civil, AutoCAD Mechanical."
  }},
  {path:'catia-training-institute-guntur',component:CatiaComponent,
  data: {
    title: "CATIA V5  Course in Guntur CATIA Online Courses.",
    description : "Join CATIA V5 Course in Guntur at Nipuna Technologies offers CATIA Training and all the Mechanical CAD Courses with 100% placement assistance, Expert trainers, 100% Lab Sessions."
  }},
{ path: 'cnc-machine-training-institute-guntur', component: CNCMachineComponent,
data: {
  title: "CNC Machine Course in Guntur CNC Machine Operating Training.",
  description : "Learn CNC Machine Course in Guntur at Nipuna Technologies offers CNC Machine Operating Training and the course curriculum is designed & conducted by certified expert trainers with 8+ years of experience."
} },
{path:'creo-training-institute-guntur',component:CreoComponent,
data: {
  title: "CREO Course in Guntur CREO Online Course,CREO Training in Guntur.",
  description : "Learn CREO Course in Guntur at Nipuna Technologies and it offers CREO Online Course, CREO Training in Guntur teaches in-depthCreo Parametric concepts."
}},
{ path: 'etabs-training-institute-guntur', component: ETABSComponent,
data: {
  title: "ETABS Course in Guntur ETABS Course Online.",
  description : "Looking for an ETABS Course in Guntur? Nipuna Technologies is the best ETABS Software Training Institute in Guntur with 100% placement Support. Get a specialised ETABS Course Online from basic to advanced level concepts from Expert trainers."
} },
{ path: 'autocad-mechanical-3dprinting-training-institute-guntur', component: Mechanical3dprintingComponent,
data: {
  title: "3D Printing Courses in Guntur, 3D Printing Online Course.",
  description : "Nipuna Technologies offers 3D Printing Courses in Guntur, Learn 3D Printing Online Course in Guntur with 100% Placement, Industry Expert Trainers, 80% Lab Sessions."
} },
{ path: 'mx-road-training-institute-guntur', component: MxroadComponent,
data: {
  title: "MX Road Course in Guntur MX Road Course Online.",
  description : "Are you looking for an MX Road Course in Guntur? Join Nipuna Technologies for the best MX Road Design Training in Guntur with 100% Placements for Freshers and Experienced Professionals. "
} },
{ path: 'revit-architechure-training-institute-guntur', component: RevitComponent,
data: {
  title: "Revit Training in Guntur, Revit Architecture Course in Guntur.",
  description : "Nipuna Technologies Offers Job Oriented and Placement focused Revit Training in Guntur. We Offer training on Civil AutoCAD, Etabs, Sketch-up, MX- Road, Staad Pro, 3Ds Max, Revit Architecture"
} },
{ path: 'sketch-up-training-institute-guntur', component: SketchUpComponent,
data: {
  title: "Sketch Up Course in Guntur Google SketchUp Certification.",
  description : "Learn Sketch Up Course in Guntur at Nipuna Technologies. Google SketchUp Certification Training Courses in Guntur provides real-time and placement focused Sketch-Up Online Course in Guntur."
} },
{ path: 'solidworks-training-institute-guntur', component: SolidworksComponent,
data: {
  title: "SolidWorks Training In Guntur, Online Course for SolidWorks.",
  description : "Join SolidWorks Training in Guntur at Nipuna Technologies offers SolidWorks Courses and all the Mechanical CAD courses with 100% placement assistance, Expert trainers, 100% Lab Sessions."
} },
{ path: 'staddpro-training-institute-guntur', component: StaddproComponent,
data: {
  title: "STAAD Pro Course in Guntur STAAD Pro Training Classes.",
  description : "Learn STAAD Pro Course in Guntur at Nipuna Technologies provides 100% JOB Oriented, Free Demo Class, Real-time projects, Lowest Fees Guaranteed build your Career in AutoCAD field.."
} },
{ path: 'unigraphics-training-institute-guntur', component: UnigraphicsComponent,
data: {
  title: "Unigraphics Course in Guntur Unigraphics Nx Course, Unigraphics.",
  description : "Nipuna Technologies is the best DTP Training Institute in Guntur, learn online DTP classes in Guntur offers DTP Course on DTP PACKAGE (Photoshop, Corel Draw, Page Maker, Scanning, Printing) from Industry Experts."
} },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadcoursesRoutingModule { }
