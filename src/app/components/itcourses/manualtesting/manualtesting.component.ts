import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-manualtesting',
  templateUrl: './manualtesting.component.html',
  styleUrls: ['./manualtesting.component.scss']
})
export class ManualtestingComponent implements OnInit {


 manualtestingFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How many days it will take to learn software testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Approximately 45 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p>"
      }
    },{
      "@type": "Question",
      "name": "What are the fees Structure for the Manual Testing course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fees Structure of the course is economical. However, pleasecontact us to obtain the discounted course fees. </p> "
      }
    },{
      "@type": "Question",
      "name": "What is manual testing course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Manual Testing training in Guntur, students will learn fundamental concepts to in-depth knowledge on software testing which includes SDLC, STLC, Agile Testing, Effective Testing methods, QA Testing Process, preparation of test scripts, Developing Test Cases, Preparing Test Data, Executing the Test Cases, Defect Reporting to developers, Defect Management and Test Management using JIRA tool. </p> "
      }
    },{
      "@type": "Question",
      "name": "Is manual testing easy to learn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, Manual Testing is very easy to learn. Manual testing is the fundamental process of testing any software or application without the use of any automation tool. Manual testing has always been a good scope in the industry.</p> "
      }
    },{
      "@type": "Question",
      "name": "Can I learn software testing online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, You can learn manual testing online also. As we provide all the courses both Classroom & online sessions. </p>  "
      }
    },{
      "@type": "Question",
      "name": "Where can I practice manual testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs. </p>"
      }
    },{
      "@type": "Question",
      "name": "Which institute is best for software testing course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Undoubtedly. Nipuna Technologies is the best institute of software  testing course. We also offers job-oriented and placement Focused classrooms & Online Manual testing classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We  provide A/C Class Rooms, High Configured Lab & well Experienced  Trainers. . The Manual Testing Training program at Nipuna technologies is specially designed for both Graduates and working professionals.  </p> "
      }
    },{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> After completion of this training, we assist you with the résumé preparation, interview preparation, and placement opportunities.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "Do I get placement assistance after the software testing Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Yes, we provide 100% placement assistance & will help you get a job  as soon as you complete the course. </p> "
      }
    }]
  }
  
  

 manualtestingBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/ManualTesting-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/Best_Manual_Testing_training_Guntur.webp"  
    }]
  }
  

 manualtestingreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/Best_Manual_Testing_training_Guntur.webp",
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
      "name": "Vamsi"
    },
    "reviewBody": "<p> I joined the Manual testing at Nipuna Technologies, the support of faculty and the other staff was nice. The staff has helped me in adjusting timings & I am got placed at MNC as a Trainee tester with a good salary. Thank you to my trainer and for the support of the placement team. </p>",
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
