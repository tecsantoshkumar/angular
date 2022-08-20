import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-awstoolblog',
  templateUrl: './awstoolblog.component.html',
  styleUrls: ['./awstoolblog.component.scss']
})
export class AwstoolblogComponent implements OnInit {

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

	ngOnInit(): void {
	  
	  this.canonicalService.setCanonicalURL();
  
	  
	  this.metaTagService.addTags([
		{
		  name: 'keywords',
		  content: 'Angular SEO Integration, Music CRUD, Angular Universal',
		},
		{ name: 'robots', content: 'index, follow' },
		{ name: 'author', content: 'Nipuna Technologies' },
		{ name: 'description', content: 'Ansys Course in Guntur Offered by Nipuna Technologies is the most powerful Ansys Training with Certified Trainers, Affordable fees, Certification at ANSYS Courses Online in Guntur.' },
		{ name: 'title', content: 'ANSYS    Course in Guntur ANSYS Training, ANSYS Courses Online in Guntur.' },

  
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }
	  ]);
	}  relatedCoursesSlides: OwlOptions = {
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