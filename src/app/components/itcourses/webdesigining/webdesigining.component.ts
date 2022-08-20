import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-webdesigining',
  templateUrl: './webdesigining.component.html',
  styleUrls: ['./webdesigining.component.scss']
})
export class WebdesiginingComponent implements OnInit {

  
 
  webtechnologiesFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the Qualifications for web designing, web development Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <ul> <li> Freshers, Graduates, or non-graduates.</li>  <li> Degree holders who have basic computer knowledge.</li> <li> BPO, Call center persons</li> <li> Anyone can join in this course who is interested in web designing or web development.</li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "What is the duration of the Web Designing Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch</p> "
      }
    },{
      "@type": "Question",
      "name": "Is HTML coding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Yes, HTML is a standard markup language used for coding.</p>"
      }
    },{
      "@type": "Question",
      "name": "What are the fees Structure for the Web designing course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fees Structure of the course is economical. However, please contact us to obtain the discounted course fees.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is the curriculum of the Web designing course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "  <p>Our Web designing course covers topics like Introduction to Webdesign and applications, Multimedia and its Applications, Computer  Graphics, Mathematical structure for Computer Science, Animation techniques, HTML, Java, CSS, JavaScript, etc. </p> "
      }
    },{
      "@type": "Question",
      "name": "Which language is used in Web design and development Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Java, HTML, CSS, Python, JavaScript, PHP are some languages used in coding.</p>"
      }
    },{
      "@type": "Question",
      "name": " Are these programming languages hard to learn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>No, these programming languages are very easy to learn.</p>"
      }
    },{
      "@type": "Question",
      "name": "What are the job roles related to Web Designing, web development Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Web Designer</p> <p>Web Developer</p> <p> PHP Developer</p>  <p> Graphic Designer</p><p> Creative Designer</p> <p> PHP Web Developer</p> <p> Website Developer</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> After completion of this training, we assist you with the résumé  preparation, interview preparation, and placement opportunities.</p>  "
      }
    }]
  }
  

  webtechnologiesBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/webdesign-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/best-webdesigining-course-guntur.webp"  
    }]
  }
  

 
    
  webtechnologiesreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/best-webdesigining-course-guntur.webp",
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
      "name": "Priya"
    },
    "reviewBody": "<p> I would like to share a few points about my association with Nipuna Technologies. The trainers here are super supportive and they make me understand a concept till I got a good grip over it. The second upside is definitely the amount of friendliness in their approach I and my classmates always felt welcome whenever we had doubts. Thirdly, Nipuna offers extra support to students who are weaker in understanding the concepts. They give me the recorded sessions which helped me really to gain complete knowledge of the course practically. </p>",
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
