import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-power-bi',
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.scss']
})
export class PowerBIComponent implements OnInit {


   
  powerbiFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the Qualifications for Power BI online courses Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> Freshers or any graduates can join this Power BI online courses </li> <li> Anyone can learn this training course Who is willing to start their career in Power BI </li> <li> Working Professionals in marketing, finance, sales, and other domains that require extensive career in Business Intelligence </li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "How many days it will take to learn PowerBI course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Approximately 45 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p> "
      }
    },{
      "@type": "Question",
      "name": "Is Power BI difficult to learn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Power BI is very simple and easy-to-learn and use interface. To use Power BI, no programming experience is required. It is an inbuilt  business intelligence tool that helps you to select attributes for  your reports by suggesting the best reporting element. </p> "
      }
    },{
      "@type": "Question",
      "name": "What is Power BI course? ",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Power BI is a cloud-based Business Intelligence and Data Analysis tool owned by Microsoft. Power BI Analysts use this tool for data visualization, to extract insights from the tool, to share the  dashboards and visual reports across the organization. Moreover, anyone can access these reports from anywhere or sitting at their workplace through the Power BI apps offered by Microsoft. </p> "
      }
    },{
      "@type": "Question",
      "name": "How much does a Power BI course cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> The cost of the course is economical. However, please contact us to obtain the discounted course fees. </p> "
      }
    },{
      "@type": "Question",
      "name": "Can I learn online Power BI courses ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, you can learn Power BI online also. As we provide all the courses both Classroom & online sessions. </p>"
      }
    },{
      "@type": "Question",
      "name": "Where can I practice PowerBI courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice  sessions at our highly equipped labs. </p> "
      }
    },{
      "@type": "Question",
      "name": "What is the best Power BI institute in Guntur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Undoubtedly, Nipuna Technologies is the best Power BI Institute in Guntur. We also offer job-oriented and placement Focused classrooms & Online Power BI classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. The online Power BI program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "Do I get placement assistance after PowerBI Training Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course. </p> "
      }
    },
	{
      "@type": "Question",
      "name": "What if I miss a Power BI class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> You will never miss any session. You can select any one of the two options:</p>   <p> 1. View the class recordings of  this Courses that we send through mail daily.</p> <p> 2.   You can attend the missed session of this training in any other live batch. </p>  "
      }
    }]
  }

  powerbiBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/power-bi-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/Power_BI_Training_Guntur.webp"  
    }]
  }
  

  powerbireviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/Power_BI_Training_Guntur.webp",
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
      "name": "Haneesh"
    },
    "reviewBody": "<p> I would like to share about my Power BI training at Nipuna Technologies. The trainers here are super supportive and they make me understand each and every concept very clearly. The second upside is definitely the amount of friendliness in their approach whenever we had doubts. Thirdly, this institute offers extra support to students who are weaker in understanding the concepts. They gave me the recorded sessions which helped me really to gain complete knowledge of the course practically. </p>",
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
