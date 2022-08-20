import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-hardware-networking',
  templateUrl: './hardware-networking.component.html',
  styleUrls: ['./hardware-networking.component.scss']
})
export class HardwareNetworkingComponent implements OnInit {


 hardwarenetworkingFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the Minimum Educational Qualifications required for Hardware and Networking Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>No need for any technical background for taking a Hardware and Networking course. Any graduates, non-graduates, 10+2 students, freshers who are interested in making a mark in the hardware and networking field. Working professionals consisting of experience in the IT domain but who want to shift to hardware and networking can enroll for this course.</p>"
      }
    },{
      "@type": "Question",
      "name": "What is fees of hardware and networking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> The fee Structure of the Hardware and Networking course is economical. However, please contact us to obtain the discounted course fees. </p> "
      }
    },{
      "@type": "Question",
      "name": "What is computer hardware and networking course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The hardware and networking have carried ahead from physical server stations to cloud storage and virtualization. Hardware and networking are interlinks of several computer parts and networks. This interconnection can be either on a large scale basis or on a small scale basis. When you connect a very huge set of systems with each other and with the database and servers then it is large-scale interconnection. When you connect computers with scanners, printers, modems, routers, etc., it becomes small-scale interconnection. </p> "
      }
    },{
      "@type": "Question",
      "name": "What is starting salary in Hardware and Networking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>As a Hardware and Networking professionals, the average salary for entry level can be expected around Rs.2-3 lacs per annum. Moreover, with good knowledge and creative skills in a Hardware and Network, you can get a high-paying job. </p> <p>Abroad, the average salary of a designer is around $40 k per year. With more knowledge, talented, creative Hardware and Network professionals will be able to make more earnings in this field.</p> "
      }
    },{
      "@type": "Question",
      "name": "Who is my instructor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Your instructor has 10+ years of experience as a certified professional. </p>  "
      }
    },{
      "@type": "Question",
      "name": "What is the duration of the Hardware and Networking Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> The duration of the Hardware and Network course approximately 45 Hrs. we schedule a flexible timetable for our students, you canchoose any batch. </p>"
      }
    },{
      "@type": "Question",
      "name": "Do I get placement assistance after the Hardware and Networking Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you get a join as soon as you complete the course. </p> "
      }
    },{
      "@type": "Question",
      "name": "What if I miss an Hardware and Networking Training class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>You will never miss any session. You can select any one of the two options:</p><p> 1. View the class recordings of Hardware and Network Course that we send through mail daily.</p> <p>2. You can attend the missed session of the Hardware and Network training in any other live batch.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "Can I learn Networking Course online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, you can learn Networking Online Instructor-led also. As we provide all the courses both Classroom & online sessions.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>After completion of this Hardware and Network training, we provide certificates and assist you with the résumé preparation, interview preparation, and placement opportunities. </p>  "
      }
    }]
  }
  
  

 hardwarenetworkingBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/Networking/hardware-and-networking-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/Computer_Hardware_and_Networking_training_Guntur.webp"  
    }]
  }
  

 hardwarenetworkingreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/Computer_Hardware_and_Networking_training_Guntur.webp",
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
      "name": "Abhi"
    },
    "reviewBody": "<p> joined Nipuna Technologies for Hardware and Networking, good technical training, and gained more knowledge in technical aspects. I thank all my trainers for making me trained with technical and communication skills. I got placed in an MNC company through Nipuna Technologies. Thanks to the Placement Team. </p>",
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