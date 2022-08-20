import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-cnc-machine',
  templateUrl: './cnc-machine.component.html',
  styleUrls: ['./cnc-machine.component.scss']
})
export class CNCMachineComponent implements OnInit {


	cnc_machineFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What are the qualifications for CNC Machine Courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Any graduates, Non-graduates who want to pursue their career in Creating world-class part designs and assembly designs. </p><ul><li> BE / B. Tech in Mechanical passed students to get into theMechanical engineering field. </li><li> Anyone can join this course who wants to advance his or hercareer in Mechanical engineering</li>	<li> A candidate who would like to restart their career after an	educational gap. </li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "What are the CNC Machine courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> CNC machines create parts for products all over the world in almost every industry. They produce products made of aluminum, plastics, metals wood, as well as other materials that are hard. The term CNC stands for Computer Numerical Control however, nowadays everybody calls it CNC.  CNC machining refers to the practice of employing a computer-driven machine tool to make a part made of solid material with the shape of a different</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Is it easy to learn CNC Machines?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> CNC Machine is quite easy to use when it comes to designing software for computers. If you put in the effort, then a maximum of three months will be enough to understand the entire course. You will be perfect in CNC Machine software only by practicing. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How do I get a CNC Machine certificate?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>  While pursuing a career in CNC machines, having certifications can help you stand out from the applicant pool when applying for jobs.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": " Where can I practice this course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": "Why CNC Machine is used?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> CNC machines are used to automate processes in various industries,such as auto manufacturing, metal fabrication electronics,agriculture, and electrical machine. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "How long does it take to learn a CNC Machine?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Yes, you can learn CNC Machine Online Instructor-led also. As we provide all the courses both Classroom & online sessions.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What are services can I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> After completion of this training, we assist you with resume preparation, interview preparation, and placement opportunities.</p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What if you miss CNC Machine classes?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> You will never miss any session. You can select any one of two options:</p> <p> 1. View the class recordings that we send through mail daily.</p> <p> 2. You can attend the missed session of CNC courses in any other live batch. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": " Do I get placement assistance after a CNC Machine Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p> "
		  }
		}]
	  }
	  
  

  cnc_machineBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/CADCourses/cnc-machine-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/cnc-machine-course-guntur.webp"  
    }]
  }
  

  cnc_machinereviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/cnc-machine-course-guntur.webp",
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
      "name": "Murali"
    },
    "reviewBody": "<p> I want to express my appreciation to the Nipuna Technologies team. for teaching informative content and practical classes to benefit students. I've completed the CAM, CAD, and practical CNC lathe classes, and hands-on work project, where I used a few tools that meet specifications for design and production. I am also grateful for the trainer who has helped to improve our technical abilities. </p>",
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