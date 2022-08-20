import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-etabs',
  templateUrl: './etabs.component.html',
  styleUrls: ['./etabs.component.scss']
})
export class ETABSComponent implements OnInit {


	etabsFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": " What is the ETABS course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The ETABS is known as Extended Three-Dimensional Analysis of Building System. It is a highly sophisticated and useful special-purpose analysis and design program specifically designed to work with construction systems. Massive and complex models of buildings are easily adapted by integrating systems. The ETABS modeling is the notion that multi-story structures typically contain similar or identical floor plans that are repeated on a vertical basis.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Is it easy to learn ETABS?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately, 2 to 3 months for aspirants to be proficient in the area of ETABS. Also, you should well-planned the strategy, and by taking the initiative to follow it, you will be able to significantly speed up the learning process and speed up the timeline of practicing the concepts.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How do I get an ETABS certificate?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> The certification for this ETABS course is CSI certification. While pursuing a career in ETABS, having certifications can help you stand out from the applicant pool when applying for jobs. </p> <p> At the end of the course, we provide a certificate. Being certified by Nipuna Technologies, the students and working candidates will be directly eligible to grab lucrative job opportunities in the industrial design sector. With expert guidance from our training team, the students will gain practical knowledge to reach new heights. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Why ETABS is used?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> ETABS software is widely utilized to analyze concrete shear walls as well as frame structures made of concrete. It is widely praised for its dynamic and static analysis of frames that span multiple stories as well as shear wall structures. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Why ETABS is used in civil engineering?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> The ETABS online CSI Certification training is the best method for civil engineers to increase their knowledge of handling Response Spectrum analysis and design of Response History Analysis simplified lateral processes, and the ability to perform Push-over analysis with ease.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I practice this course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": " Which institute is best for ETABS Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Undoubtedly. Nipuna Technologies is the best institute of ETABS courses. We also offer job-oriented and placement Focused classrooms and Online classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Labs, and well Experienced Trainers. This Training program at Nipuna technologies is specially designed for both Graduates and working professionals. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How long does it take to learn ETABS?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "Can I learn ETABS online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Yes, you can learn ETABS online Instructor-led also. As we provide all the courses both Classroom & online sessions. </p> "
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
	  
  

  etabsBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/CADCourses/etabs-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/etabs-course-guntur.webp"  
    }]
  }
  

  etabsreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/etabs-course-guntur.webp",
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
      "name": "Varshith"
    },
    "reviewBody": "<p>  I attended an ETABS course at Nipuna Technologies. The trainer has a good understanding of the subject and is extremely knowledgeable. He is able to teach each and every concept of the course and cleared all my doubts. I learned a lot and gained in-depth knowledge of the ETABS Software. The best institute that offers ETABS training. The management team here is excellent in helping with proper guidance and scheduling flexible times for the students. </p>",
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