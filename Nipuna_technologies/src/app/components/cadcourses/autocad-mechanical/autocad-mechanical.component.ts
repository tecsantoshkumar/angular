import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-autocad-mechanical',
  templateUrl: './autocad-mechanical.component.html',
  styleUrls: ['./autocad-mechanical.component.scss']
})
export class AutocadMechanicalComponent implements OnInit {

	autocad_mechanicalFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What are the qualifications for AUTOCAD Courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<ul><li> BE / B. Tech in Mechanical passed students to get into theMechanical engineering field. </li><li> Anyone can join this course who wants to advance his or hercareer in Mechanical engineering</li><li> A candidate who would like to restart their career after aneducational gap.</li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "How long does it take to learn AUTOCAD?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 60 days. We schedule a flexible timetable for ourstudents, you can choose any batch.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What are the AUTOCAD courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> AutoCAD is a part of CAD software that was developed by Autodesk and is geared toward professional use for creating manufacturing plans for various projects. AutoCAD is a versatile tool that is used in a variety of industries, the initial version of the software had only primitive objects, such as circles, polygons, or arcs, as well as text to create complex objects. The software later came to allow custom objects via an interface for application programming. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Is it easy to learn AUTOCAD?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> It is Easy to use learn AutoCAD, especially design-oriented individuals can learn any software. so, taking the time to learn AutoCAD designing is a necessary skill for Mechanical Engineers.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How do I get an AUTOCAD certificate?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The certification for this AUTOCAD Training is Autodesk certification. While pursuing a career in AUTOCAD, havingcertifications can help you stand out from the applicant pool whenapplying for jobs.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": "Can I study Autocad online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Nipuna Technologies provide classrooms and Online Instructor-led training in Guntur, join our 60 hrs. Training with expert trainers to learn this course and ask questions. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Why AUTOCAD is used in Mechanical engineering?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Mechanical CADD integrates various courses, including industry-specific software for CAD that is utilized by Mechanical Engineers for accomplishing preliminary tasks like 3D modeling and Designing, Drafting Prototyping, Performance, and Safety Analysis.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What services could I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>After completion of this training, we assist you with resume preparation, interview preparation, and placement opportunities.</p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "Do I get placement assistance after AUTOCAD Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Yes, we provide 100% placement assistance & will help you to get a job as soon as you complete the courses.</p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What if you miss AUTOCAD classes?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> You will never miss any session. You can select any one of two options:</p> <p> 1. View the class recordings that we send through mail daily.</p> <p> 2. You can attend the missed session of this training in any other live batch. </p> "
		  }
		}]
	  }
	  
	
  
	autocad_mechanicalBreadcrumb =
	{
	  "@context": "https://schema.org/", 
	  "@type": "BreadcrumbList", 
	  "itemListElement": [{
		"@type": "ListItem", 
		"position": 1, 
		"name": "https://www.nipunatechnologies.com/CADCourses/autocad-mechanical-training-institute-guntur",
		"item": "https://www.nipunatechnologies.com/assets/images/course/mechanical-autocad-course-guntur.webp"  
	  }]
	}
	
  
	autocad_mechanicalreviews=
	{
	  "@context": "https://schema.org/",
	  "@type": "Review",
	  "itemReviewed": {
		"@type": "organization",
		"image": "https://www.nipunatechnologies.com/assets/images/course/mechanical-autocad-course-guntur.webp",
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
		"name": "Krishna"
	  },
	  "reviewBody": "<p> I have completed AutoCAD Mechanical Course from Nipuna Technologies. It provides the training was informative and instructive. The course was very good, and the instructor had a good understanding the concepts of CAD Courses. The institute is equipped with good infrastructure for classrooms and the material is great and efficient. This training has enabled me to gain a thorough understanding of AutoCAD. I personally suggest that people sign up with Nipuna Technologies for all CAD courses. </p>",
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
