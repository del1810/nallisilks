import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public favVount = 0;
  public cartCount = 0;

  constructor() { }

  public newArrivals = [
    {img: "/assets/saree1.jpg", title: 'Kanchipuran saree', sub_title: 'Multi color', cartValue: 0, favValue: 0, rating: 4, price: 1000},
    {img: "/assets/saree2.jpeg" , title: 'Arakonam saree', sub_title: 'Red color', cartValue: 0, favValue: 0, rating: 3, price: 2000},
    {img: "/assets/saree1.jpg" , title: 'Phosphorus saree', sub_title: 'Blue color', cartValue: 0, favValue: 0, rating: 2, price: 1500},
    {img: "/assets/saree2.jpeg", title: 'Kanchipuran', sub_title: 'Multi red, black color', cartValue: 0, favValue: 0, rating: 5, price: 3000},
    {img: "/assets/saree1.jpg", title: 'Madurai saree', sub_title: 'white color', cartValue: 0, favValue: 0, rating: 4, price: 1000},
    {img: "/assets/saree2.jpeg", title: 'Rajastan saree', sub_title: 'green color', cartValue: 0, favValue: 0, rating: 1, price: 1050},
    {img: "/assets/saree1.jpg", title: 'Kanchipuran saree', sub_title: 'violet color', cartValue: 0, favValue: 0, rating: 4, price: 400}
  ];

  public similarProducts = [
    {img: "/assets/fasion1.jpg", title: 'Madurai saree', sub_title: 'white color', cartValue: 0, favValue: 0, rating: 4, price: 1000},
    {img: "/assets/fasion2.jpg", title: 'Arakonam saree', sub_title: 'Red color', cartValue: 0, favValue: 0, rating: 4, price: 2000},
    {img: "/assets/fasion3.jpg", title: 'Rajastan saree', sub_title: 'green color', cartValue: 0, favValue: 0, rating: 2, price: 3000},
    {img: "/assets/fasion4.jpg" , title: 'Phosphorus saree', sub_title: 'Blue color', cartValue: 0, favValue: 0, rating: 5, price: 4000},
    {img: "/assets/fasion5.jpg" , title: 'Phosphorus saree', sub_title: 'Blue color', cartValue: 0, favValue: 0, rating: 1, price: 2000}
  ];

  public recentViewed = [
    {img: "/assets/saree1.jpg", title: 'Madurai saree', sub_title: 'white color', cartValue: 0, favValue: 0, rating: 3, price: 1000},
    {img: "/assets/saree2.jpeg", title: 'Rajastan saree', sub_title: 'green color', cartValue: 0, favValue: 0, rating: 2, price: 1000},
    {img: "/assets/saree1.jpg", title: 'Kanchipuran saree', sub_title: 'violet color', cartValue: 0, favValue: 0, rating: 3, price: 5000},
    {img: "/assets/saree1.jpg", title: 'Kanchipuran saree', sub_title: 'Multi color', cartValue: 0, favValue: 0, rating: 5, price: 2000},
    {img: "/assets/saree2.jpeg" , title: 'Arakonam saree', sub_title: 'Red color', cartValue: 0, favValue: 0, rating: 4, price: 1001},
    {img: "/assets/saree1.jpg" , title: 'Phosphorus saree', sub_title: 'Blue color', cartValue: 0, favValue: 0, rating: 1, price: 2000},
    {img: "/assets/saree2.jpeg", title: 'Kanchipuran', sub_title: 'Multi red, black color', cartValue: 0, favValue: 0, rating: 4, price: 3000}
  ];

  public trending = [
    {img: "/assets/banner1.jpg"},
    {img: "/assets/banner3.jpg"},
    {img: "/assets/banner2.jpg"},
    {img: "/assets/banner4.jpg"}
  ];

  public ratingDetails = [
    {color: 'red', star: 1},
    {color: 'green', star: 2},
    {color: 'blue', star: 3},
    {color: 'yellow', star: 4},
    {color: 'pink', star: 5}
  ]
}
