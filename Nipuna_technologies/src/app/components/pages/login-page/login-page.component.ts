import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AlertService } from 'src/app/Services/alert.service';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  res1:any;
  loading = false;
    owner: any = {};
    myDate = new Date();
    apiresponse: any={};
    errorMessage: string | undefined;
    addpatientBtn = false;
    formattedDate : any;
    passwordshown: boolean = false;
    passwordType: string= 'password';
    public formData = new FormData();
    constructor(private router: Router,private service: ApiService, private alter: AlertService) { 
    }
    public ticketForm: FormGroup = new FormGroup({
      email:new FormControl(),
      password:new FormControl(),
     
    })
    
    ngOnInit() {
    }
    
    onSubmit() {
      console.log("submit")
  this.loading = true;
      this.formData.append('email', this.owner.email);
      this.formData.append('password', this.owner.password);
  
      this.service.Login(this.formData).subscribe(res => {
        this.apiresponse = res;
   
          if (res.status === "200") {
            sessionStorage.setItem('usersession', JSON.stringify(this.apiresponse.data[0].userrole));
            this.router.navigate(['/admin/admin-courses']);
         
            this.alter.successSwalneww('','Login Successfully');
          }
          else{
            Swal.fire('Error', 'Please Enter Correct Details', 'error');
            
          }
         },);
  
       }
  
  
       public passwords(){
        if (this.passwordshown){
          this.passwordshown = false;
        this.passwordType= 'password';
        }
        else{
          this.passwordshown = true;
          this.passwordType= 'text';
        }
         }
       
  }
  
