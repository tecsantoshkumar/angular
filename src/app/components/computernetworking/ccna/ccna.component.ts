import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-ccna',
  templateUrl: './ccna.component.html',
  styleUrls: ['./ccna.component.scss']
})
export class CCNAComponent implements OnInit {

  ccnaFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the qualifications for CCNA Courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> Any graduates, Non-graduates who want to pursue their career in Networking. </li><li> BE / B. Tech passed students to get into the Networking field. </li>  <li> A candidate who would like to restart their career after an educational gap.</li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "What are the CCNA courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> CCNA (Cisco Certified Network Associate) is the best certification for network engineers in the electronic world, provided under the name of the company Cisco Systems. It is valid for all kinds of engineers including entry-level network engineers and network directors, as well as network support engineers, as well as network specialists. It aids in becoming familiar with the wide range of concepts in networking, such as OSI models and information science addressing the security of networks, and more. CCNA is the abbreviation for Cisco Certified Network Associate </p> "
      }
    },{
      "@type": "Question",
      "name": "Why CCNA is used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <ul> <li> Configuration and installation of Cisco routers and switches in multi-protocol settings, victimization of computer networks, and the WAN interfaces.</li> <li> Troubleshooting Operations at Level 1.</li> <li> Enhance security and performance of the network.</li> </ul> "
      }
    },{
      "@type": "Question",
      "name": "Where can I practice this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs.</p> "
      }
    },{
      "@type": "Question",
      "name": "Which institute is best for CCNA Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Undoubtedly. Nipuna Technologies is the best institute of CCNA courses. We also offer job-oriented and placement Focused classrooms and Online classes in Guntur giving more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Labs, and well Experienced Trainers. This Training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>  "
      }
    },{
      "@type": "Question",
      "name": "How long does it take to learn CCNA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p>"
      }
    },{
      "@type": "Question",
      "name": "Can I learn CCNA online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, you can learn CCNA online Instructor-led also. As we provide all the courses both Classroom & online sessions. </p> "
      }
    },{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> After completion of this training, we assist you with resume preparation, interview preparation, and placement opportunities. </p>  "
      }
    },
	{
      "@type": "Question",
      "name": "Do I get placement assistance after CCNA Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What if you miss CCNA classes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> You will never miss any session. You can select any one of two options: </p> <p>  1. View the class recordings of this Course that we send through mail daily.</p> <p>   2. You can attend the missed session of this training in any other live batch.</p>  "
      }
    }]
  }
  
  

  ccnaBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/Networking/ccna-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/ccna-course-guntur.webp"  
    }]
  }
  

  ccnareviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/ccna-course-guntur.webp",
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
      "name": "Meghana"
    },
    "reviewBody": "<p> It's a pleasure to provide my feedback about Nipuna Technologies. I like our Expert trainer's skills on techniques and ideas to improve my English. I've been taking classes for the past month that has helped me conquer my shyness in speaking English. I am thankful to the trainer and the management staff of Nipuna for their assistance and for encouraging me to succeed in the English language. </p>",
    "publisher": {
      "@type": "Organization",
      "name": "Nipuna Technologies"
    }
  }
    

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    
this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      {name: 'keywords',content: 'Angular SEO Integration, Music CRUD, Angular Universal',},
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