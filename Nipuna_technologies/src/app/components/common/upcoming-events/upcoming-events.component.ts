import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/Services/alert.service';
import { ApiService } from 'src/app/Services/api.service';

@Component({
    selector: 'app-upcoming-events',
    templateUrl: './upcoming-events.component.html',
    styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {
  res1: any;
  email_user: any;
  emp_spinner: any = false;
  loading = false;
  owner: any = {};
  owner1: any = {};
  myDate = new Date();
  apiresponse: any = {};
  errorMessage: string | undefined;
  addpatientBtn = false;
  formattedDate: any;
  companyId_company: any;

  constructor(private router: Router, private route: ActivatedRoute, private datepipe: DatePipe,
    private service: ApiService, private alter: AlertService) {


  }


  ngOnInit() {
  }
  onSubmit(ContactForm: any) {
    this.emp_spinner = true;
    this.owner.msg_contactus = JSON.stringify(this.owner1);
    this.service.Contactus(this.owner).subscribe(
      (res: any) => {
        this.apiresponse = res;
        if (this.apiresponse.Error == false) {
          this.alter.successSwalneww('', 'Will Get back soon');
          this.router.navigate(['/page']); 
        } else {
          const errors = this.apiresponse.errors;

          this.alter.dangerSwalnewws('', this.apiresponse.Error);
        }
      },
      (error: any) => {
        this.errorMessage = error as any;
        this.alter.dangerSwalnewws('', this.apiresponse.Error);

      }
    );

  }
}