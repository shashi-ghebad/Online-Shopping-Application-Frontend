import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  role :string ='';
  
  storeUserDetails(userData: string){
    sessionStorage.setItem('userData', userData);
  }

  retrieveUserDetails(){
    return sessionStorage.getItem('userData');
  }

  removeUserDetails(){
    sessionStorage.removeItem('userData');
  }
  setRole(role:string){
    sessionStorage.setItem('role', role);
  }
  getRole (){
    return sessionStorage.getItem('role');
  }
  removeRole(){
    sessionStorage.removeItem('role');
  }
  
}
