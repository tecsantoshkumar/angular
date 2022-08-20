import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-gcp-course',
  templateUrl: './gcp-course.component.html',
  styleUrls: ['./gcp-course.component.scss']
})
export class GcpCourseComponent implements OnInit {

 gcpFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": " Who should take the Google cloud Architect Training Course",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> Cloud Architects are individuals who want to build their market credibility and increase their value as experts. </li> <li> Professionals who are aspiring to pass the Google Cloud Certified Professional Cloud Architect certification exam.</li> <li> System administrators</li> <li> Cloud Professionals</li> </ul>"
      }
    },{
      "@type": "Question",
      "name": " What is a Google Cloud Platform Certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Google Cloud Platform certification is a way for you to show your technical skills in specific GCP roles or technology. Google Cloud Certification Exam measures the exam taker's Google Cloud proficiency according to the standards that will surely make them a better professional.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is the validity of a Google Cloud certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>All Google Cloud certifications can be used for up to 2 years after the date of certification. Candidates must renew their certifications due to the constantly changing nature of the cloud industry. </p> "
      }
    },{
      "@type": "Question",
      "name": "What are the prerequisites for this Google Cloud Architect Training Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Cloud architecture foundational knowledge</p>  <p> The Basics of Cloud Computing: The Basics</p> <p> Understanding the basics of virtualization, networking, and databases </p> "
      }
    },{
      "@type": "Question",
      "name": "What are the Google Cloud Platform services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> Computing and hosting </li>  <li> Storage and database </li> <li> Networking </li><li> Big Data </li> <li> Machine learning </li> </ul>  "
      }
    },{
      "@type": "Question",
      "name": "What is the cost of Google Cloud certification exams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> G Suite Certification: US$75</li> <li> Associate Certification: US$125 </li> <li> Professional Certification: US$200</li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "How long does it take to learn with the GCP Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p> "
      }
    },{
      "@type": "Question",
      "name": "What is a GCP course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Google Cloud Platform (GCP), is a set of cloud computing services that Google offers. It's a public cloud computing platform that includes a range of services such as computing, storage, and networking. This cloud infrastructure is also used internally by Google for end-user products like Google Search, Photos, and Gmail.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "Where can I practice GCP courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs. </p> "
      }
    },
	{
      "@type": "Question",
      "name": "Which is the best GCP institute in Guntur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Undoubtedly, Nipuna Technologies is the best institute for Google Cloud training in Guntur. We also offer job-oriented and placement Focused classrooms & Online GCP with GST classes in Guntur more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. . This training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>  "
      }
    }]
  }
   
 
  gcpBreadcrumb =
   {
     "@context": "https://schema.org/", 
     "@type": "BreadcrumbList", 
     "itemListElement": [{
       "@type": "ListItem", 
       "position": 1, 
       "name": "https://www.nipunatechnologies.com/ITCourses/gcp-training-institute-guntur",
       "item": "https://www.nipunatechnologies.com/assets/images/course/GCP_Training_Guntur.webp"  
     }]
   }
   
 
 gcpreviews=
   {
     "@context": "https://schema.org/",
     "@type": "Review",
     "itemReviewed": {
       "@type": "organization",
       "image": "https://www.nipunatechnologies.com/assets/images/course/GCP_Training_Guntur.webp",
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
       "ratingValue": "5"     },
     
     "author": {
       "@type": "Person",
       "name": "Ravi"
     },
     "reviewBody": "<p> Hello friends, I completed my Google cloud training with Nipuna Technologies through an online course. The trainer was excellent and all the concepts were covered in a very simple manner. I also got practical support wherever needed. I am happy about the training. The team of Nipuna technologies is very supportive and dedicated and they also provided me with GCP coaching with placement. Thanks to the trainer and the management of Nipuna technologies. </p>",
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
        content: 'Nipuna Technogies, software courses training Institute, IT Courses, Guntur, Cloud Computing, Cloud services, Compute engine, Cloud storage, Dataflow, Networking.',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Nipuna Technologies' },


      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }
    ]);
  }
  relatedCoursesSlides: OwlOptions = {
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

