import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-sem',
  templateUrl: './sem.component.html',
  styleUrls: ['./sem.component.scss']
})
export class SEMComponent implements OnInit {


	semFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "Google Ads Course Eligibility?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The minimum eligibility criteria of the Google Ads course is to be a graduate. No need for any technical background for taking the PPC training. </p><p> Any fresh graduates, non-graduates, or diploma holders can take thecourse by all means.</p><ul><li> Students or Working Professionals </li><li> Branding / Sales / Marketing Professionals</li><li> Graduates, non-graduates, or diploma holders</li><li> Entrepreneurs, Startups</li><li> Housewives</li> </ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "How long will it take you to learn Google Ads courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 30 days. We schedule a flexible timetable for our students, you can choose any batch.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What is a Google Ads course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Google Ads is an online advertising program developed by Google. With Google Ads, anyone can make online ads that get people to click on ads when they're looking for the services and products you provide. Google Ads can assist you to advertise via a search engine and display networks (websites that are part of the Google network). In this course, you'll learn how to evaluate your business goals, how to structure your accounts, how to create campaigns or ad groups, and create ads to target search engines, as well as display	networks, search for keywords, and bidding to optimize the campaign for maximum return on investment, while tracking results and the reporting. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How much does the Google Ads course cost?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The fees Structure of Google Ads Courses is economical. However,please contact us to obtain a discount on this course fees. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I learn the Google Ads Courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Undoubtedly, Nipuna Technologies is the best online Google Ads course in Guntur. We also offer job-oriented and placement Focused classrooms and Online classes in Guntur with more prominence given to real-time exposure and hands-on experience by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. This training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": "Can I study Google Ads online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Nipuna Technologies provide classrooms and Online Instructor-led training in Guntur, join our 60 hrs. Training with expert trainers to learn this course and ask questions. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Who is my Trainer?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Your instructor has 9+ years of experience as a certified WordPress professional </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Do I get placement assistance after Google Ads Training Programs?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Yes, we provide 100% placement assistance & will help you to get a job as soon as you complete the courses.</p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What if I miss Google Ads classes?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> You will never miss any session. You can select any one of two options:</p> <p> 1. View the class recordings that we send through mail daily.</p> <p> 2. You can attend the missed session of SEM courses in any other live batch. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What services could I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> After completion of this course, we provide an SEM course Certificate and assist you with resume preparation, interview preparation, and placement opportunities.</p>  "
		  }
		}]
	  }

  semBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/DigitalMarketing/Sem-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/google-ads-course-guntur.webp"  
    }]
  }
  

  semreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/google-ads-course-guntur.webp",
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
      "name": "Imran"
    },
    "reviewBody": "<p> I attended a demo course at Nipuna Technologies. our Trainer has given a clear idea about the Google Ads course. After that, I began my classes, and as I had hoped, the trainer provided excellent assignments and live projects(Adwords and SMM) to make sense of the subject better and also to clarify my doubts. I highly recommend this institute who are eager to take on Digital Marketing to get good knowledge </p>",
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