import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.scss']
})
export class AndroidComponent implements OnInit {


  androidFaqs = 
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are Android courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Android Certification Training It is in line with Google's mission of helping make India an international center of top-quality mobile developers, and helping Google in its mission to train 2 million Android Developers. We provide Android training is conducted by experts in the field of developing complicated mobile apps. These Android courses will include engagement sessions and hands-on tasks which will help you graduate from this Android training course with the skills of an accomplished Android development. </p>"
      }
    },{
      "@type": "Question",
      "name": "Is android app development easy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> There are numerous challenges that confront an Android developer, as the use of Android applications is extremely simple but designing and creating them can be quite challenging. There is a lot of complexity in the creation of Android applications. </p> "
      }
    },{
      "@type": "Question",
      "name": "Is there any Android certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>The Associate Android Developer Certification exam is the Android certification exam How can I become an android app developer? </p> "
      }
    },{
      "@type": "Question",
      "name": "How can I become an android app developer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Associate Android Developer Certification You can be eligible for jobs that require entry-level experience for entry-level positions in Android development. Learn this self-paced Android Basics in Kotlin training When you're done take the certification test to begin your journey as a professional developer.</p> "
      }
    },{
      "@type": "Question",
      "name": "What will the exam cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> The Associate Android Developer Certification costs $149 USD and includes one exam. Prices in your area may differ based on the country you are from.</p> "
      }
    },{
      "@type": "Question",
      "name": "Can I become an Android developer in 6 months?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Approximately 5-6 months to learn Android app development Complete course. We schedule a flexible timetable for our students, you can choose any batch.</p>"
      }
    },{
      "@type": "Question",
      "name": "Why Learn Android App Development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Android is fast becoming one of the most popular platforms for developers currently. There is a high need for experienced Android developers throughout the globe. Many businesses in multiple fields are creating Android Apps both for enterprise and retail products. No matter if you're studying or working employed in the IT business, having Android Development skills will help you take the next jump in your profession. In the Android program, you'll build your own mobile apps under the direction of our skilled instructors. You will get an experience that is hands-on. This course is designed to assist you in your quest to develop into a top mobile application developer. </p> "
      }
    },{
      "@type": "Question",
      "name": "What are the prerequisites required for the Android Courses in Guntur at Nipuna Technologies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Nipuna Technologies Android Courses in Guntur do not require any particular requirements. But, having a fundamental knowledge about Java Programming Language, OOPs concepts will provide advantages to the students in their ability to understand how to comprehend the Android App Development concepts at ease. </p>  "
      }
    },
	{
      "@type": "Question",
      "name": "Do I receive a certificate after completion of the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Yes, all our students get certificates from the institute after completing the Android training program at Nipuna Technologies. </p>  "
      }
    },
	{
      "@type": "Question",
      "name": "What is Nipuna Technologies Certified Professional Certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> After completion of the course, we will conduct an exam, and if you get 80% or more in the exam you will get Nipuna Technologies Certified Professional Certificate.</p>  "
      }
    }]
  }
   
 
  androidBreadcrumb =
   {
     "@context": "https://schema.org/", 
     "@type": "BreadcrumbList", 
     "itemListElement": [{
       "@type": "ListItem", 
       "position": 1, 
       "name": "https://www.nipunatechnologies.com/ITCourses/Android-training-institute-guntur",
       "item": "https://www.nipunatechnologies.com/assets/images/course/Android_App_Development_course_Guntur.webp"  
     }]
   }
   
 
   androidreviews=
   {
     "@context": "https://schema.org/",
     "@type": "Review",
     "itemReviewed": {
       "@type": "organization",
       "image": "https://www.nipunatechnologies.com/assets/images/course/Android_App_Development_course_Guntur.webp",
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
       "ratingValue": "5"     },
     
     "author": {
       "@type": "Person",
       "name": "Gayatri"
     },
     "reviewBody": "<p> Android Training at Nipuna Technologies was overall excellent. The entire syllabus for this Android Course with assignments was made me gain so much knowledge in android app development.  All credit goes directly to Nipuna Technologies! Great Job. </p>",
     "publisher": {
       "@type": "Organization",
       "name": "Nipuna Technologies"
     }
   }


  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    
// this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      {name: 'keywords', content: 'Nipuna Technologies, software courses training Institute, IT Courses, Guntur, Android Studio, Java Programming, Data Storage, User Interface, Android Media API.',},
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
