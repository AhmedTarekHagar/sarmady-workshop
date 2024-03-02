import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private _ProductsService: ProductsService, private _Title: Title) { }

  ngOnInit(): void {
    this.products = this._ProductsService.productsList;
    this._Title.setTitle(`Product: ${this.selectedProduct}`);
  }

  products!: Product[];
  selectedProduct: string = '';

  innerCarouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
    animateIn: 'animate__bounce',
    animateOut: 'animate__bounce'
  }

  outerCarouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
    animateIn: 'animate__rotateInDownRight',
    animateOut: 'animate__rotateOutUpLeft'
  }

  colorIndex: number = 1;

  updateColorIndex(index: number): void {
    this.colorIndex = index;
  }

  prevSlide(carousel: any): void {
    this.outerCarouselOptions.animateIn = 'animate__rotateInDownRight';
    this.outerCarouselOptions.animateOut = 'animate__rotateOutUpLeft';
    carousel.next();
  }

  nextSlide(carousel: any): void {
    this.outerCarouselOptions.animateOut = 'animate__rotateInDownRight';
    this.outerCarouselOptions.animateIn = 'animate__rotateOutUpLeft';
    carousel.prev();
  }

  changeImage(carousel: any, index: number): void {
    carousel.next();
  }

  videoURL!:string;
  updateVideoURL(newURL:string):void {
    this.videoURL = newURL.split('v=')[1];
  }
}