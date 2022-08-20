import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-maya',
  templateUrl: './maya.component.html',
  styleUrls: ['./maya.component.scss']
})
export class MayaComponent implements OnInit {


 mayaFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "3D Maya Course Eligibility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The minimum eligibility criteria of the 3D Maya course is Class 12/HSC and also to be a graduate to pursue PG diploma courses in the 3D Maya. No need for any technical background for taking this course. </p>"
      }
    },{
      "@type": "Question",
      "name": "What is the 3D Maya course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Autodesk Maya, the industry-standard 3D animation program, is an excellent skill that will help you get a job in film, music and gaming. This course will teach you how to create an entire animation from scratch. Graphic designers will find it a huge benefit to be able to create stunning designs using modeling software such as Autodesk Maya. 3D Maya allows you to create photo illustrations and mockups that will attract clients. </p> "
      }
    },{
      "@type": "Question",
      "name": "How is 3D Maya used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> 3D Maya is used for creating high-end Visual Effects by using animation, Visual effects, rendering, 3D animation used in films & other media. </p> "
      }
    },{
      "@type": "Question",
      "name": "How much does the 3D Maya course cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fees Structure of 3D Maya Courses is economical. However, please contact us to obtain the discounted course fees.</p> "
      }
    },{
      "@type": "Question",
      "name": " Where can I learn the 3D Maya Courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Undoubtedly, Nipuna Technologies is the best 3D Maya online training provider in Guntur. We also offer job-oriented and placement Focused classrooms 3D Maya and Online 3D Maya training classes in Guntur with more prominence given to real-time exposure and hands-on experience by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. This training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>  "
      }
    },{
      "@type": "Question",
      "name": "Can I study 3D Maya online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Nipuna Technologies provide classrooms and 3D Maya Online Instructor-led training in Guntur, join our 90 hrs. training with a graphic designer, 3D Maya animator, Trainer to learn the 3D Maya course and ask questions. </p>"
      }
    },{
      "@type": "Question",
      "name": "Who is my Trainer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Your instructor has been 9+ years of experience as a certified 3D Maya professional. </p> "
      }
    },{
      "@type": "Question",
      "name": "Do I get placement assistance after 3D Maya  Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you to be getting a job as soon as you complete the courses.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> After completion of this training, we provide a 3D Maya course and assist you with resume preparation, interview preparation, and placement opportunities.</p> "
      }
    },
	{
      "@type": "Question",
      "name": "What if I miss 3D Maya classes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> You will never miss any session. You can select any one of two options: </p>  <p> 1. View the class recordings of this Course that we send through mail daily.</p> <p> 2. You can attend the missed session of this training in any other  live batch.</p>  "
      }
    }]
  }
  
  

 mayaBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/MultiMedia/3d-maya-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/3d_Maya_Animation_Course_Guntur.webp"  
    }]
  }
  

 mayareviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/3d_Maya_Animation_Course_Guntur.webp",
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
      "name": "Krishna"
    },
    "reviewBody": "<p> My 3D Maya online training course with Nipuna Technologies was completed. The trainer is extremely knowledgeable and the way he teaches each concept is extraordinary. He also assisted me in the lab sessions. It is easy to grasp the concepts and quickly learn them. Thank you to Nipuna Technologies for helping me to improve my skills. </p>",
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

