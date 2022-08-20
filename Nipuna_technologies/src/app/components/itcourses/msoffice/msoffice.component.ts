import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-msoffice',
  templateUrl: './msoffice.component.html',
  styleUrls: ['./msoffice.component.scss']
})
export class MsofficeComponent implements OnInit {

  msofficeFaqs = 
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the Minimum Qualifications required for MS Office Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul><li>  Freshers, Graduates, non-graduates, business people.</li><li> Degree holders who won't have any basic computer knowledge.</li> <li>    BPO, Call center persons.</li> <li>   Anyone can join this MS office training who are interested to do their  office work smoothly.Approximately 90 days. we schedule a flexible time-table for our  students, you can choose any batch.</li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "How much does Microsoft Office training cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fee Structure of the Microsoft Office course is economical. However, please contact us to obtain the discounted course fees.</p> "
      }
    },{
      "@type": "Question",
      "name": " Where can I learn MS Office?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> At Nipuna Technologies, you can increase the proficiency levels using one or more Microsoft Office apps like Word, Excel, PowerPoint, Access, and Outlook.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is MS Office computer course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> MS Office is a collection of applications is designed to help the business productivity and complete common tasks on a computer. You can create and edit documents in MS Word, work with data in spreadsheets and databases in Excel, and create presentations and posters in PowerPoint.</p>"
      }
    },{
      "@type": "Question",
      "name": "Who is my instructor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Your instructor has 10+ years of experience as a Microsoft certified professional. </p>  "
      }
    },{
      "@type": "Question",
      "name": "What is the duration of the MS Office Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p>"
      }
    },{
      "@type": "Question",
      "name": "Do I get placement assistance after the Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course. </p> "
      }
    },{
      "@type": "Question",
      "name": "What if I miss an MS office Training class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> You will never miss any session. You can select any one of the two options: 1. View the class recordings that we send through mail daily. 2. You can attend the missed session of the Java coaching in any other live batch.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>  After completion of this training, we provide certificates and assist you with the résumé preparation, interview preparation, and placement opportunities.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "  "
      }
    }]
  }
   
 
  msofficeBreadcrumb =
   {
     "@context": "https://schema.org/", 
     "@type": "BreadcrumbList", 
     "itemListElement": [{
       "@type": "ListItem", 
       "position": 1, 
       "name": "https://www.nipunatechnologies.com/ITCourses/msoffice-training-institute-guntur",
       "item": "https://www.nipunatechnologies.com/assets/images/course/ms-office-training-institute-guntur.webp"  
     }]
   }
   
 
   msofficereviews=
   {
     "@context": "https://schema.org/",
     "@type": "Review",
     "itemReviewed": {
       "@type": "organization",
       "image": "https://www.nipunatechnologies.com/assets/images/course/ms-office-training-institute-guntur.webp",
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
       "name": "Vamsi"
     },
     "reviewBody": "<p> I sincerely enjoyed the training at Nipuna Technologies, the MS office course curriculum was so wonderful and informative. I was very much impressed by the way the trainers taught me the course. A healthy environment for learning and I'm very happy with the way they taught all the MS Office apps to make my work very smoothly. I strongly recommend this institute not only for MS Office but also for all the software courses. </p>",
     "publisher": {
       "@type": "Organization",
       "name": "Nipuna Technologies"
     }
   }

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) { }
  ngOnInit(): void {
// this.canonicalService.setCanonicalURL();
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'MS Word, MS Excel, Advanced Excel,MS power Point, Internet Concepts, Computer Basics, Nipuna Technogies, software courses training Institute, IT Courses, Guntur',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Nipuna Technologies' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }
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
