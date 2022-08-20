import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { TallyGstComponent } from './components/pages/AllCourses/tally-gst/tally-gst.component';
import { CadcoursesComponent } from './components/cadcourses/cadcourses.component';
import { ITCOURSESComponent } from './components/itcourses/itcourses.component';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing.component';
import { SpokenEnglishComponent } from './components/pages/AllCourses/spoken-english/spoken-english.component';
import { MultiMediaMainComponent } from './components/multi-media-main/multi-media-main.component';
import { ComputernetworkingComponent } from './components/computernetworking/computernetworking.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SocialmediablogComponent } from './components/pages/socialmediablog/socialmediablog.component';
import { AwstoolblogComponent } from './components/pages/awstoolblog/awstoolblog.component';



const routes: Routes = [
    { path: '', component: HomeDemoOneComponent,
  data:{
    title: "Best Software Training Institutes in Guntur with 100% Placements."
  } },
  { path: 'faq', component: FaqPageComponent,
    data: {
        title: "FAQ About Online Training."
      } },
    
  
      { path: 'blog', component: BlogPageComponent,
      data: {
          title: "Blog  With Nipuna Technologies"
        } },
    { path: 'socialmediablog', component: SocialmediablogComponent },
    { path: 'aws-tool-blog', component: AwstoolblogComponent },


  
    { path: 'contact', component: ContactPageComponent,
    data: {
        title: 'Contact us With Nipuna Technologies',
        description: 'Include an email and phone number so visitors can get in touch with you on their first attempt.'
      }
},
    { path: 'about', component: AboutPageComponent,
    data: {
        title: "Welcome to About us page Training Institute"
      } },
    {path: 'login', component: LoginPageComponent},
    {
        path: 'ITCourses', component: ITCOURSESComponent,
        children: [{ path: '', loadChildren: () => import('./components/itcourses/itcourses.module').then(m => m.ITCOURSESModule) },]
    },
    {
        path: 'CADCourses', component: CadcoursesComponent,
        children: [{ path: '', loadChildren: () => import('./components/cadcourses/cadcourses.module').then(m => m.CadcoursesModule) },]
    },
    {
        path: 'DigitalMarketing', component: DigitalMarketingComponent,
        children: [{ path: '', loadChildren: () => import('./components/digital-marketing/digital-marketing.module').then(m => m.DigitalMarketingModule) },]
    },
    {
        path: 'MultiMedia', component: MultiMediaMainComponent,
        children: [{ path: '', loadChildren: () => import('./components/multi-media-main/multimedia.module').then(m => m.MultimediaModule) },]
    },

    {
        path: 'Networking', component: ComputernetworkingComponent,
        children: [{ path: '', loadChildren: () => import('./components/computernetworking/computernetworking.module').then(m => m.ComputernetworkingModule) },]
    },
    { path: 'tally-training-institute-guntur', component: TallyGstComponent,
    data: {
        title: "Tally Course in Guntur ",
        description : "Best TALLY Prime with Training Institute in Guntur. Latest Tally Prime Erp E-way Bill, Payroll, TDS, TCS, MIS, GST. Tally. ERP Courses. Tally training We providing 100% Placement Support."
      } },

    { path: 'spoken-english-training-institute-guntur', component: SpokenEnglishComponent,
    data: {
        title: "Spoken English Course in Guntur "
      } },
    {
        path: 'admin', component: AdminDashboardComponent,
        children: [{ path: '', loadChildren: () => import('./components/admin-dashboard/admin.module').then(m => m.AdminModule) },]
    },

 { path: '**', component: NotFoundComponent } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' }
        // , {preloadingStrategy: NoPreloading}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }