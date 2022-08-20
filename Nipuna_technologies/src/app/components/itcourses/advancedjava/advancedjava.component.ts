import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';
import { Title } from "@angular/platform-browser";


@Component({
  selector: 'app-advancedjava',
  templateUrl: './advancedjava.component.html',
  styleUrls: ['./advancedjava.component.scss']
})
export class AdvancedjavaComponent implements OnInit {

 AdvancedJava = 
 {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Who should take up this Java Developer training course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Software developers   Web designers Programming enthusiasts Engineering graduates Students who want to become Java developers"
      }
    },{
      "@type": "Question",
      "name": "How long will it take to learn Advance Java?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Approximately 45 Hrs. to learn java's full-stack will take 6 months to complete. We schedule a flexible timetable for our students, you can choose any batch."
      }
    },{
      "@type": "Question",
      "name": "Do I receive a certificate after completion of the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our students get certificates from the institute after completing the Java training program at Nipuna Technologies."
      }
    },{
      "@type": "Question",
      "name": "What is Nipuna Technologies Certified Professional Certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After completion of the course, we will conduct an exam, and if you get 80% or more in the exam you will get Nipuna Technologies Certified Professional Certificate."
      }
    },{
      "@type": "Question",
      "name": "Who is my instructor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your instructor is 10+ years experienced Java developer in TCS and HCL companies."
      }
    },{
      "@type": "Question",
      "name": "Can I pay course fees in installments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, definitely we offer 3-4 installments you can pay the complete course fee."
      }
    },{
      "@type": "Question",
      "name": "What are the Advance Java courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AdvanceJava is everything of Java programming and that is an advanced version of Core Java - most importantly the APIs specified within Java Enterprise Edition, including Servlet programming, Web Services, the Persistence API, etc. It is the Web & Enterprise application development platform that basically follows both server and client architecture."
      }
    },{
      "@type": "Question",
      "name": "What if I miss an Advance Java class?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will never miss any session. You can select any one of two options:  1. View the class recordings that we send through mail daily. 2. You can attend the missed session of the Java coaching in any other live batch."
      }
    }, 

    ]
  }


  advancedjavaBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/ITCourses/advanced-java-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/Advanced_java_course_Guntur.webp"  
    }]
  }
  

 
    
  advancedjavareviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/Advanced_java_course_Guntur.webp",
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
      "name": "sandhya"
    },
    "reviewBody": "<p> Hello, I'm Sandhya of Guntur and graduated in 2021. searching for IT Programs that have Placements. I decided to go with Nipuna Technologies which is Very good. I joined in Java full-stack course here and completed it successfully. The trainers here are extremely excellent and trained me effectively. Today I was selected in three companies and I choose HTC Global Services India. I would like to thank my trainer along with Nipuna technologies for giving me this fantastic opportunity. </p>",
    "publisher": {
      "@type": "Organization",
      "name": "Nipuna Technologies"
    }
  }

Advancedjavaorg={ "@context": "https://schema.org",
"@type": "Organization",
"name": "Nipuna Technologies",
"legalName" : "Nipuna Technologies",
"url": "https://www.nipunatechnologies.com/",
"logo": "https://www.nipunatechnologies.com/assets/images/logo.png",
"foundingDate": "2022",
"founders": [
{
"@type": "Person",
"name": "RAJA"
} ],
"address": {
"@type": "PostalAddress",
"streetAddress": "Door No : 6-4-35, 1st Floor, 4/1 Arundelpet,",
"addressLocality": " Opposite Sai Grand,Guntur, Andhra Pradesh 522002",
"addressRegion": "IND",
"postalCode": "522002",
"addressCountry": "INDIA"
},
"contactPoint": {
"@type": "ContactPoint",
"contactType": "customer support",
"telephone": "+917997927111",
"email": "admin@nipunatechnologies.com"
},
"sameAs": [ 
"https://www.facebook.com/NipunaTechnologies/",
"https://maps.google.com/?cid=752287483685534777",
"https://www.instagram.com/nipuna_technologies/",
"https://api.whatsapp.com/send?phone=917997927111&text=HI"
]}

AdvancedjavaReviews=  {
  "@context": "https://schema.org/",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Software Training Institute",
    "image": "https://www.nipunatechnologies.com/assets/images/logo.png",
    "name": "Nipuna Technologies",
    "servesCuisine": "Nipuna Technologies",
    "priceRange": "$$$",
    "telephone": "+917997927111",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Door No : 6-4-35, 1st Floor, 4/1 Arundelpet,",
      "addressLocality": " Opposite Sai Grand,Guntur, Andhra Pradesh 522002",
      "addressRegion": "IND",
      "postalCode": "522002",
      "addressCountry": "INDIA"
      },
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4"
  },
  "name": "Hello, I'm Sandhya of Guntur and graduated in 2021. searching for IT Programs that have Placements. I decided to go with Nipuna Technologies which is Very good.",
  "author": {
    "@type": "Person",
    "name": "sandhya"
  },
  "reviewBody": "Thank you thats great.",
  "publisher": {
    "@type": "Organization",
    "name": "Nipuna Technologies"
  }
}

  constructor(private title: Title, private metaTagService: Meta, private canonicalService: MetaServiceService) {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Nipuna Technologies, software courses training Institute, IT Courses, live projects, Affordable fees, placements, Guntur, Core Python, Advance Python, File Handling, Functions', },
      // { name: 'title', content: 'Advanced java course in Guntur| Advanced java programming Training| Advanced java certification course in Guntur.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Nipuna Technologies' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]);


   }

  ngOnInit(): void {
    // 1. Select the div element using the id property
const app = document.getElementById("titleId")?.remove;
// 2. Create a new <p></p> element programmaticallyg
const p = document.createElement("p");
// 3. Add the text content
p.textContent = "Hello, World!";
// 4. Append the p element to the div element
// app?.appendChild(p);
    console.log('id' + app);
    // this.title.setTitle("Product Page - This is the product page");
this.canonicalService.setCanonicalURL();
  
  }
  
}
