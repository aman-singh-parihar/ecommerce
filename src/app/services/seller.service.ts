import { Injectable } from '@angular/core';

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
