import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';
@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent implements OnInit {


	pythonFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What are the Minimum Educational Qualifications required for Python language Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<ul><li> Freshers, Graduates, & non-graduates.</li><li> Degree holders who have any basic computer knowledge.</li>	<li>   Anyone who can join this language Python classes is interested in programming.	</li> </ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "What is the course in Python?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Python is a computer-programming language which is used for various purposes such as website creation, applications creation, automating operations and analysis of data. Python is a general-purpose language. This means that it is not restricted or specialised for a specific issue. It can used to develop a wide range of applications</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How much does  Python Training cost?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The fee structure of the C-language course is economical. However, please contact us to obtain the discounted course fees.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I learn Python?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> At Nipuna Technologies, you can increase the proficiency levels of your programming skills by learning python training programs.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How quickly can I learn Python?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 4 months. We schedule a flexible timetable for our students, you can choose any batch.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Who is my Trainer?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>Your instructor has 9+ years of experience as a certified professional.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Do I get placement assistance after the Training Programs?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "What if I miss a Session",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> You will never miss any session. You can select any one of two options:</p> <p> 1. View the class recordings that we send through mail	daily.</p> <p> 2. You can attend the missed session of the course in any other live batch. </p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "Will I Get A Python Course Completion Certification From Nipuna Technologies?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Yes, after successfully completing the course you will be awarded a course completion certificate from Nipuna Technologies.</p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "Will you provide training on live projects during these courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Yes, you will work on a live project under the guidance of our	trainer. Once you complete your project you will receive a Certificate. </p>  "
		  }
		}]
	  }
	  
  

  pythonBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/Python-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/best-python-training-institute-guntur-with-placement.webp"  
    }]
  }
  

  pythonreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/best-python-training-institute-guntur-with-placement.webp",
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
      "name": "Irfan Basha"
    },
    "reviewBody": "<p> Nipuna Technologies provided training to me for a Python courses. The trainer is extremely knowledgeable and experienced in the subject. He will explain each of the python courses concepts, and clear up any doubts. This course was extremely helpful. The best place to learn Python. Excellent management, flexible with times. Thank you to the trainer and the management team. </p>",
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
		  content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Afordable fees, placements, Guntur, Programming languages,',
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
