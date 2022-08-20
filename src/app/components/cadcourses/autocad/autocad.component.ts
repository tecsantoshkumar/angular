import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-autocad',
  templateUrl: './autocad.component.html',
  styleUrls: ['./autocad.component.scss']
})
export class AutocadComponent implements OnInit {


  autocadFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is the duration of AutoCAD training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Approximately 30-45 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p>"
      }
    },{
      "@type": "Question",
      "name": "How much does an AutoCAD certification cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fees Structure of the AutoCAD certification course is economical. However, please contact us to obtain the discounted course fees.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is the course of AutoCAD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>AutoCAD is software for civil engineers to design and prepare documentation solution that supports Building Information Modeling (BIM) workflows on a variety of civil infrastructure project types, including roads, highways, land development, rail, airports, and  water. This Software is a time saver for most of the engineers and designers because it has the various tools and features. </p> "
      }
    },{
      "@type": "Question",
      "name": "Can I get AutoCAD certified online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Yes, You can learn AutoCAD certification online also. As we provide all the courses both Classroom and online training sessions. </p> "
      }
    },{
      "@type": "Question",
      "name": "Where can I practice AutoCAD courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs. </p>  "
      }
    },{
      "@type": "Question",
      "name": "Which institute is best for AutoCAD training",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Undoubtedly. Nipuna Technologies is the best institute of AutoCAD courses. We also offers job-oriented and placement Focused  classrooms and Online AutoCAD classes in Guntur gives more  prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Lab and well Experienced    Trainers. This Training program at Nipuna technologies is specially designed for both Graduates and working professionals. </p>"
      }
    },{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> After completion of this training, we assist you with the resume preparation, interview preparation, and placement opportunities. </p> "
      }
    },{
      "@type": "Question",
      "name": "Do I get placement assistance after the AutoCAD Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Yes, we provide 100% placement assistance and will help you get a job as soon as you complete the course.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What if I miss an AutoCAD Training class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>You will never miss any session. You can select any one of the two options: 1. View the class recordings of Courses that we send through mail daily. 2. You can attend the missed session of the training in any other live batch. </p>  "
      }
    }]
  }
  

  autocadBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/CADCourses/Autocad-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/autocad-civil-course-guntur.webp"  
    }]
  }
  

  autocadreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/autocad-civil-course-guntur.webp",
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
      "name": "Sandhya"
    },
    "reviewBody": "<p> I joined the AutoCAD Courses at Nipuna Technologies, the support of the trainer and the other staff was nice. The learning videos in AutoCAD were very informative. The trainer was awesome and if you have any doubts, you can ask him and he replies very fast. Thank you for the support of the placement team and my trainer </p>",
    "publisher": {
      "@type": "Organization",
      "name": "Nipuna Technologies"
    }
  }
    

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) { }

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
