import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';


@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.scss']
})
export class WordpressComponent implements OnInit {


  wordpressFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "WordPress Course Eligibility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>The minimum eligibility criteria of the WordPress course is to be a graduate. No need for any technical background for taking the WordPress course. </p> <ul>  <li> Students or Working Professionals </li>  <li> Branding  / Sales / Marketing Professionals </li>  <li> graduates, non-graduates, or diploma holders </li><li> Entrepreneurs, Startups. </li><li> Housewives </li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "How long will it take you to learn WordPress courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Approximately 30 days. We schedule a flexible timetable for our students, you can choose any batch.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is a WordPress course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> WordPress is a content management system (CMS) built in PHP that utilizes a MySQL database. It is a free, open-source platform for creating websites. On a technical level, In layman's terms, WordPress is the easiest and most efficient blogging platform and the website building tool available currently.</p> "
      }
    },{
      "@type": "Question",
      "name": "How much does the WordPress course cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fees Structure of WordPress Courses is economical. However, please contact us to obtain the discounted course fees. </p> "
      }
    },{
      "@type": "Question",
      "name": "Where can I learn the WordPress Courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Undoubtedly, Nipuna Technologies is the best online WordPress course in Guntur. We also offer job-oriented and placement Focused classrooms WordPress and Online WordPress classes in Guntur with more prominence given to real-time exposure and hands-on experience by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. This training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>  "
      }
    },{
      "@type": "Question",
      "name": "Can I study WordPress online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Nipuna Technologies provide classrooms and WordPress Online Instructor-led training in Guntur,  join our 60 hrs. Training with expert trainers to learn the WordPress course and ask questions.</p>"
      }
    },{
      "@type": "Question",
      "name": "Who is my Trainer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Nipuna Technologies provide classrooms and WordPress Online Instructor-led training in Guntur,  join our 60 hrs. Training with expert trainers to learn the WordPress course and ask questions.</p> "
      }
    },{
      "@type": "Question",
      "name": "Who is my Trainer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Your instructor has 9+ years of experience as a certified WordPress professional.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "Do I get placement assistance after WordPress Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course. </p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What services could I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "  <p> After completion of this training, we provide a WordPress course and assist you with resume preparation, interview preparation, and placement opportunities. </p> "
      }
    }]
  }
  

  wordpressBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/DigitalMarketing/wordpress-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/wordpress-course-guntur.webp"  
    }]
  }
  

  wordpressreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/wordpress-course-guntur.webp",
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
      "name": "Naresh"
    },
    "reviewBody": "<p> I joined a web designing course at Nipuna Technologies. They provide lab sessions where the trainer clarifies doubts and improves practical knowledge on the subject and the trainers are much more friendly and interactive which leads to a better learning atmosphere. Overall the experience at this institute was too good and the training they provide me is worthy.  </p>",
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
