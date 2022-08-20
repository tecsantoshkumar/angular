import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-pythoncoreandadvance',
  templateUrl: './pythoncoreandadvance.component.html',
  styleUrls: ['./pythoncoreandadvance.component.scss']
})
export class PythoncoreandadvanceComponent implements OnInit {


	pythoncoreandadvanceFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What will you learn in this Python training from the best institute for Python in Guntur?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<ul>	<li>	You will gain insights into Python Programming </li><li>	You will understand Python's object-oriented ideas, functions, and expressions</li><li>	SQLite, functions, and operations in Python</li><li>	You will learn to use Python for machine learning.</li><li>	Python code generation for Pig UDF and Hive UDF</li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": " Who should take advantage of the top Python training in Guntur?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<ul>	<li>	Managers of Business Intelligence and Project Managers </li>	<li>	Professionals in Software Development and ETL</li>	<li>	Professionals in Analytics</li><li>	Professionals in Big Data</li>	<li>	Those that intend to pursue a profession in this field</li></ul> "
		  }
		},{
		  "@type": "Question",
		  "name": " What are the requirements for enrolling in this Python course in Guntur",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Python does not require any prior expertise. You can enrol in our Python lessons in Guntur if you have some basic programming skills. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What career prospects are there after completing this Python training in Guntur?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Guntur is one of India's most populous cities and the country's information technology powerhouse. As a result, a large number of firms have made significant investments in Artificial Intelligence and other disciplines. So, if you want to advance in your job, selecting the best Python institute in Guntur may be really beneficial. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Why should you enrol in this Python training in Guntur?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <ul><li>	Its design and libraries give ten times the productivity of C, C++, or Java. </li>	<li>	In the United States, a Senior Python Developer may earn up to $102,000 per year.</li></ul>"

		  }
		},{
		  "@type": "Question",
		  "name": "Where can I practice this Python course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "How long does it take to learn Python?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> To learn Python Full Stack Course approximately 6-7 Months. we schedule a flexible timetable for our students, you can choose any batch.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Can I learn Python online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Yes, you can learn Python online Instructor-led also. As we provide all the courses both Classroom & online sessions.</p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What are services can I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> After completion of this training, we assist you with resume preparation, interview preparation, and placement opportunities.</p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "Do I get placement assistance after Python Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course. </p> "
		  }
		}]
	  }
	  
  

  pythoncoreandadvanceBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/python-with-coreandadvance",
      "item": "https://www.nipunatechnologies.com/assets/images/course/python_Core%20&%20Advanced_Python_training_Guntur.webp"  
    }]
  }
  

  pythoncoreandadvancereviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/python_Core%20&%20Advanced_Python_training_Guntur.webp",
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
      "name": "Anil"
    },
    "reviewBody": "<p> The courses from Nipuna Technologies are on another level and they are diverse. They helped me discover, learn and access more technical skills and pushed me constantly in gaining practical experience. My learning experience is epic. It was an instructor-led online course but I am amazed at the knowledge and new skills I gained in my Python Course from Nipuna Technologies. Explore their courses because, now, it is your turn to discover, upskill & earn from one of the best companies and start your career. </p>",
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
		  content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Afordable fees, placements, Guntur, Programming languages,',
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