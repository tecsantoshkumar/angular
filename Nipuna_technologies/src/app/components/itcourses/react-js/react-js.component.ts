import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-react-js',
  templateUrl: './react-js.component.html',
  styleUrls: ['./react-js.component.scss']
})
export class ReactJsComponent implements OnInit {


  reactjsFaqs = 
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": " How long would it take to learn React JS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Approximately 45 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p>"
      }
    },{
      "@type": "Question",
      "name": "What are the fees Structure for the React JS course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fees Structure of the course is economical. However, please contact us to obtain the discounted course fees. </p> "
      }
    },{
      "@type": "Question",
      "name": "What is React JS course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> React JS is an open-source JavaScript library rather than a framework and it is introduced by Facebook for developing rich web applications efficiently and quickly with minimal coding. It’s one of the widely used and most popular JavaScript libraries available that all the companies prefer to use React JS. </p> "
      }
    },{
      "@type": "Question",
      "name": "Is React JS easy to learn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Yes, React JS is very easy to learn as it is perfect for Single Page Applications (SPAs). Both HTML and CSS are integral parts to develop any web applications project. If you have these two skills already, then learning React JS should be a relatively straightforward process. React JS has its own unique set of challenges, but it is an excellent tool in order to start your career as a web developer or web designer. </p> "
      }
    },{
      "@type": "Question",
      "name": "Can I learn React JS Course online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, You can learn React JS online also. As we provide all the courses both Classroom & online sessions.</p>  "
      }
    },{
      "@type": "Question",
      "name": "Where can I practice React JS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs. </p>"
      }
    },{
      "@type": "Question",
      "name": "Which institute is best for React JS course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Undoubtedly. Nipuna Technologies is the best institute of React JS course. We also offers job-oriented and placement Focused classrooms & Online React JS classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. . The React JS Training program at Nipuna technologies is specially designed for both Graduates and working professionals.  </p> "
      }
    },{
      "@type": "Question",
      "name": "Is there any certification for React JS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Once you complete the React JS course requirements at Nipuna Technologies, you will receive certificate of completion, an essential step in helping establish your credentials as a qualified React developer.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>After completion of this training, we assist you with the resume preparation, interview preparation, and placement opportunities.  </p>  "
      }
    },
	{
      "@type": "Question",
      "name": " Do I get placement assistance after the React JS Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course. </p>  "
      }
    }]
  }
 
  reactjsBreadcrumb =
   {
     "@context": "https://schema.org/", 
     "@type": "BreadcrumbList", 
     "itemListElement": [{
       "@type": "ListItem", 
       "position": 1, 
       "name": "https://www.nipunatechnologies.com/ITCourses/react-js-training-institute-guntur",
       "item": "https://www.nipunatechnologies.com/assets/images/course/React_JS_Training_Guntur.webp"  
     }]
   }
   
 
   reactjsreviews=
   {
     "@context": "https://schema.org/",
     "@type": "Review",
     "itemReviewed": {
       "@type": "organization",
       "image": "https://www.nipunatechnologies.com/assets/images/course/React_JS_Training_Guntur.webp",
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
       "ratingValue": "5" 
          },
     
     "author": {
       "@type": "Person",
       "name": "Ajay"
     },
     "reviewBody": "<p> I have completed my React JS online training in Guntur at Nipuna Technologies, the trainer is a very experienced person and the way he teaches each and every topic is very amazing and he explains each concept with real-time examples. This method is very useful to learn quickly, thank you Nipuna Technologies and the trainer for polishing my skills.. </p>",
     "publisher": {
       "@type": "Organization",
       "name": "Nipuna Technologies"
     }
   }

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) { }

  ngOnInit(): void {

this.canonicalService.setCanonicalURL();


    this.metaTagService.addTags([
      { name: 'keywords', content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Afordable fees, placements, Guntur, Programming languages,', },
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
