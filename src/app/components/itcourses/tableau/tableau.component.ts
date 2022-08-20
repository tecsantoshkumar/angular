import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {


  
  tableauFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is Tableau course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Tableau is a Powerful data visualization as well as a Business Intelligence tool that is used to report and analyze huge amounts of data. Tableau has started by an American business that was foundedin 2003. In June of 2019, Salesforce acquired Tableau. Tableau helps users design different graphs, charts, dashboards, maps, and stories that allow for analysis and visualization of data to assist in  making business-related decisions. Tableau offers a number of innovative, thrilling features that make it among the most sought-after tools for Business Intelligence (BI).</p>"
      }
    },{
      "@type": "Question",
      "name": "Is Tableau easy to learn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Tableau is one of the popular data visualization and Business Intelligence tool. Tableau is very fast to deploy, easy to learn and very automotive to use for a customer. </p> "
      }
    },{
      "@type": "Question",
      "name": " Where can I learn Tableau?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Undoubtedly, Nipuna Technologies is the best Tableau online training in Guntur. We also offers job-oriented and placement Focused classrooms & Tableau Online classes in Guntur more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. This training program at Nipuna technologies is specially designed for both Graduates and working professionals. </p> "
      }
    },{
      "@type": "Question",
      "name": "How much is to Tableau course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fee structure of the Tableau course is economical. However,please contact us to obtain the discounted course fees.</p> "
      }
    },{
      "@type": "Question",
      "name": "Is Tableau online Course free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> The Tableau online Course fee is affordable. However, please contact us to obtain the discounted course fees. </p> "
      }
    },{
      "@type": "Question",
      "name": "Can I learn Tableau online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Nipuna Technologies provide classrooms & Tableau Online classes in Guntur, join our 45 hrs. training with Tableau Solution Engineer Trainer to learn the Tableau course and ask questions. </p>"
      }
    },{
      "@type": "Question",
      "name": "Who is my Trainer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Your instructor has 8+ years of experience as a certified Tableau professional.</p>"
      }
    },{
      "@type": "Question",
      "name": " What if I miss a Tableau class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> You will never miss any session. You can select any one of the two  options: </p> <p> 1. View the class recordings of Tableau Course that we send through mail daily.</p> <p> 2. You can attend the missed session of the Tableau training in  any other live batch.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "Do I get placement assistance after the Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you can get a job as soon as you will be complete the course. </p>  "
      }
    }
  ]
  }

  tableauBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/tableau-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/Tableau_Training_Guntur.webp"  
    }]
  }
  

  tableaureviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/Tableau_Training_Guntur.webp",
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
      "name": "Kalyani"
    },
    "reviewBody": "<p> My experience with Tableau coaching at Nipuna Technologies was very great. There are experienced & supportive trainers who have supported me very well & helps me to understand the Tableau concepts more clearly. My Trainer elaborate each concept of Tableau in a better way specially I should appreciate the trainer for the way he gives us examples with real IT world scenario. </p>",
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
        content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Afordable fees, placements, Guntur, Programming languages,',
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