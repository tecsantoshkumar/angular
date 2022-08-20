import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/Services/alert.service';
import { ApiService } from 'src/app/Services/api.service';

@Component({
	selector: 'app-get-register',
	templateUrl: './get-register.component.html',
	styleUrls: ['./get-register.component.scss']
})
export class GetRegisterComponent implements OnInit {
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
	CurrentDate: any;
	public formData = new FormData();
	constructor(private router: Router, private route: ActivatedRoute, private datepipe: DatePipe,
	  private service: ApiService, private alter: AlertService) {
		 this.CurrentDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
  
	}
  
  
	ngOnInit() {
	}

	onSubmit() {
	
	
	this.formData.append('name', this.owner.name);
		this.formData.append('email', this.owner.email);
	this.formData.append('mobile', this.owner.mobile);
	this.formData.append('msg', this.owner.msg);
	this.formData.append('course', this.owner.course);
	this.formData.append('Created',  this.CurrentDate);
	this.service.ContactForms(this.formData).subscribe(res => {
			this.apiresponse = res;
		
			if (res.status = true) {
				this.alter.successSwalnew('','Will Get Back Soon');
				//this.alter.dangerSwalnewws('Error', 'Please Enter Username');
			}
			else{
				this.alter.dangerSwalnewws('','Please contact throught Whats app');
			}
		   },);
			
			// this.ticketForm.reset();
		 }
  }