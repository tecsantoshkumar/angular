import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalMarketingRoutingModule } from './digital-marketing-routing.module';
import { SEMComponent } from './sem/sem.component';
import { SEOComponent } from './seo/seo.component';
import { SMOSMMComponent } from './smo-smm/smo-smm.component';
import { CommonsModule } from '../common/common.module';
import { ITCOURSESRoutingModule } from '../itcourses/itcourses-routing.module';

import { AccordionModule } from 'ngx-accordion';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { TabsModule } from 'ngx-tabset';
import { WordpressComponent } from './wordpress/wordpress.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';


@NgModule({
  declarations: [   SEOComponent,
    SEMComponent,
    SMOSMMComponent,WordpressComponent, DigitalmarketingComponent],
  imports: [
    CommonModule,
    DigitalMarketingRoutingModule,ITCOURSESRoutingModule,TabsModule, AccordionModule, NgxSimpleCountdownModule,
    NgxScrollTopModule, CarouselModule,CommonsModule
  ]
})
export class DigitalMarketingModule { }
