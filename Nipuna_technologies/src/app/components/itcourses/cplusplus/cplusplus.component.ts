import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-cplusplus',
  templateUrl: './cplusplus.component.html',
  styleUrls: ['./cplusplus.component.scss']
})
export class CplusplusComponent implements OnInit {

  CplusplusLanguage =

  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the Minimum Educational Qualifications required for C++ language Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> Freshers, Graduates, & non-graduates.</li><li> Degree holders who have any basic computer knowledge.</li> <li> Anyone who can join this language C++ classes is interested in   programming  </ul>"
      }
    },{
      "@type": "Question",
      "name": "What is the course in C++?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> C++ is a general-purpose, case-sensitive, free-form, and object-oriented programming language and procedural programming. C++ is an advanced C programming. C++ is a middle-level language that encapsulates both high- and low-level features of the language.There are numerous databases that support C++, such as MySQL,MongoDB, and MemSQL.</p> "
      }
    },{
      "@type": "Question",
      "name": "Difference between C and C++ Language",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> C is a low-level, traditional procedural programming language. C++ is an intermediate level of advanced C that is both object-oriented and procedural. </p>  <p>  C++ can be used for more advanced programming, while C++ can be used for simple programming. C++ would be preferred by a static web developer, while C++ would be preferred by a video gamer developer. </p> "
      }
    },{
      "@type": "Question",
      "name": "Which programming language should I learn C or C++?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> First, you need to master the C language. C is the foundation of C++ language. You can only become an expert in C to understand the differences and similarities between C and C++. </p> "
      }
    },{
      "@type": "Question",
      "name": "How much does Language C++ Training cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fee structure of the C-language course is economical. However,please contact us to obtain the discounted course fees.</p> "
      }
    },{
      "@type": "Question",
      "name": "How quickly can I learn C++?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p>"
      }
    },{
      "@type": "Question",
      "name": "Who is my Trainer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Your instructor has 10+ years of experience as a certified professional.</p> "
      }
    },{
      "@type": "Question",
      "name": "Do I get placement assistance after the Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course. </p> "
      }
    },{
      "@type": "Question",
      "name": "What services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> After completion of this training, we provide certificates and assist you with the résumé preparation, interview preparation, and placement opportunities.</p>"
      }
    }]
  }



  CplusplusLanguageBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/c%2B%2B-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/c++-course-guntur.webp"  
    }]
  }
  
  cpluspluslanguagereviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/c++-course-guntur.webp",
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
      "name": "Teja"
    },
    "reviewBody": "<p> C++ programming is so helpful for problem-solving and logic building. The trainer clearly explained the skills required. The trainer is an expert in programming and has extensive knowledge of C and related courses. The training at Nipuna Technologies was great. I felt comfortable in the lab sessions and the staff was very supportive. Thank you Nipuna technologies. </p>",
    "publisher": {
      "@type": "Organization",
      "name": "Nipuna Technologies"
    }
  }
 
    

 
  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    
// this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      
      {name: 'keywords',content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Afordable fees, placements, Guntur, Programming languages, OOPS Concepts, Constructors, Inheritance, Overloading.'},
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Nipuna Technologies' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
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
