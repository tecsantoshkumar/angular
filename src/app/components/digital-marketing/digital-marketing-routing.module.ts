import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SEMComponent } from './sem/sem.component';
import { SEOComponent } from './seo/seo.component';
import { SMOSMMComponent } from './smo-smm/smo-smm.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import {DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';

const routes: Routes = [
  { path: 'digital-marketing-training-institute-guntur', component:DigitalmarketingComponent,
  data: {
   title: "Best Digital Marketing Training Institute in Guntur.",
   description : "Nipuna Technologies is one of the  Best Digital Marketing Training Institute in Guntur provides training for all the modules such as Web Designing, Wordpress, Blogging, Facebook Marketing, Search Engine Optimization, Google ads, Email Marketing with 100% placements."
 } },
 { path: 'Sem-training-institute-guntur', component: SEMComponent,
 data: {
  title: "Best Sem Training Institute in Guntur | Sem training in Guntur.",
  description : "Nipuna Technologies offers a Google Ads course in Guntur . It also offers PPC training, keyword research, a detailed study of Search Engine Marketing, building paid ad campaigns, optimising, tracking, and remarketing."
} },
 { path: 'Seo-training-institute-guntur', component: SEOComponent,
 data: {
  title: "Best Seo Institute in Guntur | Seo-training course in Guntur.",
  description : "Nipuna Technologies is one of the best SEO training institutes in Guntur, offering SEO Courses in Guntur. We offer comprehensive SEO Training with placements."
} },
  
 { path: 'facebook-marketing-training-institute-guntur', component: SMOSMMComponent,
 data: {
  title: "Best facebook marketing Institute in Guntur | facebook marketing.",
  description : "Nipuna Technologies is the top and best institute in Guntur offers Social Media Marketing training with 100% placement assistance. Facebook marketing, Twitter marketing, Instagram Marketing, Youtube Marketing."
} },
 { path: 'wordpress-training-institute-guntur', component: WordpressComponent,
 data: {
  title: "Best wordpress Training Institute in Guntur.",
  description : "Build your own Website or blog with WordPress Course in Guntur at Nipuna Technologies and get trained on Live projects with expert trainers. 100% Placements."
} },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalMarketingRoutingModule { }
