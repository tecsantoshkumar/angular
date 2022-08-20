import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-creo',
  templateUrl: './creo.component.html',
  styleUrls: ['./creo.component.scss']
})
export class CreoComponent implements OnInit {


	creoFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What are the qualifications for CREO Courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Any graduates, Non-graduates who want to pursue their career in building world-class part designs and assembly designs. </p> <ul> <li> BE / B. Tech in Mechanical passed students to get into the Mechanical engineering field. </li> <li> Anyone can join this course who wants to advance his or her career in Mechanical engineering</li> <li> A candidate who would like to restart their career after an educational gap.</li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "How long does it take to learn CREO?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 60 days. We schedule a flexible timetable for our students, you can choose any batch. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What are the CREO courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> CREO is a Software suite of programs that was developed by	Parametric Technology Corporation (PTC) to assist in the design of products. In the past, Creo was called Pro/Engineer (Pro E). It is a CAD/CAM/CAE-based 3D solid modeling software. Creo Parametric is utilized by mechanical engineers/designers to perform Solid modeling and assembly modeling Finite element analysis </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Is it easy to learn CREO?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> CREO is quite easy to use when it comes to designing software for computers. If you put in the effort, then a maximum of three months will be enough to understand the entire course. You will be perfect in CREO software only by practicing. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How do I get a CREO certificate?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> The certification for this CREO Training is PTC certification. While pursuing a career in CREO, having certifications can help you stand out from the applicant pool when applying for jobs.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": "Why CREO is used in Mechanical engineering?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Creo Parametric is utilized by mechanical engineers/designers to perform Solid modeling and assembly modeling Finite element analysis two-dimensional orthographic viewing sub-divisional and NURBS surfacing as well as parametric and direct modeling, as well as NC and tooling functions. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I practice this course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Do I get placement assistance after CREO Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>Yes, we provide 100% placement assistance & will help you to get a job as soon as you complete the courses. </p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What if you miss CREO classes?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> You will never miss any session. You can select any one of two options:</p> <p> 1. View the class recordings that we send through mail daily.</p> <p> 2. You can attend the missed session of this training in any other live batch. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What services could I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> After completion of this training, we assist you with resume preparation, interview preparation, and placement opportunities.</p>  "
		  }
		}]
	  }
	  

  creoBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/CADCourses/creo-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/creo-course-guntur.webp"  
    }]
  }
  

  creoreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/creo-course-guntur.webp",
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
      "ratingValue": "4"
    },
    
    "author": {
      "@type": "Person",
      "name": "Archana"
    },
    "reviewBody": "<p> Nipuna Technologies is one of the best Creo training institutes in Guntur. Trainers are very good at teaching as well as communicating with students this made me easy to learn the concepts they will teach an easy method of doing our designs. Perfect for any beginner interested in the design field. Counseling sessions helped me a lot to get clarity on the best career option for me. Thank you for the helpful nature and the professionalism of the staff. </p>",
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