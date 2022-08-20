import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultimediaRoutingModule } from './multimedia-routing.module';
import { AccordionModule } from 'ngx-accordion';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { TabsModule } from 'ngx-tabset';
import { CommonsModule } from '../common/common.module';
import { DtpComponent } from './dtp/dtp.component';
import { GraphicdesigningComponent } from './graphicdesigning/graphicdesigning.component';
import { MayaComponent } from './maya/maya.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { PhotoshopComponent } from './photoshop/photoshop.component';
import { VfxComponent } from './vfx/vfx.component';
import { Multimedia3dsmaxComponent } from './multimedia3dsmax/multimedia3dsmax.component';


@NgModule({
  declarations: [     MultimediaComponent,
    GraphicdesigningComponent,
    DtpComponent,
    VfxComponent,
    MayaComponent,
    PhotoshopComponent,
    Multimedia3dsmaxComponent,],
  imports: [
    CommonModule,
    MultimediaRoutingModule, CommonModule,
    TabsModule, AccordionModule,
     NgxScrollTopModule, CarouselModule,CommonsModule
  ]
})
export class MultimediaModule { }
