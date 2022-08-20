import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cadrelatedcourse',
  templateUrl: './cadrelatedcourse.component.html',
  styleUrls: ['./cadrelatedcourse.component.scss']
})
export class CadrelatedcourseComponent implements OnInit {

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
