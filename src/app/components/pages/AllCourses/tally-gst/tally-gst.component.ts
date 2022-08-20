import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-tally-gst',
  templateUrl: './tally-gst.component.html',
  styleUrls: ['./tally-gst.component.scss']
})
export class TallyGstComponent implements OnInit {


  tallyFaqs = 
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the Qualifications for Tally GST courses Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> Students must have completed secondary education, i.e. 10+2 or equivalent (preferably in Commerce stream) </li> <li> Basic knowledge of Business Management and Accounting has added an advantage to the Tally course</li>   <li> Students can also learn the course after they finish their graduation. This Tally course will act as a professional boost if you are planning to get a job in the field of Accounting</li></ul>"
      }
    },{
      "@type": "Question",
      "name": "How long does it take to learn with Tally GST Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Approximately 45 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is Tally GST course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>  Tally software is an ideal solution for complete accounting, taxation, payroll, and monetary transactions recording. It's being used by many business organizations to maintain their books of accounts. It also helps in record-keeping the business accounts very clear within the departments, which brings efficiency in transactions, task completion and reduces paperwork. By using Tally, you can avoid auditing errors and costly accounting. Because of its flexibility, it's a choice of over 1 million businesses, including MNCs!</p> "
      }
    },{
      "@type": "Question",
      "name": "How much does it cost to learn Tally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>  The fees Structure of the course is the economical. However, please contact with us to obtain the discounted course fees.</p> "
      }
    },{
      "@type": "Question",
      "name": "Can I learn online Tally course ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Yes, You can learn Tally course online also. As we provide all the courses both Classroom & online sessions.</p> "
      }
    },{
      "@type": "Question",
      "name": "Where can I practice a Tally courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs.</p>"
      }
    },{
      "@type": "Question",
      "name": "Which is a best Tally with GST institute in Guntur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Undoubtedly, Nipuna Technologies is the best institute for Tally with GST training in Guntur. We also offers job-oriented and placement Focused classrooms & Online Tally with GST classes in Guntur more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. . This training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>"
      }
    },{
      "@type": "Question",
      "name": "What comes in Tally course GST Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Learn the basics and Classification of Accounting. </p> <p> Goods and Services Tax</p>  <p> Balance Sheet</p> <p> Company Formation</p>  <p> Ledgers</p> <p> Printing of Cheque.</p> <p> Learn the Methods of Bank Reconciliation.</p> <p> About Credit Limit</p> "
      }
    },
	{
      "@type": "Question",
      "name": "Do I get placement assistance after Tally with GST Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "  <p>  Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course. </p> "
      }
    },
	{
      "@type": "Question",
      "name": "What if I miss an Tally with GST classes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> You will never miss any session. You can select any one of the two options: 1. View the class recordings of this Courses that we send through mail daily. 2. You can attend the missed session of this training in any other live batch.</p> "
      }
    }]
  }
 
  tallyBreadcrumb =
   {
     "@context": "https://schema.org/", 
     "@type": "BreadcrumbList", 
     "itemListElement": [{
       "@type": "ListItem", 
       "position": 1, 
       "name": "https://www.nipunatechnologies.com/tally-training-institute-guntur",
       "item": "https://www.nipunatechnologies.com/assets/images/course/Tally_with_GST_Course_Guntur.webp"  
     }]
   }
   
 
   tallyreviews=
   {
     "@context": "https://schema.org/",
     "@type": "Review",
     "itemReviewed": {
       "@type": "organization",
       "image": "https://www.nipunatechnologies.com/assets/images/course/Tally_with_GST_Course_Guntur.webp",
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
       "name": "Lakshmi"
     },
     "reviewBody": "<p> Hello friends, I completed my training in Tally ERP 9 with Nipuna Technologies through an online course. The trainer was excellent and all the concepts were covered in a very simple manner. I also got practical support wherever needed. I am happy about the training. The team of Nipuna technologies is very supportive and dedicated and they also provided me Tally coaching with placement. Thanks, Nipuna technologies. </p>",
     "publisher": {
       "@type": "Organization",
       "name": "Nipuna Technologies"
     }
   }

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    
this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Nipuna Technogies, software courses training Institute, IT Courses, Guntur, Accounts, Tally, GST, Manual Accounts, Financial Management, Inventory Management,  Maintain Advanced MIS Reports, Taxation in Tally Erp9.',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Nipuna Technologies' },
      { name: 'description', content: 'Best TALLY Prime with Training Institute in Guntur. Latest Tally Prime Erp E-way Bill, Payroll, TDS, TCS, MIS, GST. Tally. ERP Courses. Tally training We providing 100% Placement Support. ' },
      { name: 'title', content:'Tally Course in Guntur | Best Tally Prime Training Institute |Tally With GST'},      
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