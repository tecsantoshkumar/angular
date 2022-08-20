import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadcoursesRoutingModule } from './cadcourses-routing.module';
import { CommonsModule } from '../common/common.module';
import { CNCMachineComponent } from './cnc-machine/cnc-machine.component';
import { Autocadcivil3dsmaxComponent } from './autocadcivil3dsmax/autocadcivil3dsmax.component';
import { Autocadcivil3dComponent } from './autocadcivil3d/autocadcivil3d.component';
import { AutocadMechanicalComponent } from './autocad-mechanical/autocad-mechanical.component';
import { AutocadComponent } from './autocad/autocad.component';

import { AccordionModule } from 'ngx-accordion';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { TabsModule } from 'ngx-tabset';
import { AnsysComponent } from './ansys/ansys.component';
import { CreoComponent } from './creo/creo.component';
import { ETABSComponent } from './etabs/etabs.component';
import { Mechanical3dprintingComponent } from './mechanical3dprinting/mechanical3dprinting.component';
import { MxroadComponent } from './mxroad/mxroad.component';
import { RevitComponent } from './revit/revit.component';
import { SketchUpComponent } from './sketch-up/sketch-up.component';
import { SolidworksComponent } from './solidworks/solidworks.component';
import { StaddproComponent } from './staddpro/staddpro.component';
import { UnigraphicsComponent } from './unigraphics/unigraphics.component';
import { CatiaComponent } from './catia/catia.component';
import { CadCoursesComponent } from './cad-courses/cad-courses.component';
import { CadrelatedcourseComponent } from './cadrelatedcourse/cadrelatedcourse.component';


@NgModule({
  declarations: [CNCMachineComponent,
    Autocadcivil3dsmaxComponent,Autocadcivil3dComponent,AutocadMechanicalComponent,AutocadComponent,
    StaddproComponent,
    ETABSComponent,
    SketchUpComponent,
    RevitComponent,
  
    MxroadComponent,
    UnigraphicsComponent,
    SolidworksComponent,
    Mechanical3dprintingComponent,
    AnsysComponent,
    CreoComponent,
    CatiaComponent,
    CadCoursesComponent,
    CadrelatedcourseComponent,
  
  ],
  imports: [
    CommonModule,
    CadcoursesRoutingModule,CommonsModule,TabsModule, AccordionModule, NgxSimpleCountdownModule,
    NgxScrollTopModule, CarouselModule, 
  ]
})
export class CadcoursesModule { }
