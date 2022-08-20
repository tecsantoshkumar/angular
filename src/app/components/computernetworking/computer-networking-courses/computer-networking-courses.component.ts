import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-computer-networking-courses',
  templateUrl: './computer-networking-courses.component.html',
  styleUrls: ['./computer-networking-courses.component.scss']
})
export class ComputerNetworkingCoursesComponent implements OnInit {

 cnetworkingFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the Minimum Educational Qualifications required for computer Network Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> No need for any technical background for taking a Networking course. Any graduates, non-graduates, 10+2 students, fresher’s who are interested in making a mark in the hardware and networking field. Working professionals consisting of experience in the IT domain but who want to shift to hardware and networking can enroll for this course.</p>"
      }
    },{
      "@type": "Question",
      "name": "What are the fees for a Computer Network?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fee structure of this course is economical. However, please contact us to obtain the discounted course fees. </p> "
      }
    },{
      "@type": "Question",
      "name": "Do I receive a certificate after completion of the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, all our students get certificates from the institute after completing the training program at Nipuna Technologies.</p> "
      }
    },{
      "@type": "Question",
      "name": "What is a Computer Network course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The computer network is a system that connects many independent computers to exchange information (data) or resources. Computers and other devices can be integrated to make communication easier. A computer network is a collection of systems of computers that are connected together. You can establish a network connection using either wireless or cable media. Software and hardware are used to connect computers and other tools within a network. </p> "
      }
    },{
      "@type": "Question",
      "name": ".What is starting salary on a computer Network?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> As a Networking professional, the average salary for entry-level can be expected around Rs.2-3 lacs per annum. Moreover, with good knowledge and creative skills in a Network, you can get a high-paying job. </p> <p> Abroad, the average salary of a designer is around $40 k per year. With more knowledge, talented, creative Network professionals will be able to make more earnings in this field.</p>  "
      }
    },{
      "@type": "Question",
      "name": "Who is my instructor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Your instructor has 10+ years of experience as a certified professional.</p>"
      }
    },{
      "@type": "Question",
      "name": " What is the duration of the computer Network Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The duration of the Network course is approximately 45 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p> "
      }
    },{
      "@type": "Question",
      "name": "Do I get placement assistance after the Network Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course. </p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What if I miss a Network Training class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> You will never miss any session. You can select any one of the two options:</p> <p>  1. View the class recordings of the Network Course that we send through mail daily.</p><p> 2. You can attend the missed session of the Hardware and Network training  in any other live batch.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> After completion of this Hardware and Network training, we provide certificates and assist you with resume preparation, interview preparation, and placement opportunities.</p>  "
      }
    }]
  }
  

 cnetworkingBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/Networking/computer-networking-courses-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/Computer_Networking_Courses_Guntur.webp"  
    }]
  }
  

 cnetworkingreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/Computer_Networking_Courses_Guntur.webp",
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
      "name": "Sudheer"
    },
    "reviewBody": "<p> I joined Nipuna Technologies to learn more about networking, good technical training and gained more knowledge in technical aspects. All my trainers helped me to improve my technical and communication skills. Nipuna Technologies helped me get placed in an MNC. The Placement Team was very helpful in placing the students in the best companies. </p>",
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

