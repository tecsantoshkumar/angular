import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-angularjs',
  templateUrl: './angularjs.component.html',
  styleUrls: ['./angularjs.component.scss']
})
export class AngularjsComponent implements OnInit {


  angularjsFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How long will it take to learn AngularJS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Approximately 45 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p>"
      }
    },{
      "@type": "Question",
      "name": "What are the fees Structure for the AngularJS course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>The fees Structure of the course is economical. However, please  contact us to obtain the discounted course fees.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is Angular course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>AngularJS is an open-source, client-side JavaScript framework to develop dynamic web applications. It was developed by Google and supported by a team of developers. It is one of the most widely used frameworks for creating single-page web applications. It is used for data binding, to deliver app-like experiences, & automatic synchronization.</p> "
      }
    },{
      "@type": "Question",
      "name": "Is Angular course easy to learn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Yes, you can learn AngularJS very easily as it is perfect for Single Page Applications (SPAs). </p> "
      }
    },{
      "@type": "Question",
      "name": "Can I learn Angular Courses online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Yes, You can learn AngularJS online also. As we provide all the courses both Classroom & online sessions.</p>  "
      }
    },{
      "@type": "Question",
      "name": "Where can I practice AngularJS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs.</p>"
      }
    },{
      "@type": "Question",
      "name": "Which institute is best for Angular course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Undoubtedly. Nipuna Technologies is the best institute of Angular course. We also offers job-oriented and placement Focused classrooms & Online AngularJS classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. . AngularJS online Training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p> "
      }
    },{
      "@type": "Question",
      "name": "Is there any certification for the Angular Courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Once you will complete AngularJS online Training requirements at Nipuna Technologies, you will receive certificate of completion, an  essential step in helping establish your credentials as a qualified  Angular developer.</p> "
      }
    },
	{
      "@type": "Question",
      "name": "Do I get placement assistance after AngularJS online Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What if I miss an AngularJS Training class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>You will never miss any session. You can select any one of the two options: 1. View the class recordings of Angular Course that we send through mail daily. 2. You can attend the missed session to AngularJS training in any other live batch. </p>  "
      }
    }]
  }
   
 
  angularjsBreadcrumb =
   {
     "@context": "https://schema.org/", 
     "@type": "BreadcrumbList", 
     "itemListElement": [{
       "@type": "ListItem", 
       "position": 1, 
       "name": "https://www.nipunatechnologies.com/ITCourses/angular-js-training-institute-guntur",
       "item": "https://www.nipunatechnologies.com/assets/images/course/Angular_JS_Course_Guntur.webp"  
     }]
   }
   
 
   angularjsreviews=
   {
     "@context": "https://schema.org/",
     "@type": "Review",
     "itemReviewed": {
       "@type": "organization",
       "image": "https://www.nipunatechnologies.com/assets/images/course/Angular_JS_Course_Guntur.webp",
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
       "name": "Naresh"
     },
     "reviewBody": "<p> I joined Angular at Nipuna Technologies, the support of faculty and the other staff was nice. The staff has helped me in adjusting timings & I am got placed at MNC as a Web designer with a good salary. Thank you to my trainer and for the support of the placement team. </p>",
     "publisher": {
       "@type": "Organization",
       "name": "Nipuna Technologies"
     }
   }

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    
// this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      {name: 'keywords',content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Afordable fees, placements, Guntur, Programming languages,',},
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
