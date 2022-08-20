import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-dtp',
  templateUrl: './dtp.component.html',
  styleUrls: ['./dtp.component.scss']
})
export class DtpComponent implements OnInit {


  dtpFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the Minimum Qualifications required for DTP Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <ul> <li>	Freshers, Graduates, non-graduates, business people</li> <li>	Degree holders who won't have any basic computer knowledge..</li> <li>	BPO, Call center persons.</li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "How much does DTP training cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>The fee Structure of the DTP course is economical. However, please contact us to obtain the discounted course fees. </p> "
      }
    },{
      "@type": "Question",
      "name": "Where can I learn DTP Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>At Nipuna Technologies, you can increase the proficiency levels in photoshop, Adobe InDesign, CorelDraw & Adobe PageMaker. </p> "
      }
    },{
      "@type": "Question",
      "name": "What is DTP course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Today DTP course has emerged as a rewarding job oriented course in India. Because a DTP operators increase productivity and minimize the production cost of business by enhancing the appearance of the document, improving the level of creativity and reducing the time taken for printing by producing customized documents. So there is immense scope of job opportunity one can get after completing this course successfully. </p> "
      }
    },{
      "@type": "Question",
      "name": " Who is my instructor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "  <p>Your instructor has 8+ years of experience as a certified professional.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is the duration of the DTP Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>The duration of the DTP course approximately 45 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p>"
      }
    },{
      "@type": "Question",
      "name": " Do I get placement assistance after the DTP Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course. </p> "
      }
    },{
      "@type": "Question",
      "name": "What if I miss an DTP Training class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>You will never miss any session. You can select any one  of the two options: </p>  <p>1. View the class recordings of  DTP Course that we send through mail daily. </p> <p> 2. You can attend the missed session of the DTP training in any other live batch.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>After completion of this DTP training, we provide certificates and assist you with the résumé preparation, interview preparation, and placement opportunities.</p> "
      }
    }]
  }
  
  

  dtpBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/MultiMedia/Dtp-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/DTP_Training_Institute_Guntur.webp"  
    }]
  }
  

  dtpreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/DTP_Training_Institute_Guntur.webp",
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
      "name": "Meghana"
    },
    "reviewBody": "<p> I did the right choice to join Nipuna Technologies for DTP course Good institute for Initial start to learn DTP course with a very good trainer and explained all the terminologies with examples and correlated to current company requirements. Very good DTP training institute in Guntur, management, and trainers are also very friendly. </p>",
    "publisher": {
      "@type": "Organization",
      "name": "Nipuna Technologies"
    }
  }
    

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    
this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      {name: 'keywords',content: 'Angular SEO Integration, Music CRUD, Angular Universal',},
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
