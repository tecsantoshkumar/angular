import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-digitalmarketing',
  templateUrl: './digitalmarketing.component.html',
  styleUrls: ['./digitalmarketing.component.scss']
})
export class DigitalmarketingComponent implements OnInit {


	digitalmarketingFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": " What are the Qualifications for Digital Marketing course Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<ul><li> Students or Working Professionals </li><li> Branding  / Sales / Marketing Professionals </li>	<li> Entrepreneurs, Startups. </li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "What is the duration for Digital Marketing Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What are the fees Structure for Digital Marketing course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>The fees Structure of the course is economical. However, please contact us to obtain the discounted course fees. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Can I learn online Digital Marketing course ?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Yes, You can learn Digital Marketing online also. As we provide all the courses both Classroom & online sessions. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I practice a Digital Marketing courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>We provide A/C Class Rooms, High Configured Lab with well Experienced	Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What is the best Digital Marketing institute in Guntur?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Undoubtedly, Nipuna Technologies is the best institute of Digital	Marketing institute in Guntur. We also offers job-oriented and placement Focused classrooms & Online Digital Marketing classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. . The online Digital Marketing program at Nipuna technologies is specially designed for both Graduates and working professionals. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "How useful are Google Certifications?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> These Google Certifications provide authentic proof of your skill sets and help you to gain credit easily at the time of the	Interview. As Google is a widely used Search Engine, getting certified under Google will boost up your career path.  so that you can easily grab access to plenty of job opportunities upon the completion of any of the Google Certifications. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Is there any Free Google Certification?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Yes, all the Google Certification exams are free.</p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What is the cost of the Facebook Blueprint Certification?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>The cost of the Certification of Facebook Blueprint is USD 150 which is somewhere around 12000 in Indian rupees </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What if I miss an Digital Marketing class?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> You will never miss any session. You can select any one of the two options: 1. View the class recordings of this Courses that we send through mail daily. 2. You can attend the missed session of this training in any other live batch.</p>  "
		  }
		}]
	  }

  digitalmarketingBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/DigitalMarketing/digital-marketing-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/best-digital-marketing-training-institute-guntur.webp"  
    }]
  }
  

  digitalmarketingreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/best-digital-marketing-training-institute-guntur.webp",
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
      "name": "Viswa"
    },
    "reviewBody": "<p> Digital marketing course that Nipuna technologies offer is very unique and refreshing. My batch was super fun and lively, everyone here was very helpful and assisted each other. I want to thank Raja sir, my trainer, and the management team for helping me throughout the whole course, either its guidance or building confidence to crack the interviews. </p>",
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