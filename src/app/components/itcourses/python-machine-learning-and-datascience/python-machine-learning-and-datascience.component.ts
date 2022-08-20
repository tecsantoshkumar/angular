import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-python-machine-learning-and-datascience',
  templateUrl: './python-machine-learning-and-datascience.component.html',
  styleUrls: ['./python-machine-learning-and-datascience.component.scss']
})
export class PythonMachineLearningAndDatascienceComponent implements OnInit {

	pythonmlanddatascienceFaqs =
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "What are the fees Structure for python with ML course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The fees Structure of the course is economical. However, please contact us to obtain the discounted course fees.</p>"
		  }
		},{
		  "@type": "Question",
		  "name": "What is Machine learning with python course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Machine learning systems use various algorithms to build mathematical models and it predicts the output by using the historical data . Currently, machine learning is being used for various tasks such as image recognition, speech recognition, email filtering, Facebook auto-tagging, recommender system, and many more. The delicacy of predicted output depends upon the volume of data, as the huge quantity of data helps to build a better model which predicts the output more accurately. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Do I need to learn Python for machine learning?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> No! Not at all. You actually don't need to be fluent in Python or any other programming language to start ML </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I learn Python with ML online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> You can learn python with ML online training at Nipuna technologies, Guntur. As we provide all the courses both Classroom & online sessions. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How long does it take to learn  Python with Django?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": "Is Python with ML easy to learn?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Python is an easy and powerful programming language that makes it one of the best choices for Machine Learning is its easy and powerful implementation. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I practice Python with ML?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Which institute is best for Python with ML Training?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p>Undoubtedly. Nipuna Technologies is the best institute of Python with ML Training. We also offers job-oriented and placement Focused classrooms & Online training Python with ML classes in Guntur gives	more prominence given to real-time exposure by the expert trainers.	We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. . The Python with ML Training program at Nipuna technologies is specially designed for both Graduates and working professionals. </p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What are services can I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> After completion of this training, we assist you with the résumé preparation, interview preparation, and placement opportunities.</p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What if I miss an Python with ML Training class?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> You will never miss any session. You can select any one of the two options: 1. View the class recordings of the Course that we send through mail daily. 2. You can attend the missed session of the Python with ML training in any other live batch. </p>  "
		  }
		}]
	  }
	  

	pythonmlanddatascienceBreadcrumb =
	{
	  "@context": "https://schema.org/", 
	  "@type": "BreadcrumbList", 
	  "itemListElement": [{
		"@type": "ListItem", 
		"position": 1, 
		"name": "https://www.nipunatechnologies.com/ITCourses/Python-with-machine-learning-datascience",
		"item": "https://www.nipunatechnologies.com/assets/images/course/ML_with_Python_and_Data_ScienceCourse_Guntur.webp"  
	  }]
	}
	
  
	pythonmlanddatasciencereviews=
	{
	  "@context": "https://schema.org/",
	  "@type": "Review",
	  "itemReviewed": {
		"@type": "organization",
		"image": "https://www.nipunatechnologies.com/assets/images/course/ML_with_Python_and_Data_ScienceCourse_Guntur.webp",
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
		"name": "Archana"
	  },
	  "reviewBody": "<p> I had completed this ML course a month ago, the job assistance they provided me was extremely supportive. The team offered mind­ blowing support for upgrading my resume with the new skills that I had acquired during the training Program. They also conducted several mock interviews. This gave me confidence during my actual interview and it helped me successfully land my job. Overall the experience is good and it is one of the best Machine Learning training institutes in Guntur. </p>",
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