import { NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TabsModule } from 'ngx-tabset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { CountUpModule } from 'ngx-countup';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { AccordionModule } from "ngx-accordion";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { InstructorsComponent } from './components/common/instructors/instructors.component';
import { GetStartedComponent } from './components/common/get-started/get-started.component';
import { UpcomingEventsComponent } from './components/common/upcoming-events/upcoming-events.component';
import { AchievementComponent } from './components/common/achievement/achievement.component';
import { GetRegisterComponent } from './components/common/get-register/get-register.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { CoursesComponent } from './components/common/courses/courses.component';
import { CategoriesComponent } from './components/common/categories/categories.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { AboutComponent } from './components/common/about/about.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { WidgetSidebarComponent } from './components/common/widget-sidebar/widget-sidebar.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';


import { OnlineclassesComponent } from './components/common/onlineclasses/onlineclasses.component';
import { AboutusComponent } from './components/common/aboutus/aboutus.component';
import { TallyGstComponent } from './components/pages/AllCourses/tally-gst/tally-gst.component';

import { CommingupclassesComponent } from './components/pages/AllCourses/commingupclasses/commingupclasses.component';
import { NoRightClickDirective } from './no-right-click.directive';


import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { ITCOURSESComponent } from './components/itcourses/itcourses.component';
import { CommonsModule } from './components/common/common.module';
import { CadcoursesComponent } from './components/cadcourses/cadcourses.component';
import { DigitalMarketingMainPageComponent } from './components/pages/AllCourses/digital-marketing-main-page/digital-marketing-main-page.component';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing.component';
import { WhychooseusComponent } from './components/pages/whychooseus/whychooseus.component';
import { ClassesComponent } from './components/pages/classes/classes.component';
import { SpokenEnglishComponent } from './components/pages/AllCourses/spoken-english/spoken-english.component';
import { MultiMediaMainComponent } from './components/multi-media-main/multi-media-main.component';
import { ComputernetworkingComponent } from './components/computernetworking/computernetworking.component';
import { AdminModule } from './components/admin-dashboard/admin.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './components/admin-dashboard/admin-navbar/admin-navbar.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { JsonLdComponent } from './components/pages/json-ld/json-ld.component';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { SocialmediablogComponent } from './components/pages/socialmediablog/socialmediablog.component';
import { AwstoolblogComponent } from './components/pages/awstoolblog/awstoolblog.component';
import { CadrelatedcourseComponent } from './cadrelatedcourse/cadrelatedcourse.component';




@NgModule({
    declarations: [

        AppComponent,
        HomeDemoOneComponent,
        BlogComponent,
        TestimonialsComponent,
        InstructorsComponent,
        GetStartedComponent,
        UpcomingEventsComponent,
        AchievementComponent,
        GetRegisterComponent,
        PartnerComponent,
        CoursesComponent,
        CategoriesComponent,
 HomeoneBannerComponent,
        AboutComponent,
        FaqComponent,
        ContactPageComponent,
        BlogPageComponent,
       
        NotFoundComponent,
        WidgetSidebarComponent,
        FaqPageComponent,
 RegisterPageComponent,
        AboutPageComponent,
        ComingSoonPageComponent,
        OnlineclassesComponent,
        AboutusComponent,
        TallyGstComponent,
 CommingupclassesComponent,
        NoRightClickDirective,
  ITCOURSESComponent,
             CadcoursesComponent,
             DigitalMarketingMainPageComponent,
             DigitalMarketingComponent,
             WhychooseusComponent,
         
     
             ClassesComponent,

             SpokenEnglishComponent,
           
        
             MultiMediaMainComponent,
                       ComputernetworkingComponent,AdminDashboardComponent,AdminNavbarComponent,LoginPageComponent, JsonLdComponent, SocialmediablogComponent, AwstoolblogComponent

    ],
    imports: [
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        CarouselModule, 
        FormsModule,
        ReactiveFormsModule,
        NgxSimpleCountdownModule,
        TabsModule,
        NgxScrollTopModule,CountUpModule,
        AccordionModule,CommonsModule,AdminModule,
        NgxGoogleAnalyticsModule.forRoot('UA-17886362-3'),
      
    NgxGoogleAnalyticsRouterModule.forRoot({ include: [ '/page-*' ] })
   
    ],
    providers: [DatePipe,Meta,Title],
    bootstrap: [AppComponent],
    exports: [ ]
})
export class AppModule { }