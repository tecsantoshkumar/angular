import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-linux',
  templateUrl: './linux.component.html',
  styleUrls: ['./linux.component.scss']
})
export class LinuxComponent implements OnInit {


  linuxFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Who can take the training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Anyone who can pursue an excellent and most promising career in Linux can join for the training.</p><ul><li> Freshers with a graduation or diploma can join this course. </li></ul>"
      }
    },{
      "@type": "Question",
      "name": "What is a Linux course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Linux is an open-source operating platform like Microsoft Windows and Apple Mac OS, iOS, and Google Android. An operating systems is a software that allows communication between software and hardware. It transmits input to the processor and then returns output to the hardware for display. Knowledge of Linux administration is the basic function of an operating systems. </p> "
      }
    },{
      "@type": "Question",
      "name": " What are the fees for a Linux?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The fee structure of this course is economical. However, please contact us to obtain the discounted course fees.</p> "
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
      "name": "What is starting salary on a Linux?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> As a Linux professional, the average salary for entry-level can be expected around Rs.2-3 lacs per annum. Moreover, with good knowledge and creative skills in a Network, you can get a high-paying job.</p> <p> Abroad, the average salary of a designer is around $40 k per year. With more knowledge, talented, creative Network professionals will be able to make more earnings in this field.</p>  "
      }
    },{
      "@type": "Question",
      "name": "Who is my instructor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Your instructor has 8+ years of experience as a certified professional.</p>"
      }
    },{
      "@type": "Question",
      "name": "What is the duration of Linux Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The duration of Linux courses is approximately 45 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p> "
      }
    },{
      "@type": "Question",
      "name": "Do I get placement assistance after the Linux Training Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p> "
      }
    },
	{
      "@type": "Question",
      "name": "What services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> After completion of this Linux training, we provide certificates and assist you with resume preparation, interview preparation, and placement opportunities.</p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What if I miss a Linux Training class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> You will never miss any session. You can select any one of two options: </p> <p> 1. View the class recordings of this Course that we send through mail daily.</p><p> 2. You can attend the missed session of this training in any otherlive batch.</p>  "
      }
    }]
  }
  
  

  linuxBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/Networking/linux-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/linux-course-guntur.webp"  
    }]
  }
  

  linuxreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/linux-course-guntur.webp",
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
      "name": "Harika"
    },
    "reviewBody": "<p> I enrolled for Linux Courses in Guntur at Nipuna Technologies. I strongly recommend Nipuna Technologies for the best training in Linux. The trainer is certified and has in-depth knowledge in the course. I got a good idea from the basics to advanced technologies of Linux. The lab sessions are excellent. </p>",
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
