import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.scss']
})
export class AWSComponent implements OnInit {


 awsFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": " What are the qualifications for this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>There are no specified requirements. Candidates with a minimal programming language, on the other hand, will stand to benefit. </p>"
      }
    },{
      "@type": "Question",
      "name": "What are the necessary skills of an AWS Developer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul>  <li>	Expertise in at least one programming language.</li>  <li>Awareness of essential AWS services, usage, and best practices for AWS architecture. </li> <li> AWS competence in creating, implementing, and troubleshooting cloud-based applications.</li></ul> "
      }
    },{
      "@type": "Question",
      "name": "Do I need to be familiar with coding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Although coding skills are not mandatory, it is advantageous because creating cloud apps and uploading them to the AWS cloud necessitates programming knowledge. </p> "
      }
    },{
      "@type": "Question",
      "name": "Why is AWS training useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Cloud computing has become one of the fundamental necessities for nearly all enterprises, and there are several options for AWS users.</p>"
      }
    },{
      "@type": "Question",
      "name": "Is AWS in high demand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Yes. Since AWS is the worldwide option of the bulk when it pertains to cloud-based services goods, it has established milestones and developed its own intensity, making it robust.</p>  "
      }
    },{
      "@type": "Question",
      "name": "Is AWS difficult to master for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>AWS may just be smoother to understand. To learn AWS, however, no prior expertise, specialist knowledge, or programming background is necessary. </p>"
      }
    },{
      "@type": "Question",
      "name": "Who is the AWS training for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>This course is appropriate for recent graduates and those wishing to enter the cloud computing sector. This course is ideal for individuals who work as programmers or solution architects. System administrators and network administrators can also register in this course to ensure a promising future in cloud service. </p>  "
      }
    },{
      "@type": "Question",
      "name": "How much is the course fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>The cost of course has been given. However, please contact us to obtain the discounted course fees. </p> "
      }
    },
	{
      "@type": "Question",
      "name": "How much does an AWS Developer make on average?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>As per ZipRecruiter, the estimated annual income for AWS Developers in the United States is US$122,799. </p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What kind of services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>After completion of this training, we assist you with the résumé preparation, interview preparation, and placement opportunities.  </p>  "
      }
    }]
  }
   
 
awsBreadcrumb =
   {
     "@context": "https://schema.org/", 
     "@type": "BreadcrumbList", 
     "itemListElement": [{
       "@type": "ListItem", 
       "position": 1, 
       "name": "https://www.nipunatechnologies.com/ITCourses/aws-training-institute-guntur",
       "item": "https://www.nipunatechnologies.com/ITCourses/aws-training-institute-guntur"  
     }]
   }
   
 
  awsreviews=
   {
     "@context": "https://schema.org/",
     "@type": "Review",
     "itemReviewed": {
       "@type": "organization",
       "image": "https://www.nipunatechnologies.com/ITCourses/aws-training-institute-guntur",
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
       "name": "Siva"
     },
     "reviewBody": "<p> Most institutes provide only information to study and absorb with no demonstrations or practicality of AWS, however, this AWS Course by Nipuna Technologies has Walkthrough lecture series along with digital training programs. This training program allowed me to prepare you for both associate and professional certifications, such as the AWS Certifies Solutions Architect Associate Certification. The trainer is very helpful, and the instructor has always been available to address your questions about placements. Thank you so much to Nipuna Technologies for all the assistance. </p>",
     "publisher": {
       "@type": "Organization",
       "name": "Nipuna Technologies"
     }
   }

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    
// this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      {name: 'keywords', content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Afordable fees, placements, Guntur, Programming languages, Virtual Private Cloud, Relational Database Service, Identity and Access Management, EC2.',},
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Nipuna Technologies' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
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
