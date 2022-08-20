import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.scss']
})
export class MultimediaComponent implements OnInit {


 multimediaFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is the qualification of multimedia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The minimum qualification for Multimedia course is Class 12/HSC and also should be a graduate to pursue PG diploma courses in Multimedia and no need for any technical background for taking this Multimedia training.  </p> <ul><li> Students or Working Professionals. </li> <li> Branding  / Sales / Marketing Professionals. </li> <li> graduates, non-graduates, or diploma holders.</li> <li> Entrepreneurs, Startups. </li> <li> Housewives. </li></ul>"
      }
    },{
      "@type": "Question",
      "name": "What do you learn in multimedia course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul>  <li> Graphic Design. </li> <li> Photoshop </li> <li> DTP </li> <li> Video Editing</li> <li> VFX </li> <li> 3D MAYA </li></ul> "
      }
    },{
      "@type": "Question",
      "name": "What is a multimedia course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Multimedia is the computer-assisted blending of text, drawings, stills, moving images (videos), graphics, audio, animation, and any other media in which all the types of interactions can be expressed, stored, communicated, and processed digitally.</p> "
      }
    },{
      "@type": "Question",
      "name": "How long will it take you to learn Multimedia Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Approximately 90 days. We schedule a flexible timetable for our students, you can choose any batch.</p> "
      }
    },{
      "@type": "Question",
      "name": "How much does the Multimedia Training cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fees Structure of Multimedia Training is economical. However, please contact us to obtain the discounted course fees.</p>  "
      }
    },{
      "@type": "Question",
      "name": "Where can I learn the Multimedia Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Undoubtedly, Nipuna Technologies is the best Multimedia training provider in Guntur. We also offer job-oriented and placement Focused classrooms and Online Multimedia training classes in Guntur with more prominence given to real-time exposure and hands-on experience by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. This training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>"
      }
    },{
      "@type": "Question",
      "name": "Can I study Multimedia Training online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Nipuna Technologies provide classrooms and Multimedia Online Instructor-led training in Guntur. </p> "
      }
    },{
      "@type": "Question",
      "name": "Who is my Trainer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Your instructor has 9+ years of experience as a certified Multimedia professional. </p>  "
      }
    },
	{
      "@type": "Question",
      "name": "Do I get placement assistance after Multimedia Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you to get a job as soon as you complete the courses.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "hat are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> After completion of this training, we assist you with resume preparation, interview preparation, and placement opportunities.</p>  "
      }
    }]
  }
  

 multimediaBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/MultiMedia/multimedia-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/Multimedia_Courses_Guntur.webp"  
    }]
  }
  

 multimediareviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/Multimedia_Courses_Guntur.webp",
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
      "name": "Meghana"
    },
    "reviewBody": "<p> I have Completed VFX online courses in Guntur with Nipuna Technologies The trainer is an experienced professional and his teaching methods are exceptional. He demonstrates each concept using live examples and It is easy to grasp the concepts quickly and learn them. Thank you to Nipuna Technologies for helping me to improve my skills. </p>",
    "publisher": {
      "@type": "Organization",
      "name": "Nipuna Technologies"
    }
  }
    

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    
this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      {name: 'keywords',content: 'Nipuna Technologies',},
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