import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  constructor(private sellerService: SellerService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  SignUp(seller: User) {
    console.log(seller);
    this.sellerService.SignUp(seller).subscribe((result) => {
      if (result) {
        this.router.navigate(['seller-home']);
      }
    });
  }

}
