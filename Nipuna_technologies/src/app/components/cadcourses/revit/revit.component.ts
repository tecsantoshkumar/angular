import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-revit',
  templateUrl: './revit.component.html',
  styleUrls: ['./revit.component.scss']
})
export class RevitComponent implements OnInit {

	revitFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What are the qualifications for Revit Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The course has been created and designed specifically for architects, MEP engineers, structural engineers, and builders to work with architectural design. </p><ul>	<li>  Any graduates, Non-graduates who want to pursue their career of building world-class BIM. </li><li> BE / B. Tech in Civil passed students to get into the Civil engineering field. </li><li> Anyone can join this course who wants to advance his or her	career in civil engineering </li><li> A candidate who would like to restart their career after aneducational gap. </li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "What is the Revit course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Revit Architecture, a Building Information Modeling (BIM) software application developed by Autodesk. The software was specifically designed for structural engineers, architect’s contractors, engineers, and structural engineers. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Can you learn Revit online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Yes, you can learn Revit online Instructor-led also. As we provide all the courses both Classroom & online sessions. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How do I create a certificate in Revit?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The certification for this course is Autodesk certifications While	pursuing a career in Revit having certifications can help you stand	out from the applicant pool when applying for jobs.</p> <p> At the end of the course, we provide a certificate. Being certified	by Nipuna Technologies, the students and working candidates will be directly eligible to grab lucrative job opportunities in the industrial design sector. With expert guidance from our training team, the students will gain practical knowledge to reach new heights.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I practice this Revit course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": "Which institute is best for Revit Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Undoubtedly. Nipuna Technologies is the best institute of Revit courses. We also offer job-oriented and placement Focused classrooms and Online classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Labs, and well Experienced Trainers. This Training program at Nipuna technologies is specially designed for both Graduates and working professionals </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "How long does it take to learn Revit?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "What are services can I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> After completion of this training, we assist you with resume preparation, interview preparation, and placement opportunities.</p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What if you miss Revit classes?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> You will never miss any session. You can select any one of two options:</p><p> 1. View the class recordings that we send through mail daily.</p> <p> 2. You can attend the missed session of Revit courses in any other live batch. </p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "Do I get placement assistance after Revit Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p>  "
		  }
		}]
	  }
	  
  revitBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/CADCourses/revit-architechure-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/revit-training-guntur.webp"  
    }]
  }
  

  revitreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/revit-training-guntur.webp",
      "name": "Nipuna Technologies",
     
      "telephone": "+91 7997927111",
      "address" :{
        "@type": "PostalAddress",
        "door-no" : " 6-4-35, 1st Floor",
  
        "streetAddress": "4/1 Arundelpet",
        "addressLocality": " Opposite Sai Grand,Guntur",
        
        "postalCode": "522002",
        "addressState": "Andhrapradesh, Guntur"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    
    "author": {
      "@type": "Person",
      "name": "Naga lakshmi"
    },
    "reviewBody": "<p> I joined a Revit Architecture class on Nipuna Technologies. Very helpful to learn about BIM development. It provided a comprehensive outline of BIM and its subsequent application in the industry. The trainer has a thorough grasp of the subject matter and is very skilled. He can teach the entire concept of the course, and he has cleared all my doubts. I gained a lot of knowledge and gained an in-depth understanding of Revit Software. This institute is the top institute to offer the Revit Architecture course. The staff is extremely helpful by offering the proper guidance in the lab sessions and scheduling flexible times for students. </p>",
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