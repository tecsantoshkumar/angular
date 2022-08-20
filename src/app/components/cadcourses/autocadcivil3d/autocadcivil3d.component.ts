import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-autocadcivil3d',
  templateUrl: './autocadcivil3d.component.html',
  styleUrls: ['./autocadcivil3d.component.scss']
})
export class Autocadcivil3dComponent implements OnInit {

	autocad_civil3dFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": " What are the qualifications for the Civil 3D Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<ul><li> Any graduates, Non-graduates who want to pursue their career of building Civil Engineering Projects</li><li> BE / B. Tech in Civil passed students to get into the Civil engineering field.</li><li> Anyone can join this course who wants to advance his or her career in civil engineering</li><li> A candidate who would like to restart their career after an educational gap.</li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "What is the CIVIL 3D course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The AutoCAD Civil 3D software is designed to help Civil Engineers and Surveyors who are looking to benefit from using the AutoCAD Civil 3D software with dynamic, interactive design capabilities. The AutoCAD Civil 3D software permits the rapid development of alternative designs with its modeling-based design tools.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Is it easy to learn CIVIL 3D?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately, 2 to 3 months for aspirants to be proficient in the area of Civil 3D. Also, you should well-planned the strategy, and by taking the initiative to follow it, you will be able to significantly speed up the learning process and speed up the timeline of practicing the concepts.How do I get a CIVIL 3D certificate? </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How do I get a CIVIL 3D certificate?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The certification for this CIVIL 3D course is CSI certification. While pursuing a course in Civil 3D, having these certifications can help you stand out from the applicant pool when applying for jobs. </p> <p> At the end of the course, we provide a certificate. Being certified by Nipuna Technologies, the students and working candidates will be directly eligible to grab lucrative job opportunities in the industrial design sector. With expert guidance from our training team, the students will gain practical knowledge to reach new heights. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Why CIVIL 3D is used?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> AutoCAD Civil 3D is compatible with Building Information Modeling (BIM) methods and helps reduce the time required for designing, analyzing, and then making modifications.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": "Why CIVIL 3D is used in civil engineering?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>AutoCAD Civil 3D was introduced by Autodesk. It is widely used by civil engineers in developing projects, drafting and documenting, defining workflows, analyzing, surveying and mapping. </p>"
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
		  "name": "Which institute is best for the Civil 3D Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Undoubtedly. Nipuna Technologies is the best institute for Civil 3D courses. We also offer job-oriented and placement Focused classrooms and Online classes in Guntur giving more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Labs, and well Experienced Trainers. This Training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "How long does it take to learn Civil 3D?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "Can I learn Civil 3D online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Yes, you can learn Civil 3D online Instructor-led also. As we provide all the courses both Classroom & online sessions.</p> "
		  }
		}]
	  }
	  
  
	autocad_civil3dBreadcrumb =
	{
	  "@context": "https://schema.org/", 
	  "@type": "BreadcrumbList", 
	  "itemListElement": [{
		"@type": "ListItem", 
		"position": 1, 
		"name": "https://www.nipunatechnologies.com/CADCourses/autocad-civil-3d-training-institute-guntur",
		"item": "https://www.nipunatechnologies.com/assets/images/course/autocad-civil-3d-training-guntur.webp"  
	  }]
	}
	
  
	autocad_civil3dreviews=
	{
	  "@context": "https://schema.org/",
	  "@type": "Review",
	  "itemReviewed": {
		"@type": "organization",
		"image": "https://www.nipunatechnologies.com/assets/images/course/autocad-civil-3d-training-guntur.webp",
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
		"name": "Chaitanya"
	  },
	  "reviewBody": "<p> It was an amazing experience to participate in the Civil 3D course in Guntur at Nipuna Technologies. Instructors were hands-on and demonstrated live-time demonstrations. I believe that Nipuna technologies are the most excellent institute to learn about the latest technologies. I am grateful for your highly rated service. </p>",
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