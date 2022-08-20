import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() { }
  basicSwal() {
    Swal.fire('', 'Hello world!');
  }

  successSwalnew(any: any, doc: any) {
    Swal.fire(any, doc, 'success');
  }
  successSwalneww(any:any, doc:any){
    Swal.fire({
      type: 'success',
      title: doc,
       text: '',
      showConfirmButton: false,
      timer: 1000})
  
  }
  dangerSwalnewws(any:any, doc:any){
    Swal.fire({
      type: 'error',
      title: doc,
      text: '',
      showConfirmButton: false,
      timer: 1000
    })
  
  }


  successSwal(any:any) {
    Swal.fire(any,  'success');
  }


  warningSwal() {
    Swal.fire('Good job!', 'No data avaliable', 'warning');
  }



  dangerSwal(any :any) {
    Swal.fire('oops!', 'No data avaliable', 'error');
  }
  infoSwal() {
    Swal.fire('Good job!', 'You clicked the button!', 'info');
  }

infooswal(any:any){
  Swal.fire({
    type: 'error',
    title: 'Cancelled',
    text: 'Your offer is safe 🙂',
    showConfirmButton: false,
    timer: 800
  })

}

}