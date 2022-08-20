import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-photoshop',
  templateUrl: './photoshop.component.html',
  styleUrls: ['./photoshop.component.scss']
})
export class PhotoshopComponent implements OnInit {


 photoshopFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Who can take this Photoshop Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul><li>  Fresher’s, Graduates, or non-graduates. </li> <li> Degree holders who have basic computer knowledge. </li> <li>  BPO, Call center persons. </li> <li> Anyone can join this course who is interested  in learning photoshop. </li> <li> Housewives </li> </ul>"
      }
    },{
      "@type": "Question",
      "name": "What is Photoshop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Photoshop is an image editing and graphic design program that Adobe Inc published for Windows and macOS.Adobe has released its latest Photoshop version, December 2021 (version 23.1). Adobe Photoshop allows you to learn photoshop, how to edit and create various infographics and digital art. It can also create and edit multiple layers of raster images and import them in different file formats. Adobe Systems developed to learn Photoshop for Windows and MacOS. This course teaches you how to use photoshop with the latest version of Adobe photoshop CC from Nipuna Technologies. </p> "
      }
    },{
      "@type": "Question",
      "name": "What is the educational qualification required?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> A basic computer knowledge is required to start, there is no minimum education qualification required.</p> "
      }
    },{
      "@type": "Question",
      "name": "What are the job roles in Graphic Designing field?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <ul> <li>  Graphic Designer  </li> <li>  Creative Editor </li> <li>  Photo Editor </li> <li>   Video & Film Editor </li> <li>  Product Designer </li> <li>   Flash Designer </li> <li>  Art Editor </li> <li>  Photoshop artist </li> <li>  Photoshop Editor </li> <li>  Photoshop Designer</li></ul> "
      }
    },{
      "@type": "Question",
      "name": " What is the duration of the Course ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Approximately 60 Hrs.</p> "
      }
    },{
      "@type": "Question",
      "name": "Do I receive a certificate after completion of this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, all our students get certificates from the institute after completing the Graphic design course at Nipuna Technologies. </p>"
      }
    },{
      "@type": "Question",
      "name": "What is Nipuna Technologies Certified Professional Certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> After completion of the course we will conduct an exam, and if you get 80% or more in the exam you will get Nipuna Technologies Certified Professional Certificate. </p> "
      }
    },{
      "@type": "Question",
      "name": "Who is my instructor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Your instructor is a 10+ years experienced graphic designer, Animator & multimedia expert. </p>  "
      }
    },
	{
      "@type": "Question",
      "name": "How much is course Fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Please call us to get the best discount on the course fees. </p>  "
      }
    },
	{
      "@type": "Question",
      "name": "Can I pay course fees in instalments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, definitely we offer 3-4 instalments to pay the complete course fee.</p>  "
      }
    }]
  }
  
  

 photoshopBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/MultiMedia/photoshop-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/Photoshop_Course_Guntur.webp"  
    }]
  }
  

 photoshopreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/Photoshop_Course_Guntur.webp",
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
      "name": "Nagalakshmi"
    },
    "reviewBody": "<p> It was a wonderful experience to complete the Photoshop Course in Guntur at Nipuna Technologies. These courses are taught by a very excellent and efficient trainer. His training was amazing. I would definitely recommend my friends to do courses through Nipuna Technologies. The staff are very accommodating and will take you to your convenience. The trainer explained that each and every concept of the course was brilliant, he also helped me prepare for interviews. </p>",
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
