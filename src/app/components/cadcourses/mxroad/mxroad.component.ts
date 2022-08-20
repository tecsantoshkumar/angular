import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-mxroad',
  templateUrl: './mxroad.component.html',
  styleUrls: ['./mxroad.component.scss']
})
export class MxroadComponent implements OnInit {

	mxroadFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What are the qualifications for MX ROAD training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <ul><li> Any graduates, Non-graduates who want to pursue their career inDesigning world-class road designs. </li><li> BE / B. Tech in Civil passed students to get into the Civilengineering field.</li><li> Anyone can join this course who wants to advance his or her	career in civil engineering</li><li> A candidate who would like to restart their career after aneducational gap.</li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": " What is MX road?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> MX Road is an Excellent string advanced software application that isextensively used as a string-based modeling tool that enables thedesigner to develop a fast and precise design for all types ofroads.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Which of the software used Road design and analysis?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Road Design Software | Civil 3D | Autodesk Official. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Why MX ROAD is used?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The Mx Road software program is String Based Modeling tool that provides all the information is required to access 3D modeling for construction-driven engineering and transportation projects. It can support data acquisition and civil engineers designers' surveyors' system surveys by combining traditional engineering workflow for all kinds of field data. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Why MX ROAD is used in civil engineering?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> It is commonly used by designers, civil engineers Geotechnical engineers professional surveyors, stormwater/drainage/sewer design engineers, and engineers in civil engineering.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": "What are the Prerequisites of the training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> The Students should be aware of the modeling ethics.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I practice this course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "  <p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Which institute is best for MX ROAD Courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Undoubtedly. Nipuna Technologies is the best institute for MX ROAD courses. We also offer job-oriented and placement Focused classrooms and Online classes in Guntur giving more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Labs, and well Experienced Trainers. This Training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "How long does it take to learn MX ROAD?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": " Do I get placement assistance after MX ROAD Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p>  "
		  }
		}]
	  }
	  
  

  mxroadBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/CADCourses/mx-road-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/mx-road-course-guntur.webp"  
    }]
  }
  

  mxroadreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/mx-road-course-guntur.webp",
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
      "name": "Ravi"
    },
    "reviewBody": "<p> At first, I was hesitant to pursue the MX Road training. Even though the Internet has a wide range of information, there is a gap in learning and practicing. After joining the training at Nipuna Technologies. I gained everything I was hoping for. My trainer was able to give me all the help needed to address my questions. I am confident that such support isn't available elsewhere in Guntur. I would like to suggest Nipuna Technologies s to all my friends due to the training program, which is amazing and covers all the concepts of the training course. The course helped me get to an extent of knowledge where I could become a confident user of the tools available in the software.</p>",
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