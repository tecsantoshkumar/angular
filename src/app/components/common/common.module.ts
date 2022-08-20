import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ContactformComponent } from '../pages/AllCourses/contactform/contactform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';



@NgModule({
  declarations: [FooterComponent,NavbarComponent, ContactformComponent],
  imports: [
    CommonModule,RouterModule, FormsModule,
    ReactiveFormsModule,  NgxJsonLdModule
  ],
  exports:[FooterComponent,NavbarComponent, ContactformComponent,  NgxJsonLdModule]
})
export class CommonsModule { }
