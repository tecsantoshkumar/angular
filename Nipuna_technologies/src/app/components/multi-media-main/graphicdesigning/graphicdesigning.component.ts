import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-graphicdesigning',
  templateUrl: './graphicdesigning.component.html',
  styleUrls: ['./graphicdesigning.component.scss']
})
export class GraphicdesigningComponent implements OnInit {

	graphicdesigningFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": " Who can take Graphic Design Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<ul><li>	Fresher’s, Graduates, or non-graduates</li><li>	Degree holders who have basic computer knowledge</li><li>	Anyone can join this course who is interested in graphic designing</li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "What is the educational qualification required?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>A basic computer knowledge is required to start, there is no minimum education qualification required </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What is the duration of the Course ?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Approximately 60 Hrs </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Do I receive certificate after completion of the course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>Yes, all our students get certificate from institute after completing the Graphic design course at Nipuna Technologies </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Can I study  Facebook marketing online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Nipuna Technologies provide classrooms and Facebook Marketing Online Instructor-led training in Guntur,  join our 60 hrs. Training with expert trainers to learn this course and ask questions.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What is Nipuna Technologies Certified Professional Certificate?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>After completion of the course we will conduct a exam, and if you get 80% or more in the exam you will get Nipuna Technologies Certified Professional Certificate </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "How much is course Fees?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Please call us to get best discount on the course fees </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Why Choose Us for Graphic Designing Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <ul><li>   Excellent trainer with over 10+ years of experience </li><li>   5 Star rating from all our graphic design training students </li><li>   More than 90+ batches completed in Graphic Design course </li><li>   200+ tied up client companies to assist in placement </li><li>   The one stop destination for all your learning course’s needs </li><li>   Flexible and convenient time-table and back up sessions </li></ul>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "Can I pay course fees in installments?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Yes, definitely we offer 3-4 installments to pay the complete course fee. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": " Do I get placement assistance after the graphic design course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course </p>  "
		  }
		}]
	  }
	  
	
  
	graphicdesigningBreadcrumb =
	{
	  "@context": "https://schema.org/", 
	  "@type": "BreadcrumbList", 
	  "itemListElement": [{
		"@type": "ListItem", 
		"position": 1, 
		"name": "https://www.nipunatechnologies.com/MultiMedia/Graphicdesigning-training-institute-guntur",
		"item": "https://www.nipunatechnologies.com/assets/images/course/Graphic_Designing.webp"  
	  }]
	}
	
  
	graphicdesigningreviews=
	{
	  "@context": "https://schema.org/",
	  "@type": "Review",
	  "itemReviewed": {
		"@type": "organization",
		"image": "https://www.nipunatechnologies.com/assets/images/course/Graphic_Designing.webp",
		"name": "Nipuna Technologies",
	   
		"telephone": "+91 7997927111",
		"address" :{
		  "@type": "PostalAddress",
		  "door-no" : " 6-4-35, 1st Floor",
	
		  "streetAddress": "4/1 Arundelpet",
		  "addressLocality": " Opposite Sai Grand,Guntur",
		  
		  "postalCode": "522002",
		  "addressState": "Andhrapradesh"
		}
	  },
	  "reviewRating": {
		"@type": "Rating",
		"ratingValue": "5"    },
	  
	  "author": {
		"@type": "Person",
		"name": "Sri"
	  },
	  "reviewBody": "<p> I completed Graphic Designing Course in Guntur at Nipuna technologies and it was wonderful session. The trainer for these course is very good and his presentation was brilliant. I would definitely recommend my friends to do courses through Nipuna Technologies. Here the staff is very flexible to take the session at our convenient time. He not any gave explained the course but helped me the how to prepare for interviews </p>",
	  "publisher": {
		"@type": "Organization",
		"name": "Nipuna Technologies"
	  }
	}
	  
  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

	ngOnInit(): void {
	  
	  // this.canonicalService.setCanonicalURL();
  
	  
	  this.metaTagService.addTags([
		{
		  name: 'keywords',
		  content: 'Angular SEO Integration, Music CRUD, Angular Universal',
		},
		{ name: 'robots', content: 'index, follow' },
		{ name: 'author', content: 'Nipuna Technologies' },
  
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
