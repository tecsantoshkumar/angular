import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-catia',
  templateUrl: './catia.component.html',
  styleUrls: ['./catia.component.scss']
})
export class CatiaComponent implements OnInit {


	catiaFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What are the qualifications for CATIA V5 Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Any graduates, Non-graduates who want to pursue their career in building world-class part designs and assembly designs. </p> <ul><li> BE / B. Tech in Mechanical passed students to get into the	Mechanical engineering field. </li> <li> Anyone can join this course who wants to advance his or her career in Mechanical engineering</li><li> A candidate who would like to restart their career after aneducational gap.</li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": " How long does it take to learn CATIA",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 60 days. We schedule a flexible timetable for our students, you can choose any batch. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What is the CATIA  course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> CATIA V5 or Computer Aided Three Dimensional Application is an extremely powerful 3D parametric solid modeling application created by Dassault Systemes. It allows the creation of high-quality mechanical items. It lets users design shapes using 3D sketching tools and visualization capabilities. An important feature is its design, engineering, and engineering capabilities can be extremely beneficial to the manufacturing of products </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How do I get a CATIA certificate?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The certification for this CATIA course are having three Certifications. While pursuing a career in CATIA, having certifications can help you stand out from the applicant pool when applying for jobs. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Why CATIA  is used?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> CATIA allows users to design shapes and reach a higher level of complexity of surfaces through its 3D drawing and visualizing capabilities. With CATIA software, designers can adopt an integrated system engineering approach. They can perform requirements engineering, system design, detailed simulation, and modeling to control the complicated process of development.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": " Why CATIA  is used in Mechanical engineering?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> CATIA facilitates the rapid development of high-quality mechanical items. Engineers can perform digital prototyping, analysis, and quality and performance simulations for any product design prior to	its product development phase. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I practice this course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Do I get placement assistance after CATIA Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>Yes, we provide 100% placement assistance & will help you to get a job as soon as you complete the courses. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": " What if you miss CATIA classes?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> You will never miss any session. You can select any one of two	options:</p>	<p> 1. View the class recordings that we send through mail	daily.</p> <p> 2. You can attend the missed session of this training in any other live batch. </p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What services could I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "  <p> After completion of this training, we assist you with resume preparation, interview preparation, and placement opportunities.</p> "
		  }
		}]
	  }
	  
  

  catiaBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/CADCourses/catia-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/catia-v5-course-guntur.webp"  
    }]
  }
  

  catiareviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/catia-v5-course-guntur.webp",
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
      "name": "Nirmala"
    },
    "reviewBody": "<p> Nipuna Technologies is the most popular instructor-led online software course training institution. I took this CATIA V5 training at Guntur. I had a wonderful experience with this Institute's Training staff, including their skilled trainers, and their 24x7 assistance. Thank you to all the Nipuna Technologies team </p>",
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