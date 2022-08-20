import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-cad-courses',
  templateUrl: './cad-courses.component.html',
  styleUrls: ['./cad-courses.component.scss']
})
export class CadCoursesComponent implements OnInit {

	cadcoursesFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What is the qualification of CAD Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> The minimum qualification for CAD training is Class 12/HSC and also Any graduates, Non-graduates who want to pursue their career in Designing world-class designs.</p> <ul> <li> BE / B. Tech in Mechanical and Civil passed students to get started into the Mechanical and Civil engineering field. </li> <li> Anyone can join this course who wants to advance his or her career in Mechanical engineering</li> <li> A candidate who would like to restart their career after an educational gap.</li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "What is CAD Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> The CAD software is used to develop, optimize, and design products. These products can be final goods or intermediate goods that are used in other products. </p> <p> The vast majority of CAD applications are used for the design of machinery and tools used in the manufacturing of components. They also play an important role in the drafting and design of all types of buildings, including small residential structures (houses) and large commercial and industrial structures (hospitals, factories), and many more </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What do you learn in CAD Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<ul>  <li> AutoCAD (Civil)</li>	<li> Civil 3D</li><li> ETABS</li><li> Sketch up</li><li> M X Road</li>	<li> Staad Pro</li><li> 3Ds Max</li><li> Revit Architecture </li><li> AutoCAD (Mechanical)</li><li> Unigraphics</li>	<li> 3D printing</li><li> Solid Works</li><li> Catia</li><li> CNC</li>	<li> CREO</li><li> Ansys</li></ul> "
		  }
		},{
		  "@type": "Question",
		  "name": " How long will it take you to learn CAD Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 90 days. We schedule a flexible timetable for our students, you can choose any batch. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How much does CAD Training cost?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The fees Structure of CAD Training is economical. However, please contact us to obtain the discounted course fees.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I learn CAD Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Undoubtedly, Nipuna Technologies is a great CAD Coaching center in Guntur. We also offer job-oriented and placement Focused classrooms and Online CAD training classes in Guntur with more prominence given to real-time exposure and hands-on experience by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. This training program at Nipuna technologies is specially designed for both Graduates and working professionals. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Can I study CAD Training online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Nipuna Technologies provides classrooms and CAD Online course Instructor-led training in Guntur. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Who is my Trainer?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Your instructor has 9+ years of experience as a certified CAD professional. </p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What if I miss CAD classes?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> You will never miss any session. You can select any one of two	options:</p><p> 1. View the class recordings that we send through maildaily.</p>	<p> 2. You can attend the missed session of Multimedia training in any other live batch.</p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "Do I get placement assistance after CAD Training Programs?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Yes, we provide 100% placement assistance & will help you to get a job as soon as you complete the courses.</p> "
		  }
		}]
	  }
	  
	
  
	cadcoursesBreadcrumb =
	{
	  "@context": "https://schema.org/", 
	  "@type": "BreadcrumbList", 
	  "itemListElement": [{
		"@type": "ListItem", 
		"position": 1, 
		"name": "https://www.nipunatechnologies.com/CADCourses/cad-courses-training-institute-guntur",
		"item": "https://www.nipunatechnologies.com/assets/images/course/CAD_Training_in_Guntur.webp"  
	  }]
	}
	
  
	cadcoursesreviews=
	{
	  "@context": "https://schema.org/",
	  "@type": "Review",
	  "itemReviewed": {
		"@type": "organization",
		"image": "https://www.nipunatechnologies.com/assets/images/course/CAD_Training_in_Guntur.webp",
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
		"name": "Bhavya"
	  },
	  "reviewBody": "<p> I joined the AutoCAD course at Nipuna Technologies and it is a great and most excellent training institute in Guntur for AutoCAD training. After my graduation, I am from a Civil background. I was very confused about my carrier one of my brothers told me to learn AutoCAD and Civil 3D courses and he suggested that Nipuna technologies are the best to join. I attended the demo classes and I decided and want to learn self-paced with the most experienced, excellent, and real-time trainers. My humble thanks to the trainer, he is an excellent trainer in teaching CAD classes. I recommend everyone to join Nipuna Technologies for CAD training. Now I am no more confused about my career, thanks to the Management team of Nipuna technologies and once again thanks to the trainer.  </p>",
	  "publisher": {
		"@type": "Organization",
		"name": "Nipuna Technologies"
	  }
	}
	  

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

	ngOnInit(): void {
	  
	  // this.canonicalService.setCanonicalURL();
  
	  
	  this.metaTagService.addTags([
		{name: 'keywords',content: 'Angular SEO Integration, Music CRUD, Angular Universal'},
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
