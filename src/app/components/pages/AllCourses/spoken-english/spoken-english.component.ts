import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-spoken-english',
  templateUrl: './spoken-english.component.html',
  styleUrls: ['./spoken-english.component.scss']
})
export class SpokenEnglishComponent implements OnInit {


  spokenenglishFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What Qualification do you need for English Speaking Course Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <ul> <li> Freshers </li> <li> Students </li>  <li> Bachelors & Graduates</li> <li> Any professional or business person </li><li> Abroad studying students and professionals </li> <li> Candidates are willing to learn something new. </li></ul>"
      }
    },{
      "@type": "Question",
      "name": "How can I start learning English Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> English is a well-known language and being proficient in communicating offers many advantages. Here are some arguments to convince you the consider before taking the course </p><ul><li> Customized course module that meets your needs </li> <li> Flexible classes Classroom Training, and weekend classes </li>  <li> Polish your grammar and vocabulary skills </li> <li> Professional guidance from knowledgeable faculty helps you build confidence and speak fluently </li> <li> Assistance with job placements in reputed companies </li><li> Develops strong interpersonal abilities </li></ul> "
      }
    },{
      "@type": "Question",
      "name": "Is it easy to learn English Speaking Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> English Speaking Course is quite easy to use when it comes to designing software for computers. If you put in the effort in English Speaking practice, then a maximum of three months will be enough to understand the entire course. You will be perfect in English Speaking only by practicing. </p> "
      }
    },{
      "@type": "Question",
      "name": "How do I get an English Speaking Course certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> The certification for this English Speaking course by British Council certification. While pursuing a course in English having these certifications can help you stand out from the applicant pool when applying for jobs.</p> <p> At the end of the course, we provide a certificate. Being certified by Nipuna Technologies, the students and working candidates will be directly eligible to grab lucrative job opportunities in the industrial design sector. With expert guidance from our training team, the students will gain practical knowledge to reach new heights.</p> "
      }
    },{
      "@type": "Question",
      "name": "Why English Speaking Course is used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> English is among the top widely spoken languages around the globe. If we consider the language used in India for all Government activities, including all departments as well as mass media and schools, and also industrial and commercial enterprises. The best English spoken language instruction in Guntur. We live in the age of Globalization. The world is becoming more interconnected and greater integration between all countries of the World due to globalization. When we speak of inter-cultural interaction, only one language is the rule of the entire world i.e. English.</p>  "
      }
    },{
      "@type": "Question",
      "name": "Where can I practice this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs.</p>"
      }
    },{
      "@type": "Question",
      "name": "Which institute is best for the English Speaking Course Courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Undoubtedly. Nipuna Technologies is the best institute for English Speaking Course courses. We also offer job-oriented and placement Focused classrooms and English Online classes in Guntur giving more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Labs, and well Experienced Trainers. This Training program at Nipuna technologies is specially designed for both Graduates and working professionals. </p> "
      }
    },{
      "@type": "Question",
      "name": "How long does it take to learn English Speaking Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p>Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p> "
      }
    },
	{
      "@type": "Question",
      "name": "Can I learn English Speaking Course online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Yes, you can learn English Online Instructor-led also. As we provide all the courses both Classroom & online sessions.</p> "
      }
    },
	{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> After completion of this training, we assist you with resume preparation, interview preparation, and placement opportunities.</p>  "
      }
    }]
  }
  
  

  spokenenglishBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/spoken-english-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/Spoken_English_Classes_Guntur.webp"  
    }]
  }
  

  spokenenglishreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/Spoken_English_Classes_Guntur.webp",
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
      "name": "Padma"
    },
    "reviewBody": "<p> I discovered Nipuna Technologies when I was searching for an English training institute in Guntur that could provide the most effective English language. Since joining Nipuna Technologies, I was studying the concepts mentioned in the course and my experience in the classroom has been amazing to learn and explore different concepts simultaneously the methods and tips they provide helped me to master my understanding of the English Language in a unique manner.</p>",
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
      { name: 'description', content: 'Spoken English Classes in Guntur at Nipuna Technologies. In our modern world, it is evident that the English language plays a crucial role in bringing together people from different parts of the globe.' },
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