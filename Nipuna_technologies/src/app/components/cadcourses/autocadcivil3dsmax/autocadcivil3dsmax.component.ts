import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-autocadcivil3dsmax',
  templateUrl: './autocadcivil3dsmax.component.html',
  styleUrls: ['./autocadcivil3dsmax.component.scss']
})
export class Autocadcivil3dsmaxComponent implements OnInit {

	autocad_civil3dsmaxFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What is a 3Ds Max course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> 3Ds Max is a popular software designed for Engineers/Architects that offers a full range of 3d animation, modeling V-ray rendering, and compositing options to a wide range of industries such as Engineering or Architectural design motion graphics, game design,editing films, and many more. </p><p> It is developed by Autodesk Media and Entertainment. It's also known as 3D Studio and 3D Studio Max. It is a highly-specialized 3D computer graphics program that is exclusively used to create 3D models animations, games, and pictures.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "What is the qualification in 3Ds Max Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The course has been created and designed specifically for architects and designers who want to create top-quality and precise architectural designs.</p> "
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
		  "name": "Which institute is best for 3Ds Max Course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Undoubtedly. Nipuna Technologies is the best institute of 3Ds Max courses. We also offers job-oriented and placement Focused classrooms and Online classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Lab and well Experienced Trainers. This Training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How long is a 3Ds Max course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": "Can I learn 3Ds Max in 3 months?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Approximately, 2 to 3 months for aspirants to be proficient in the area of 3Ds Max. Also, you should well-planned the strategy, and by taking the initiative to follow it, you will be able to significantly speed up the learning process and speed up the timeline of practicing the concepts.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Is it possible to learn 3Ds Max Courses Online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Yes, you can learn 3Ds Max online also. As we provide all the courses both Classroom & online sessions. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Which certification is best for 3Ds Max courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The certification for this course is Autodesk certifications While pursuing a career in 3Ds Max, having certifications can help you stand out from the applicant pool when applying for jobs.</p>  "
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
		  "name": "Do I get placement assistance after 3Ds Max Programs?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p>  "
		  }
		}]
	  }
	  
  
	autocad_civil3dsmaxBreadcrumb =
	{
	  "@context": "https://schema.org/", 
	  "@type": "BreadcrumbList", 
	  "itemListElement": [{
		"@type": "ListItem", 
		"position": 1, 
		"name": "https://www.nipunatechnologies.com/CADCourses/autocad-3dsmax-training-institute-guntur",
		"item": "https://www.nipunatechnologies.com/assets/images/course/3ds-max-course-guntur.webp"  
	  }]
	}
	
  
	autocad_civil3dsmaxreviews=
	{
	  "@context": "https://schema.org/",
	  "@type": "Review",
	  "itemReviewed": {
		"@type": "organization",
		"image": "https://www.nipunatechnologies.com/assets/images/course/3ds-max-course-guntur.webp",
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
		"name": "Vani"
	  },
	  "reviewBody": "<p> I took a 3Ds Max course in Guntur at Nipuna Technologies. I would like to express my appreciation to my instructor particularly for his patience while taking my questions and providing an answer. The class recordings sessions help me to succeed in the practical exercises. The training was well-organized and professionally produced. I was able to study on my own because of the adaptability and user-friendly content. </p>",
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