import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.scss']
})
export class DevopsComponent implements OnInit {


  devopsFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the Minimum Qualifications required for DevOps Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> Freshers, Graduates, non-graduates, working Professionals  </li> <li> Degree holders who have any basic computer knowledge. </li> <li> Anyone who can join this training who is familiar with Linux & Scripting language.</li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "How much does DevOps training cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fee structure of the DevOps course is economical. However, please contact us to obtain the discounted course fees.  </p> "
      }
    },{
      "@type": "Question",
      "name": "Which institute is best for DevOps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>  Nipuna Technologies is a popular training institute in delivering  all trending software courses. We have industry professional certified trainers for delivering DevOps coaching in Guntur with assured placement.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is a DevOps course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>  DevOps is a Software development methodology that promotes  collaboration between Development and IT Operations Team to deploy code to production faster in an automated way. It offers Maintainability, Predictability, Greater quality cost efficiency, and time to organizations.</p> "
      }
    },{
      "@type": "Question",
      "name": "Who is my instructor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>  Your instructor has 10+ years of experience as a certified DevOps professional. </p>  "
      }
    },{
      "@type": "Question",
      "name": "What is the duration of the DevOps Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Approximately 60 Hrs. We schedule a flexible timetable for our students, you can choose any batch. </p>"
      }
    },{
      "@type": "Question",
      "name": "Do I get placement assistance after the Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you to get a job as soon as you complete the course. </p> "
      }
    },{
      "@type": "Question",
      "name": "What if I miss a DevOps class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "  <p> You will never miss any session. You can select any one of the two  options: 1. View the class recordings that we send through mail daily. 2. You can attend the missed session of the Java coaching in any other live batch. </p> "
      }
    },
	{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>   After completion of this training, we provide certificates and assist you with the résumé preparation, interview preparation, and placement opportunities.  </p> "
      }
    }
  ]
  }
  

  devopsBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/devops-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/devops-training-institute-guntur.webp"  
    }]
  }
  

  devopsreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/devops-training-institute-guntur.webp",
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
      "name": "Vyshu"
    },
    "reviewBody": "<p> My experience with DevOps coaching at Nipuna Technologies was very great. There are experienced & supportive trainer who is supported me very well & helps me to understand the DevOps concepts more clearly. My Trainer elaborate each concept of DevOps in a better way specially I should appreciate the trainer that the way he give us example with the real IT world scenario. </p>",
    "publisher": {
      "@type": "Organization",
      "name": "Nipuna Technologies"
    }
  }


  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {
    
  }

  ngOnInit(): void {
    
// this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      {name: 'keywords', content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Afordable fees, placements, Guntur, Programming languages, Git, Jenkins, Docker, Ansible, Terraform, Kubernets.', },
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
