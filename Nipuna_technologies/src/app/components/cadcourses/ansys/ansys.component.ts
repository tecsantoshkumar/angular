import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-ansys',
  templateUrl: './ansys.component.html',
  styleUrls: ['./ansys.component.scss']
})
export class AnsysComponent implements OnInit {


	ansysFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What education do you need for Ansys Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<ul><li> Any graduates, Non-graduates who want to pursue their career of Creating world-class engineering simulations. </li><li> BE / B. Tech in Mechanical passed students to get into the Mechanical engineering field.</li><li> Anyone can join this course who wants to advance his or her career in the Graphic design field.</li><li> Aspirants who would like to restart their career after an educational gap.</li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "How long will it take you to learn Google Ads courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "  <p> Approximately 60 days. We schedule a flexible timetable for our students, you can choose any batch.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "What is the Ansys course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Ansys Mechanical is a finite element analysis (FEA) tool that's extensively used to analyze and solve difficult mechanical issues. It is efficient in predicting the behavior of the parts in manufacturing industries as well as in real-world settings. ANSYS worldwide supports engineering simulation by delivering top-quality products in a shorter time frame through a more efficient information-based process. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "What is the full form of Ansys?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Ansys is known as Analysis Systems. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I learn the Ansys Courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Undoubtedly, Nipuna Technologies is the best online Ansys course in Guntur. We also offer job-oriented and placement Focused classrooms and Online classes in Guntur with more prominence given to real-time exposure and hands-on experience by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. This training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": "Can I study Ansys online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Nipuna Technologies provide classrooms and Online Instructor-led training in Guntur, join our 60 hrs. Training with expert trainers to learn this course and ask questions. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Is it easy to learn Ansys?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Ansys is quite easy to use when it comes to designing software for computers. If you put in the effort, then a maximum of three months will be enough to understand the entire course. You will be perfect in Ansys software only by practicing. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Why Ansys is used?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Ansys offers on Geometry creation, and then joining existing geometry, establishing the Finite Element Model, resolving the problem, and analyzing results. Rapid and precise analysis of rigid and flexible bodies, as well as precise results from analysis of physical phenomena by analyzing the mechanical system in its entirety, is possible using Ansys.</p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": " What if I miss Ansys classes?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> You will never miss any session. You can select any one of two options:</p> <p> 1. View the class recordings that we send through mail daily.</p> <p> 2. You can attend the missed session of Ansys courses in any other live batch. </p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What services could I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> After completion of this course, we provide an Ansys course Certificate	and assist you with resume preparation, interview preparation, and placement opportunities.</p>  "
		  }
		}]
	  }
	  
	
  
	ansysBreadcrumb =
	{
	  "@context": "https://schema.org/", 
	  "@type": "BreadcrumbList", 
	  "itemListElement": [{
		"@type": "ListItem", 
		"position": 1, 
		"name": "https://www.nipunatechnologies.com/CADCourses/ansys-training-institute-guntur",
		"item": "https://www.nipunatechnologies.com/assets/images/course/ansys-course-guntur.webp"  
	  }]
	}
	
  
	ansysreviews=
	{
	  "@context": "https://schema.org/",
	  "@type": "Review",
	  "itemReviewed": {
		"@type": "organization",
		"image": "https://www.nipunatechnologies.com/assets/images/course/ansys-course-guntur.webp",
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
	  "reviewBody": "<p> I really was impressed with the Ansys training I received on Nipuna Technologies, the course taught was amazing and efficient. I was awestruck by the manner in which the trainer guided me through the course. It was a safe and healthy learning environment and I'm pleased with the manner in which they taught the Ansys software tools that make my work extremely smooth. I strongly recommend this institution not just for Ansys but for all CAD classes. </p>",
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
