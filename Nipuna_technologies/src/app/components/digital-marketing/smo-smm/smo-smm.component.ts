import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-smo-smm',
  templateUrl: './smo-smm.component.html',
  styleUrls: ['./smo-smm.component.scss']
})
export class SMOSMMComponent implements OnInit {


	smo_smmFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What is a Facebook Ads course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Facebook marketing is an online platform that offers an array of highly targeted ads as well as organic content, which allows businesses to promote their services and products in the hands of a large crowd. In the past decade, Facebook has shifted from the most well-known social network online to one of the largest marketplaces.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "How long will it take you to learn Facebook Ads courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 30 days. We schedule a flexible timetable for our students, you can choose any batch. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": " How much does the Facebook Ads course cost?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>The fees Structure of Facebook Marketing Courses is economical. However, please contact us to obtain a discount on this course fees. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I learn the  Facebook Ad Courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Undoubtedly, Nipuna Technologies is the best online Facebook Marketing course in Guntur. We also offer job-oriented and placement Focused classrooms and Online classes in Guntur with more prominence given to real-time exposure and hands-on experience by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. This training program at Nipuna technologies is specially designed for both Graduates and working professionals. </p> "
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
		  "name": "Who is my Trainer?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Your instructor has 8+ years of experience as a certified Facebook Marketing professional.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": " Do I get placement assistance after Facebook marketing Training Programs?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Yes, we provide 100% placement assistance & will help you to get a job as soon as you complete the courses. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What if I miss Facebook Ads classes?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> You will never miss any session. You can select any one of two options: 1. View the class recordings that we send through mail daily. 2. You can attend the missed session of Facebook marketing in any other live batch. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What services could I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>After completion of this course, we provide a Facebook Ads course and assist you with resume preparation, interview preparation, and placement opportunities. </p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "How much does it cost to get Facebook certified?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> The Facebook (Meta) Certification cost for professional exams is approximately $150 USD and for associate exams is $99 USD. The final cost may differ by country. You'll see the final cost displayed during the checkout process.</p> "
		  }
		}]
	  }
  
	smo_smmBreadcrumb =
	{
	  "@context": "https://schema.org/", 
	  "@type": "BreadcrumbList", 
	  "itemListElement": [{
		"@type": "ListItem", 
		"position": 1, 
		"name": "https://www.nipunatechnologies.com/DigitalMarketing/facebook-marketing-training-institute-guntur",
		"item": "https://www.nipunatechnologies.com/assets/images/course/facebook-marketing-course-guntur(smo&smm).webp"  
	  }]
	}
	
  
	smo_smmreviews=
	{
	  "@context": "https://schema.org/",
	  "@type": "Review",
	  "itemReviewed": {
		"@type": "organization",
		"image": "https://www.nipunatechnologies.com/assets/images/course/facebook-marketing-course-guntur(smo&smm).webp",
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
		"name": "Naveen"
	  },
	  "reviewBody": "<p> I have enrolled in Social Media Marketing training at Nipuna Technologies. The instructors here are extremely supportive and make sure I comprehend every single aspect very easily. The other benefit is the level of the friendly manner of dealing with doubts. The third benefit is that this institution provides additional support for students who struggle with grasping the concept. They also provided me with recordings of sessions that helped me to understand the course in practice. </p>",
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