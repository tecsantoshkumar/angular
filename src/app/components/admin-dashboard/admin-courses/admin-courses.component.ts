import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.scss']
})
export class AdminCoursesComponent implements OnInit {
  patientlistLoader = false;
  apiresponse: any;
  cols!: any[];
  Contactus: any ; 
  Contactus1:any;
  cand:any;
  stringJson: any;
  stringObject: any;
  errorMessage: any;
  Role: any;
  private isLoading: boolean = false;
  // datePipe: any;
  // Created: any;
  constructor(private service: ApiService) {
    this.Role =sessionStorage.getItem('usersession');
    console.log('dajshgdjas' + this.Role);
    //	 this.Created = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    // userRole === 'Doctor'
   }
   

  ngOnInit(): void {
    this.getCandidates();

    this.cols = [
      { field: "contactusId", header: "S.no" },
        { field: "name", header: "Name" },
      { field: "email", header: "Email" },
      { field: "mobile", header: "Mobile No" },
      { field: "course", header: "Course" },
      { field: "msg", header: "Message" },
      {field: 'Created', header: 'Date' }
    ];
    
  }
 

  getCandidates(): void {
    this.patientlistLoader = true;
    this.service.AllContactus().subscribe((res: any) => {
        this.apiresponse = res;
        console.log('res' + this.apiresponse);
        if (this.apiresponse.Error == false) {

          this.Contactus = this.apiresponse;

          this.patientlistLoader = false;

        } else {
          this.patientlistLoader = false;
        }
      },
      (error: any) => {
        this.errorMessage = error as any;
        this.patientlistLoader = false;
      }

    );
  }




}

