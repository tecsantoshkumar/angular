import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DtpComponent } from './dtp/dtp.component';
import { GraphicdesigningComponent } from './graphicdesigning/graphicdesigning.component';
import { MayaComponent } from './maya/maya.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { Multimedia3dsmaxComponent } from './multimedia3dsmax/multimedia3dsmax.component';
import { PhotoshopComponent } from './photoshop/photoshop.component';
import { VfxComponent } from './vfx/vfx.component';

const routes: Routes = [
      // multimedia

      { path: 'Dtp-training-institute-guntur', component: DtpComponent,
      data: {
        title: "DTP Training Institute in Guntur | Online DTP classes in Guntur.",
        description : "Nipuna Technologies is the best DTP Training Institute in Guntur, learn online DTP classes in Guntur offers DTP Course on DTP PACKAGE (Photoshop, Corel Draw, Page Maker, Scanning, Printing) from Industry Experts."
      } },
      { path: 'Graphicdesigning-training-institute-guntur', component: GraphicdesigningComponent,
      data: {
       title: "Graphic Designing Course in Guntur | Graphic Designing Training.",
       description : "Looking for a Graphic Designing Course in Guntur? Nipuna Technologies is the best Graphic Designing training institute with 100% placement Support. Get specialized Graphic Designing Training from basic to advanced level concepts in Adobe tools from our Expert trainers."
     } },
     { path: '3d-maya-training-institute-guntur', component: MayaComponent,
     data: {
       title: "3d-maya training institute in Guntur | MAYA  Course in Guntur.",
       description : "Nipuna Technologies, Multimedia courses training Institute, IT Courses, live projects, Affordable fees, placements, Guntur, OOPS Concepts, Inheritance, Polymorphism, Multithreading.Animation of 3D objects, Modeling, Shading, Texturing, Dynamic effects."
     } },
     { path: 'multimedia-training-institute-guntur', component: MultimediaComponent,
     data: {
       title: "Multimedia Courses in Guntur, Online Multimedia Course.",
       description : "Learn Multimedia Courses in Guntur at Nipuna Technologies 3D Animation · Graphic Design · CorelDRAW · Audio & Video Editing · Visual Effects (VFX) · 3D Studio Max · DTP · Photoshop."
     } },

     { path: '3dsmax-training-institute-guntur', component: Multimedia3dsmaxComponent,
     data: {
       title: "Multimedia 3Ds Max Course in Guntur 3ds Max Course Online.",
       description : "Nipuna Technologies offers  3Ds Max Course in Guntur. We provide comprehensive 3ds Max Training in Guntur, 3ds Max Course Online  with 100% placement assistance."
     } },

    
     { path: 'photoshop-training-institute-guntur', component:  PhotoshopComponent,
     data: {
       title: "Photoshop Training institute Guntur| Photoshop Course in Guntur.",
       description : "Learn Photoshop Course in Guntur at Nipuna Technologies offers online photoshop course and the training is designed & conducted by Photoshop experts with 8+ years of experience in the Photoshop domain."
     } },
  { path: 'Vfx-training-institute-guntur', component: VfxComponent,
      data: {
        title: "Vfx training institute in Guntur | Vfx Course in Guntur.",
        description : "Looking for the best course for VFX  in Guntur? Visit Nipuna Technologies. It is one of the best VFX online training institutes in Guntur with 100% placements."
      } },
    
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultimediaRoutingModule { }
