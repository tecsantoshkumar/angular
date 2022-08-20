import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-mulesoft',
  templateUrl: './mulesoft.component.html',
  styleUrls: ['./mulesoft.component.scss']
})
export class MulesoftComponent implements OnInit {


  mulesoftFaqs = 
  
 {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": " Is MuleSoft hard to learn?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "<p> The MuleSoft is easy to learn, you can absolutely begin learning about Mulesoft. It's fine if you do not have a lot of knowledge about Java, but in Mule you don't have to code in the same way as you manage your thinking by dropping forms and arranging them. </p> "
    }
  },{
    "@type": "Question",
    "name": "How many days it will take the MuleSoft training?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "  <p>  Approximately 60 days. we schedule a flexible timetable for our students, you can choose any batch.</p>"
    }
  },{
    "@type": "Question",
    "name": "How MuleSoft is used for?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "<p> MuleSoft integrates data to provide an single overview of the customer. It automates business processes and creates seamless experiences. With a modern API-driven method, each integration can be made an easily reusable building block. </p> "
    }
  },{
    "@type": "Question",
    "name": "How much is the MuleSoft training?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "<p> The fees Structure of MuleSoft training is economical. However, please contact us to obtain the discounted course fees. </p> "
    }
  },{
    "@type": "Question",
    "name": "Where can I learn the MuleSoft Course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": " <p> Undoubtedly, Nipuna Technologies is the best MuleSoft online training provider in Guntur. We also offer job-oriented and placement Focused classrooms & MuleSoft  Online training classes in Guntur with more prominence given to real-time exposure and hands-on experience by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. This training program at Nipuna technologies is specially designed for both Graduates and working professionals. </p> "
    }
  },{
    "@type": "Question",
    "name": "Can I learn MuleSoft Training online?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": " <p> Nipuna Technologies provide classrooms and MuleSoft Online Instructor led training in Guntur, join our 45 hrs. training with  MuleSoft developer, Trainer to learn the Mulesoft course and ask questions. </p>"
    }
  },{
    "@type": "Question",
    "name": "Who is my Trainer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "<p>Your instructor has 8+ years of experience as a certified MuleSoft professional. </p> "
    }
  },{
    "@type": "Question",
    "name": "Do I get placement assistance after MuleSoft Training Programs?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "<p> Yes, we provide 100% placement assistance & will help you to get a job as soon as you complete the course.</p>  "
    }
  },
{
    "@type": "Question",
    "name": "What if I miss a MuleSoft class?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "<p> You will never miss any session. You can select any one of two options: 1. View the class recordings that we send through mail daily. 2. You can attend the missed session of MuleSoft coaching in any other live batch. </p>  "
    }
  },
{
    "@type": "Question",
    "name": "What services could I expect from you?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": " <p> After completion of this training, we provide Mulesoft Certification course and assist you with resume preparation, interview preparation, and placement opportunities.</p> "
    }
  }]
}
  

mulesoftBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/mule-soft-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/MuleSoft_Training_Guntur.webp"  
    }]
  }
  

  mulesoftreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/MuleSoft_Training_Guntur.webp",
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
      "name": "Pavan"
    },
    "reviewBody": "<p> Nipuna Technologies is the best Institute for MuleSoft Training. I was a participant in instructor-led online Mulesoft training, and was able to gain confidence in the basic concepts of MuleSoft within a brief amount of time. Mulesoft's training is extremely comfortable and timetables are adhered to. Every question I asked and the trainer addressed it quickly. Each and every Concept of syllabus is covered. </p>",
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
        content: 'Nipuna Technologies, software courses training Institute, IT Courses, Guntur, Mule Event & Message Structure, Core Components, Flows and Subflows, Mule Runtime & Applications. ',  },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Nipuna Technologies' },
      { name: 'title', content: 'MuleSoft Training in Guntur, Mulesoft certification, Mulesoft Course in Guntur.' },


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
