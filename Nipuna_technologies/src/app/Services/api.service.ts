import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { API_BASE_URL, ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://nipunatechnologies.com/assets/Api_Main';

  constructor(private httpClient: HttpClient) { 
    
  }

  ContactForms(ticketForm: FormData): Observable<any> {
    return this.httpClient.post<any>('https://nipunatechnologies.com/assets/Api_Main/insert.php' ,ticketForm );
 }

  
Contactus(Jobpost: any): Observable<any> {
 
  const headerOptions = { headers: new HttpHeaders
    ({'Content-Type': 'application/json' })
  };
  return this.httpClient.post<any>(this.baseUrl  + '/DirectInsert_contactus/' ,Jobpost );
}

ContactForm(ticketForm: FormData): Observable<any> {
 

  return this.httpClient.post<any>('https://nipunatechnologies.com/assets/New/UploadImage.php' ,ticketForm );
}
 // /SelectAll_candidate/
 AllContactus(): Observable<any> {
  const headerOptions = { headers: new HttpHeaders
    ({'Content-Type': 'application/json' })
  };
  return this.httpClient.get<any>(this.baseUrl  + '/alldata.php');
}

Login(ticketForm: FormData): Observable<any> {
 
  const headerOptions = { headers: new HttpHeaders
    ({'Content-Type': 'application/json' })
  };
  return this.httpClient.post<any>('https://nipunatechnologies.com/assets/Api_Main/login.php' ,ticketForm );
}
}
