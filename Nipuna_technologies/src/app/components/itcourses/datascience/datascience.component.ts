import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrls: ['./datascience.component.scss']
})
export class DatascienceComponent implements OnInit {


 datascienceFaqs = 
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is the qualification in data science Course ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li>	Freshers or Graduates persued Bachelors or Master’s Degree </li> <li>	IT Professionals </li> <li>	Analytics Managers </li> <li>	Business Analysts </li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "How long is a Data Science course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p> "
      }
    },{
      "@type": "Question",
      "name": "Can I learn Data Science in 3 months?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Approximately, 2 to 3 months for aspirants to be proficient in the area of data science. Also, you should well-planned the strategy, and by taking the initiative to follow it, you will be able to significantly speed up the learning process and speed up the timeline of practicing the concepts. </p> "
      }
    },{
      "@type": "Question",
      "name": "What is a data science course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Data Science is primarily focused on the techniques like recording, analyzing, and storing data to mining insights and future predictions from structured and unstructured data. It plays a vital role in Banking, Healthcare, Social media, and IT industry. These organizations use Datascience to manage datasets and extract relevant insights. </p> "
      }
    },{
      "@type": "Question",
      "name": "Is it possible to learn Data Science courses Online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>	Yes, You can learn Data Science online also. As we provide all the courses both Classroom & online sessions.</p>  "
      }
    },{
      "@type": "Question",
      "name": "Which certification is best for Data Science courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> While pursuing a career in data science isn't a requirement for any formal education or certification but sometimes having certifications can help you stand out from the applicant pool when applying for jobs.</p>"
      }
    },{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> After completion of this training, we assist you with the resume preparation, interview preparation, and placement opportunities. </p> "
      }
    },{
      "@type": "Question",
      "name": "What if you miss Data Science classes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> You will never miss any session. You can select any one of the two options: </p> <p> 1. View the class recordings of this Course that    we send through mail daily</p><p> 2. You can attend the missed session of this training in any other live batch.</p> "
      }
    },
	{
      "@type": "Question",
      "name": "Do I get placement assistance after the  Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course. </p>  "
      }
    }]
  }


 datascienceBreadcrumb =
   {
     "@context": "https://schema.org/", 
     "@type": "BreadcrumbList", 
     "itemListElement": [{
       "@type": "ListItem", 
       "position": 1, 
       "name": "https://www.nipunatechnologies.com/ITCourses/datascience-training-institute-guntur",
       "item": "https://www.nipunatechnologies.com/assets/images/course/Data_Science_Course_Guntur.webp"  
     }]
   }
   
 
  datasciencereviews=
   {
     "@context": "https://schema.org/",
     "@type": "Review",
     "itemReviewed": {
       "@type": "organization",
       "image": "https://www.nipunatechnologies.com/assets/images/course/Data_Science_Course_Guntur.webp",
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
       "name": "Divya"
     },
     "reviewBody": "<p> It was an amazing experience to take part in an DataScience course in Guntur at Nipuna Technologies. Trainers had hands-on experience and gave live-time scenarios. According to me, Nipuna technologies are the best place to get acquainted with the most recent technologies. Thank you for your top-rated service. </p>",
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
        content: 'Angular SEO Integration, Music CRUD, Angular Universal',
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
