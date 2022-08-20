import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-python-django',
  templateUrl: './python-django.component.html',
  styleUrls: ['./python-django.component.scss']
})
export class PythonDjangoComponent implements OnInit {

pythondjangoFaqs=
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What are the fees Structure for Python Django course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>The fees Structure of the course is economical. However, please contact us to obtain the discounted course fees.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "What is Python Django course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Django is one of the most popular web frameworks and was designed to prepare a web framework in less time to build a web application.Actually, the project development phase is very time-consuming but Django creates it rapidly. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Can I learn Python in Django?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> You have to learn python programming language first then Django.Since Django is a web framework only & also written in python. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I learn Django online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>You can learn Django online training at Nipuna technologies, Guntur.As we provide all the courses both Classroom & online sessions. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How long does it take to learn  Python with Django?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch.  "
		  }
		},{
		  "@type": "Question",
		  "name": "Is Python Django easy to learn?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Django is completely developed in the Python programming language,thus coding is very easy. Python Django offers the simplest documentation compared with other open source technologies. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I practice Django?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Which institute is best for Python with Django Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>Undoubtedly. Nipuna Technologies is the best institute of Python Django Training. We also offers job-oriented and placement Focused classrooms & Online training Python Django classes in Guntur gives more prominence given to real-time exposure by the expert trainers.We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. . The Python Django Training program at Nipuna technologies is specially designed for both Graduates and working professionals. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What are services can I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>After completion of this training, we assist you with the résumé preparation, interview preparation, and placement opportunities. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "Do I get placement assistance after the Python Django Training Programs?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course. </p>  "
		  }
		}]
	  }


	  pythondjangoBreadcrumb =
	  {
		"@context": "https://schema.org/", 
		"@type": "BreadcrumbList", 
		"itemListElement": [{
		  "@type": "ListItem", 
		  "position": 1, 
		  "name": "https://www.nipunatechnologies.com/ITCourses/Python-with-Django-training-institute-guntur",
		  "item": "https://www.nipunatechnologies.com/assets/images/course/python-django-course-guntur.webp"  
		}]
	  }
	  
	
	  pythondjangoreviews=
	  {
		"@context": "https://schema.org/",
		"@type": "Review",
		"itemReviewed": {
		  "@type": "organization",
		  "image": "https://www.nipunatechnologies.com/assets/images/course/python-django-course-guntur.webp",
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
		  "name": "Sindu"
		},
		"reviewBody": "<p> I took training for a Python Django course from Nipuna Technologies. The trainer has good knowledge of the subject & is very experienced. He teaches each and every Django course concept and he will clear all the doubts. I gained in-depth knowledge on this course. Best institute for Python Django training. Here the management staff is very good to help inflexible with timings </p>",
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