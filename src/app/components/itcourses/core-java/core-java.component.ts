import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-core-java',
  templateUrl: './core-java.component.html',
  styleUrls: ['./core-java.component.scss']
})
export class CoreJavaComponent implements OnInit {

  corejavaFaqs = 
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Who should take up this Java Developer training course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The training is perfect for the below job positions: </p>   <ul>    <li> Software developers</li> <li> Web designers</li> <li> Programming enthusiasts</li> <li> Engineering graduates</li> <li> Students who want to become Java developers</li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "How long will it take to learn core Java?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Approximately 45 Hrs to learn java full stack it will take 6 months to complete. We schedule a flexible timetable for our students, you can choose any batch. </p> "
      }
    },{
      "@type": "Question",
      "name": "Do I receive a certificate after completion of the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, all our students get certificates from the institute after completing the Java training program at Nipuna Technologies.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is Nipuna Technologies Certified Professional Certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> After completion of the course, we will conduct an exam, and if you get 80% or more in the exam you will get Nipuna Technologies Certified Professional Certificate. </p>"
      }
    },{
      "@type": "Question",
      "name": " Who is my instructor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "  <p> Your instructor is 10+ years experienced Java developer in TCS and HCL companies.</p> "
      }
    },{
      "@type": "Question",
      "name": "What are the Core Java courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Core Java is a component of Java which is J2SE which contains all  the essentials of Java comprising some fundamentals and information about packages. It's an independent Java application that includes learning from all aspects of OOP principles to specific operators including data types, class wrappers, and from the linked list to the Array list and queues to handle exceptions. </p>"
      }
    },{
      "@type": "Question",
      "name": "Can I pay course fees in installments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Yes, definitely we offer 3-4 installments you can pay the complete course fee. </p> "
      }
    },{
      "@type": "Question",
      "name": " What if I miss a Core Java class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> You will never miss any session. You can select any one of the two options: 1. View the Java class recordings and java tutorial that we send through mail daily. 2. You can attend the missed session of the Java coaching in any other live batch.</p>  "
      }
    }]
  }
  
  

  corejavaBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/core-java-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/core-java-course-guntur.webp"  
    }]
  }
  

 
  corejavareviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/core-java-course-guntur.webp",
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
      "name": "Nagalakshmi"
    },
    "reviewBody": "<p> I completed a Java full-stack course through Nipuna technologies. The course was very good and the trainer had excellent knowledge of the core Java and the institution offered a well-equipped classroom. This course has enabled me to gain expert knowledge by working on live projects using Java frameworks. I would recommend this institute to take any of the courses offered by Nipuna Technologies </p>",
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
        content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Affordable fees, placements, Guntur, OOPS Concepts, Inheritance, Polymorphism, Multithreading.',
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


