import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-relatedcourses',
  templateUrl: './relatedcourses.component.html',
  styleUrls: ['./relatedcourses.component.scss']
})
export class RelatedcoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  relatedCoursesSlides: OwlOptions = {
    items: 1,
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true
  }
}
