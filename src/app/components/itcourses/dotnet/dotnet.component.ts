import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-dotnet',
  templateUrl: './dotnet.component.html',
  styleUrls: ['./dotnet.component.scss']
})
export class DotnetComponent implements OnInit {


   
 dotnetFaqs = 
 {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": " How long will it take to learn Dot NET?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "<p> Approximately 90 days. we schedule a flexible time-table for our students, you can choose any batch.</p>"
    }
  },{
    "@type": "Question",
    "name": "What are the fees Structure for the Dot NET online Training?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": " <p>The fees Structure of the course is economical. However, please contact us to obtain the discounted course fees.  </p> "
    }
  },{
    "@type": "Question",
    "name": " What is Dot NET course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": " <p> .NET is a free, cross-platform, & open-source development platform for building many types of applications and it is also a software framework that is designed and developed by Microsoft. This platform uses multiple programming languages, libraries and editors to build web, mobile, desktop applications, and many more. </p> "
    }
  },{
    "@type": "Question",
    "name": "Is Dot NET easy to learn?",
    "acceptedAnswer": {
      "@type": "Answer",
     "text": "<p> Dot NET is an easy and enjoyable course from start to finish, You need write .NET apps in C#, F#, or Visual studio to learn in .NET platform professionally it will take you two to three months. If you don't know any of these languages, you need to learn those languages first. Learn C# programming language for web development.</p> "
    }
  },{
    "@type": "Question",
    "name": "Can I learn Dot NET online training ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": " <p> Yes, You can learn .NET online also. As we provide all the courses both Classroom & online sessions. </p> "
    }
  },{
    "@type": "Question",
    "name": "What are services can I expect from you?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "<p> After completion of this training, we assist you with the resume preparation, interview preparation, and placement opportunities. </p>"
    }
  },{
    "@type": "Question",
    "name": " Do I get placement assistance after the Dot NET online Training Programs?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": " <p> Yes, we provide 100% placement assistance & will help you get a job as soon as you complete the course.</p>"
    }
  },{
    "@type": "Question",
    "name": "What if I miss a Dot NET online Training class?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": " <p>  You will never miss any session. You can select any one of the two  options: </p><p> 1. View the class recordings of AngularJS Course that we send through mail daily.</p> <p> 2. You can attend the missed session of the AngularJS training in any other live batch.</p>  "
    }
  },
{
    "@type": "Question",
    "name": " Will you provide training on live projects during this course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "<p> Yes, you will work on a live project under the guidance of our trainer. Once you complete your project you will receive an Internship Certificate. </p>"
    }
  }]
}
  
  
  

 dotnetBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/dot-net-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/Dot_Net_Course_Guntur.webp"  
    }]
  }
  

 
    



dotnetreviews=
{
  "@context": "https://schema.org/",
  "@type": "Review",
  "itemReviewed": {
    "@type": "organization",
    "image": "https://www.nipunatechnologies.com/assets/images/course/Dot_Net_Course_Guntur.webp",
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
    "ratingValue": "5"  },
  
  "author": {
    "@type": "Person",
    "name": "Ramya"
  },
  "reviewBody": "<p> I opted for Dot NET training and it was great learning from NipunaTechnologies. The overall experience that I had with this institute was great, both in terms of the training and the Management staff as well. The practical training by our trainer has enabled me to improve my real-time performance.</p>",
  "publisher": {
    "@type": "Organization",
    "name": "Nipuna Technologies"
  }
}
    

constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    
// this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      {name: 'keywords', content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Afordable fees, placements, Guntur, Programming languages, ',},
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
