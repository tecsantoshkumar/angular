import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-automation-testing',
  templateUrl: './automation-testing.component.html',
  styleUrls: ['./automation-testing.component.scss']
})
export class AutomationTestingComponent implements OnInit {

  automationtestingFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the Educational Qualifications for Automation Testing Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The educational qualifications of a software tester should be Computer Science. A B.Tech/ B.E., MCA, BCA (Bachelor of Computer Applications), BSc- Computers, will land you on a testing job quickly.</p>"
      }
    },{
      "@type": "Question",
      "name": "What is Automation testing course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Automation testing is performed with automation software that controls the execution of test scripts and monitors the results of each test case. These results are then compared to the predicted outcomes to ensure that the application is reliable and quality. Automation Testing allows one to perform repetitive tasks as well as those that are difficult to accomplish with manual testing. This type of testing is crucial for CI/CD pipelines.</p> "
      }
    },{
      "@type": "Question",
      "name": "Is Automation testing easy to learn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> It can be difficult of learning automation testing from scratch. Knowing a few coding languages will help you understand the testing frameworks. The Automation Engineer Program at Nipuna Technologies offers 60+ hours of interactive learning is designed to allow you to get proficient testing in Automated Testing and help you land that dream job. This curriculum includes software development, BlackBox/white box testing, functional and non-functional testing, bug reporting tool and testing. It also covers AutoIt, sikuli & 7 other skills. </p> "
      }
    },{
      "@type": "Question",
      "name": "How many days it will take to learn Software Testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p> "
      }
    },{
      "@type": "Question",
      "name": "What are the fees Structure for the Automation Testing course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fees Structure of the course is economical. However, please contact us to obtain the discounted course fees. </p>  "
      }
    },{
      "@type": "Question",
      "name": "Can I learn software testing online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, You can learn Automation testing online also. As we provide all the courses both Classroom & online sessions.</p>"
      }
    },{
      "@type": "Question",
      "name": "Where can I practice Automation testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs.</p> "
      }
    },{
      "@type": "Question",
      "name": "Which institute is best for software testing course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Undoubtedly. Nipuna Technologies is the best institute of software testing course. We also offers job-oriented and placement Focused classrooms & Online Automated testing classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. . The Automated  Testing program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.  </p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What if I miss an Automation testing Training class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> You will never miss any session. You can select any one of the two options: </p> <p> 1. View the class recordings of Automation  testing Course that we send through mail daily.</p><p>  2. You can attend the missed session of the Automation testing training in any other live batch.  </p>  "
      }
    }]
  }
  

  automationtestingBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/automation-testing-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/Automation_Testing_Course_Guntur.webp"  
    }]
  }
  

  automationtestingreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/Automation_Testing_Course_Guntur.webp",
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
      "name": "Swathi"
    },
    "reviewBody": "<p> My friend suggested that I join this course. This institute is a great place to learn Automation Testing. They provide in-depth training. I had many questions during the training session, but my trainer was so kind that he explained everything to me and cleared any doubts I had. The classes were also well-organized. This institute is highly recommended for fresher graduates! Great work Nipuna Technologies! Keep it up! </p>",
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
      { name: 'author', content: 'Nipuna technologies' },

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
