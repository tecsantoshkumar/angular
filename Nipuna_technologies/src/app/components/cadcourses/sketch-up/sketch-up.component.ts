import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-sketch-up',
  templateUrl: './sketch-up.component.html',
  styleUrls: ['./sketch-up.component.scss']
})
export class SketchUpComponent implements OnInit {


	sketchupFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What are the qualifications for SketchUp Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The course has been created and designed specifically for Designing Architecture Landscape Design, Real Estate Development, Furniture’s & Building. </p> <ul> <li> Any graduates, Non-graduates who want to pursue their career of building world-class steel designs. </li> <li> BE / B. Tech in Civil passed students to get into the Civil engineering field. </li> <li> Anyone can join this course who wants to advance his or her career in civil engineering </li> <li> A candidate who would like to restart their career after an educational gap. </li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "What is the SketchUp course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> SketchUp is a software program that can be that is used to create a variety of 3D modeling tasks, including interior design, architectural design landscape architecture, video game design are a few examples of the applications. Google Sketchup is widely used in Designing Architecture Landscape Design, Real Estate Development, Furniture Building, and Other Design Professions. Sketchup provides instructions on how to create a 3D Model Print it, share it, & export it to a professional design Software. It also Exports to Google Earth to Create a 3D animated tour.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Can you learn SketchUp online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Yes, you can learn SketchUp online Instructor-led also. As we provide all the courses both Classroom & online sessions. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How do I create a certificate in SketchUp?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The certification for this course is Trimble certifications While pursuing a career in Google SketchUp having certifications can help you stand out from applicant pool when applying for jobs. </p> <p> At the end of the course, we provide a certificate. Being certified by Nipuna Technologies, the students and working candidates will be directly eligible to grab lucrative job opportunities in the industrial design sector. With expert guidance from our training team, the students will gain practical knowledge to reach new heights. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What is the best way to learn SketchUp?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Approximately, 2 to 3 months for aspirants to be proficient in the area of SketchUp. Also, you should well-planned the strategy, and by taking the initiative to follow it, you will be able to significantly speed up the learning process and speed up the timeline of practicing the concepts.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I practice this SketchUp course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Which institute is best for SketchUp Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Undoubtedly. Nipuna Technologies is the best institute of SketchUp courses. We also offer job-oriented and placement Focused classrooms and Online classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Labs, and well Experienced Trainers. This Training program at Nipuna technologies is specially designed for both Graduates and working professionals </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "How long does it take to learn SketchUp?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What are services can I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> After completion of this training, we assist you with resume preparation, interview preparation, and placement opportunities.</p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "Do I get placement assistance after SketchUp Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p> "
		  }
		}]
	  }
	  

  sketchupBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/CADCourses/sketch-up-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/sketchup-course-guntur.webp"  
    }]
  }
  

  sketchupreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/sketchup-course-guntur.webp",
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
      "name": "Lakshmi"
    },
    "reviewBody": "<p> I enrolled in the SketchUp course in Nipuna Technologies. It is a very informative course structure and I got a job after the course. The greatest thing was the trainer's methods of teaching and I have to say that he has made the concepts of the course easy. Practical learning and industrial applications, and a full-on practical knowledge. Each time I had a problem, the trainer was there to assist in clearing my doubts. Institute also gave me job opportunities frequently and great support for placement. </p>",
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