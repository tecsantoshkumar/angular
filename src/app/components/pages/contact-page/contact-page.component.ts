import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/Services/alert.service';
import { ApiService } from 'src/app/Services/api.service';
import { FormGroup, FormControl } from '@angular/forms';


import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  owner: any = {};
  myDate = new Date();
  apiresponse: any;
  errorMessage: string | undefined;
  send_date=new Date();
  formattedDate : any;

  public formData = new FormData();
  constructor(private service: AlertService, private Contactservice: ApiService ,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta ) { 
    

  }

  
  ngOnInit() {
    
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
    )
      .subscribe(() => {
        var route = this.getChild(this.activatedRoute)
        var data = route.snapshot.data;
        console.log('Data' + data);
        this.titleService.setTitle(data.title);
        if (data.description) {
          this.metaService.updateTag({ name: 'description', content: data.description })
        } else {
          this.metaService.removeTag("name='description'")
        }
      })
  }
  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild)
      return this.getChild(activatedRoute.firstChild);
    else
      return activatedRoute;
  }
  onSubmit() {
    console.log("submit")
 
    this.formData.append('email', 'nallapaneni.saikrishna@gmail.com');
    this.formData.append('name_contactus', this.owner.name_contactus);
    this.formData.append('email_contactus', this.owner.email_contactus);
    this.formData.append('mobile_contactus', this.owner.mobile_contactus);
this.formData.append('Course', this.owner.Course);
this.formData.append('EmailID', this.owner.EmailID);

this.formData.append('Message', this.owner.Message);
    this.Contactservice.ContactForm(this.formData).subscribe((res: { status: boolean; }) => {
        this.apiresponse = res;
        console.log("submit", res);
        console.log('api response'+ this.apiresponse);
        if (res.status = true) {
          this.service.successSwal('Will get back soon');
         
        }else{
          this.service.dangerSwal('Error');
          
        }
       },);
     
     } 

}
