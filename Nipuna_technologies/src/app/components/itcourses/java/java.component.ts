import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {

  javaFaqs = 

  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is the duration of Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Approximately 6 Months.</p>"
      }
    },{
      "@type": "Question",
      "name": "Do I receive certificate after completion of the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Yes, all our students get certificate from institute after completing the Java training program at Nipuna Technologies.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is Nipuna Technologies Certified Professional Certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>After completion of the course we will conduct an exam, and if you get 80% or more in the exam you will get Nipuna Technologies Certified Professional Certificate.  </p> "
      }
    },{
      "@type": "Question",
      "name": "Who is my instructor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Your instructor is a 10+ years experienced as Java developer in TCS and HCL companies. </p> "
      }
    },{
      "@type": "Question",
      "name": "How much is course Fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Please call us to get best discount on the course fees. </p> "
      }
    },{
      "@type": "Question",
      "name": "Can I pay course fees in installments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Yes, definitely we offer 3-4 installments to pay the complete course fee. </p>"
      }
    },{
      "@type": "Question",
      "name": "Do I get placement assistance after the Java Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course. </p> "
      }
    },{
      "@type": "Question",
      "name": "Why Choose Us for Java training program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Excellent trainer with over 10+ years of experience. </p> <p>5 Star rating from all our Java programming training students.</p> <p> More than 90+ batches completed in Java Training.</p> <p>The one stop destination for all your learning course’s needs.</p> "
      }
    },
	{
      "@type": "Question",
      "name": "What if I miss a Java class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>You will never miss any session. You can select any one of the two options: </p/> <p> 1. View the Java class recordings that we send through mail daily. </p> <p> 2.You can attend the missed session of the Java coaching in any other live batch.</p>  "
      }
    }
	]
  }
  

 javaBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/java-fullstack-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/java-course-training-institute-guntur.webp"  
    }]
  }
  

 javareviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/java-course-training-institute-guntur.webp",
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
      "name": "Prasanth"
    },
    "reviewBody": "<p> I had done Java full stack Course from Nipuna technologies. The training was excellent, trainer had good knowledge on core Java, advance Java and the institute had good classroom facilities. This training has helped me to get expert knowledge by doing live projects on Java frameworks. I personally recommend people to join any course in join Nipuna Technologies </p>",
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
        content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Affordable fees, placements, Guntur, C, C++, Core java, Advanced Java,OOPS Concepts, Inheritance, Polymorphism, Multithreading.',
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
