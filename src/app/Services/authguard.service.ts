import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // alert("hi")
    if(sessionStorage.getItem('usersession') == null){
      this.router.navigate(['/#'], {queryParams:{requestUrl: state.url}})
      return false
    } else{

      let role =  route.data.roles as Array<string>
      
      var userR:string = JSON.parse(sessionStorage.getItem('usersession') as string)
      let count:number = 0
      for(let i = 0; i< role.length; i++){
        if(role[i] == userR){
          // console.log('role'+role+'--- session'+sessionStorage.getItem('userRole'))
          count += 1
        }
        
      }
      if(count == 1){
        return true
      }
      else{
        this.router.navigate(['/'])
        return false
      }
      
    }
  }

}