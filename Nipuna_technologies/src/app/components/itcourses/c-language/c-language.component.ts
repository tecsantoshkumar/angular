import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-c-language',
  templateUrl: './c-language.component.html',
  styleUrls: ['./c-language.component.scss']
})
export class CLanguageComponent implements OnInit {

 
  CLanguageFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the Minimum Educational Qualifications required for C language Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> Freshers, Graduates, & non-graduates.</li><li> Degree holders who have any basic computer knowledge.</li> <li> Anyone who can join this language C++ classes is interested in   programming  </ul>"
      }
    },{
      "@type": "Question",
      "name": "How much does Language C Course cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>The fee Structure of the C-language course is economical. However,   please contact us to obtain the discounted course fees.</p>"
      }
    },{
      "@type": "Question",
      "name": "Where can I learn C Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> At Nipuna Technologies, you can increase the proficiency levels of your programming skills by learning our C-programming language training program.</p>"
      }
    },{
      "@type": "Question",
      "name": "What is C-Language ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Language C is a powerful structured language that is extremely popular, simple, and flexible to use & it is strongly associated with the UNIX operating system. Initially, the C programming was limited only to the UNIX operating system, but as it started spreading around the globe, it became commercial, and many compilers were released for cross-platform systems. Today the language C is  rushed under a variety of operating systems and hardware platforms.</p>"
      }
    },{
      "@type": "Question",
      "name": "Who is my Trainer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Your instructor has 10+ years of experience as a certified professional.</p>"
      }
    },{
      "@type": "Question",
      "name": "What is the duration of this Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p>"
      }
    },{
      "@type": "Question",
      "name": "Do I get placement assistance after the Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p>"
      }
    },{
      "@type": "Question",
      "name": "What if I miss a class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>You will never miss any session. You can select any one of the two options:</p> <p> 1. View the class recordings that we send through mail daily.</p> <p> 2. You can attend the missed session in any other live batch. </p>"
      }
    },{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>After completion of this training, we provide certificates and assist  you with the résumé preparation, interview preparation, and  placement opportunities.</p>"
      }
    }]
  }
  

  CLanguageBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/c-language-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/c-language-training-institute-guntur.webp"  
    }]
  }
  

  clanguagereviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/c-language-training-institute-guntur.webp",
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
      "ratingValue": "5"
    },
    
    "author": {
      "@type": "Person",
      "name": "Sindhu"
    },
    "reviewBody": "<p> The C programming course is so useful for logic building and problem-solving. The Trainer explained all the required skills well. The Trainer is an expert in programming and has a lot of knowledge on the C and related courses. I really liked the course in Nipuna Technologies and the staff is so supportive to make me feel comfortable in the lab sessions. Thank you Nipuna technologies </p>",
    "publisher": {
      "@type": "Organization",
      "name": "Nipuna Technologies"
    }
  }
    

  
  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    
// this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      {name: 'keywords',content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Afordable fees, placements, Guntur, Programming languages, Loops, Pointer, Arrays, Structures.'},
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
