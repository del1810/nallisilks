import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public common: CommonService) { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 5,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  bannerOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 5,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }

  similarProduct = this.common.similarProducts;

  newArrival = this.common.newArrivals;

  recentView = this.common.recentViewed;

  slides1 = this.common.trending;

  stars = this.common.ratingDetails;

  addToCart(value, data){
    if(value == 0) {
      data.cartValue = 1;
      ++this.common.cartCount
    } else {
      data.cartValue = 0;
      --this.common.cartCount;
    }

    console.log(this.common.cartCount)

  }

  addToFavour(value, data){
    if(value == 0) {
      data.favValue = 1;
      ++this.common.favVount
    } else {
      data.favValue = 0;
      --this.common.favVount;
    }

    console.log(this.common.favVount, data)

  }

}
