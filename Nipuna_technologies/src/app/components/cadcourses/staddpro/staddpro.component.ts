import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-staddpro',
  templateUrl: './staddpro.component.html',
  styleUrls: ['./staddpro.component.scss']
})
export class StaddproComponent implements OnInit {

	staddproFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What is a STAAD course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> STAAD is an abbreviation of Structural Analysis and Design. STAAD Pro is one most popular software which is used to analyze and design structures such as towers, bridges, buildings as well as industrial, transportation as well as utility buildings. Designs can include any of the construction structures such as tunnels, bridges, culverts, piles, petrochemical facilities, and building materials such as concrete, timber cold-formed steel, and aluminum. STAAD is also known as STAAD Pro was created through Research Engineers International at Yorba Linda, CA in 1997. </p>"
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
		  "name": "Which institute is best for STAAD.Pro Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Undoubtedly. Nipuna Technologies is the best institute of STAAD.Pro courses. We also offer job-oriented and placement Focused classrooms and Online classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Labs, and well Experienced Trainers. This Training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What if you miss STAAD.Pro classes?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>ou will never miss any session. You can select any one of the two options: </p> <p>1. View the class recordings of this Course that we send through mail daily.</p> <p> 2. You can attend the missed session of this training in any other live batch.  </p> "
		  }
		},{
		  "@type": "Question",
		  "name": " How long does it take to learn STAAD pro?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How can I learn STAAD pro?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Approximately, 2 to 3 months for aspirants to be proficient in the area of STAAD.Pro. Also, you should well-planned the strategy, and by taking the initiative to follow it, you will be able to significantly speed up the learning process and speed up the timeline of practicing the concepts.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Can I learn STAAD Pro online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Yes, you can learn STAAD.Pro online Instructor-led also. As we provide all the courses both Classroom & online sessions. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Which certification is best for STAAD.Pro courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "  <p> The certification for this course is Bentley certifications While pursuing a career in STAAD.Pro, having certifications can help you stand out from the applicant pool when applying for jobs. </p> <p> At the end of the course, we provide a certificate. Being certified by Nipuna Technologies, the students and working candidates will be directly eligible to grab lucrative job opportunities in the industrial design sector. With expert guidance from our training team, the students will gain practical knowledge to reach new heights.</p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What are services can I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>After completion of this training, we assist you with resume preparation, interview preparation, and placement opportunities. </p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "Do I get placement assistance after STAAD Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p> "
		  }
		}]
	  }
	  
  

  staddproBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/CADCourses/staddpro-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/staddpro-course-guntur.webp"  
    }]
  }
  

  staddproreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/staddpro-course-guntur.webp",
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
      "name": "Shanthi"
    },
    "reviewBody": "<p> I joined STAAD.PRO online course at Guntur using Nipuna Technologies, the trainer is a highly experienced professional. His method of teaching each concept is unique and he gives each concept with live demonstrations. This is an excellent way to grasp the basic concepts of the course to be learned quickly. I'd like to express my gratitude to Nipuna Technologies and the trainer for helping me develop my abilities. </p>",
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
		{ name: 'author', content: 'Nipuna technologies' },


  
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