import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-oracle',
  templateUrl: './oracle.component.html',
  styleUrls: ['./oracle.component.scss']
})
export class OracleComponent implements OnInit {


  oraclesqlplsqlFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the Minimum Qualifications required for Oracle PL/SQL Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> Freshers</li> <li> BE/ B.Sc. Candidate</li> <li> Any Engineers</li> <li> Any Graduate</li> <li> Any Post-Graduate</li> <li> Working Professionals</li> <li> Anyone can join this SQL training who desire to begin their career in the Database Platform.</li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "How much does SQL training cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>The fee Structure of the Oracle course is economical. However, please contact us to obtain the discounted course fees. </p> "
      }
    },{
      "@type": "Question",
      "name": "Where can I learn SQL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> At Nipuna Technologies is the best SQL Coaching center in Guntur with 100% placement. We provide practical & technical knowledge on real-time exposure with live project work. </p>"
      }
    },{
      "@type": "Question",
      "name": "What is SQL course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>SQL/PLSQL is a structured query language used to deal with databases.It is widely used to analyze the data which is in a structured format. SQL is the most universal and commonly used database language, has its own syntax and it is a command-line interpreter.That is, it executes one command at a time. </p> "
      }
    },{
      "@type": "Question",
      "name": "Who is my instructor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Your instructor has 10+ years of experience as a Certified Database Administrator.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is the duration of the SQL Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p>"
      }
    },{
      "@type": "Question",
      "name": "Do I get placement assistance after the Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p> "
      }
    },{
      "@type": "Question",
      "name": "What if I miss a SQL Training class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> You will never miss any session. You can select any one of the two options: </p>  <p> 1. View the class recordings of Oracle Course that we send through mail daily.</p> <p> 2. You can attend the missed session of the AngularJS training in any other live batch.</p> "
      }
    },
	{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>After completion of this training, we provide certificates and assist  you with the résumé preparation, interview preparation, and placement opportunities. </p> "
      }
    }]
  }
  

  oraclesqlplsqlBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/oracle-sql-plsql-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/oracle-sql-plsql-training-course-institute-guntur.webp"  
    }]
  }
  

  oraclesqlplsqlreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/oracle-sql-plsql-training-course-institute-guntur.webp",
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
      "name": "Latha"
    },
    "reviewBody": "<p> I joined here on my friend's suggestion. A very good platform to learn SQL Database. They Provide in-depth training & I had lots of doubts during the training session but my trainer was so friendly that he thought me about all the concepts and cleared all the doubts every time I asked him. Also, the classes were scheduled properly. I strongly recommend this institute for Fresher Graduates! Excellent work Nipuna Technologies Keep it up! </p>",
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
        content: 'Nipuna Technologies, software courses training Institute, IT Courses, Guntur, Commands & Constraints, Functions & Procedures, Triggers and Cursors, Decision Making and Loops, Packages & Exceptions.',},
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