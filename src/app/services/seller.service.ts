import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(
    private httpClient: HttpClient) { }
  
  SignUp(seller: User) {
    return this.httpClient.post('http://localhost:3000/seller', seller)
  }
}
