import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-php-my-sql',
  templateUrl: './php-my-sql.component.html',
  styleUrls: ['./php-my-sql.component.scss']
})
export class PhpMySqlComponent implements OnInit {


 phpmysqlFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": " What are the Qualifications for PHP and MySQL Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> Freshers, Graduates, or non-graduates.</li> <li> Degree holders who have basic computer knowledge.</li> <li> Anyone can join in this course who is interested in web designing or web development.</li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "Can I learn PHP & MySQL Training online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Yes, You can learn online also. As we provide all the courses both Classroom & online sessions. </p> "
      }
    },{
      "@type": "Question",
      "name": " Where can I practice PHP Training? ",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs.</p>"
      }
    },{
      "@type": "Question",
      "name": "Where can I learn PHP and MySQL course? ",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Undoubtedly, Nipuna Technologies is the best institute of PHP and MySQL training in Guntur. We also offers job-oriented and placement Focused classrooms & Online classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. . This Training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>"
      }
    },{
      "@type": "Question",
      "name": "How long it will take to learn PHP and MySQL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p>"
      }
    },{
      "@type": "Question",
      "name": "What are the fees Structure for PHP & MySQL course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>The fees Structure of the course is economical. However, please contact us if you want to obtain the discounted course fees.</p>"
      }
    },{
      "@type": "Question",
      "name": "What is the curriculum of the PHP and MySQL course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>This course covers topics like Basics of PHP language, Decision and Looping, Arrays, Functions, Handling HTML Forms with PHP, Query Strings, Cookies, and Sessions, Files and Directories, Retrieving Data Form MYSQL Databases etc.</p>"
      }
    },{
      "@type": "Question",
      "name": "Are these programming languages hard to learn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>No, these programming languages are very easy to learn.</p>"
      }
    },{
      "@type": "Question",
      "name": "Which is easy PHP or MySQL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>The difference between PHP and MySQL is that PHP is a scripting language, whereas MySQL is a relational database management system. These both are completely different technologies and therefore these are used for different purposes. </p>"
      }
    },
    {
      "@type": "Question",
      "name": "Should I learn PHP or MySQL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>PHP is a server-side programming language that records all the user's data which requires a database on the server. PHP programming language requires interaction with the MySQL database. since it is advisable to start learning PHP first and then go for MySQL. </p> "
      }
    }
  ]
  }
  

  phpmysqlBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/php-mysql-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/php-mysql-course-guntur.webp"  
    }]
  }
  

 
    
  phpmysqlreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/php-mysql-course-guntur.webp",
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
      "name": "Chaitanya"
    },
    "reviewBody": "<p> I have joined in PHP MySQL course at Nipuna Technologies & this is one of the good  Training institutes in Guntur. Here the trainers are very good & supportive & they  have hands-on experience in the web designing field. This training is very helpful for a current industry environment. Overall the course syllabus and infrastructure is good, trainers also respond to doubts and teach each and every concept very clearly. Thank you Nipuna Technologies. </p>",
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
