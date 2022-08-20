import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';


@Component({
  selector: 'app-azure',
  templateUrl: './azure.component.html',
  styleUrls: ['./azure.component.scss']
})
export class AzureComponent implements OnInit {


  azureFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How long it will take to learn Microsoft Azure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Approximately 45 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p>"
      }
    },{
      "@type": "Question",
      "name": "What is Microsoft Azure course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>The fees Structure of the course is economical. However, please contact us to obtain the discounted course fees.</p> "
      }
    },{
      "@type": "Question",
      "name": " Which certification is best in Azure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>All the Microsoft Azure certification are the best but when considering the beginners and freshers the best-recommended certification is the Azure Fundamentals. For this certification, have to clear the foundational level exam AZ-900. This certification exam is a stepping stone for moving towards the associate and expert level Azure certifications. </p> "
      }
    },{
      "@type": "Question",
      "name": "Can I learn Azure Training online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Yes, You can learn Azure online also. As we provide all the courses both Classroom & online sessions. </p> "
      }
    },{
      "@type": "Question",
      "name": " Where can I practice Azure Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs.</p>  "
      }
    },{
      "@type": "Question",
      "name": "What is the best Azure training institute in Guntur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Undoubtedly, Nipuna Technologies is the best institute of Azure training in Guntur. We also offers job-oriented and placement Focused classrooms & Online Azure classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. . The Azure Training program at Nipuna technologies is specially designed for both Graduates and working professionals. </p>"
      }
    },{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>After completion of this training, we assist you with resume preparation, interview preparation, and placement opportunities.</p> "
      }
    },{
      "@type": "Question",
      "name": "What if I miss an Azure Training class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> You will never miss any session. You can select any one of the two  options: </p> <p> 1. View the class recordings of Azure Course that we send through mail daily.</p> <p> 2. You can attend the missed session of the Azure training in any other live batch.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "Do I get placement assistance after the Azure Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p> "
      }
    },
	{
      "@type": "Question",
      "name": "What are the fees Structure for the Azure course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>The fees Structure of the course is economical. However, please contact us to obtain the discounted course fees. </p> "
      }
    }]
  }
   
 
azureBreadcrumb =
   {
     "@context": "https://schema.org/", 
     "@type": "BreadcrumbList", 
     "itemListElement": [{
       "@type": "ListItem", 
       "position": 1, 
       "name": "https://www.nipunatechnologies.com/ITCourses/microsoft-azure-training-institute-guntur",
       "item": "https://www.nipunatechnologies.com/assets/images/course/microsoft-azure-training-guntur.webp"  
     }]
   }
   
 
  azurereviews=
   {
     "@context": "https://schema.org/",
     "@type": "Review",
     "itemReviewed": {
       "@type": "organization",
       "image": "https://www.nipunatechnologies.com/assets/images/course/microsoft-azure-training-guntur.webp",
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
       "name": "Venky"
     },
     "reviewBody": "<p> Azure training at Nipuna Technologies has helped me to start my dream career in the Cloud field. The trainer delivered conceptual knowledge and practical guidance at each and every concept of the Azure courses. Now I am able to accelerate my career growth. The management team of this institute helped me with non-technical training like teaching me soft skills and helping in lab sessions. I would recommend Nipuna Technologies to my friends. Join Nipuna Technologies for a successful career in Azure. </p>",
     "publisher": {
       "@type": "Organization",
       "name": "Nipuna Technologies"
     }
   }

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    
// this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      {name: 'keywords',content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Afordable fees, placements, Guntur, Programming languages, Virtual Machine, Network, User Accounts, Database Creation.',},
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
