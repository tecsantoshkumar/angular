import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-unigraphics',
  templateUrl: './unigraphics.component.html',
  styleUrls: ['./unigraphics.component.scss']
})
export class UnigraphicsComponent implements OnInit {


  unigraphicsFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the qualifications for Unigraphics Nx Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> Any graduates, Non-graduates who want to pursue their career in  Designing world-class road designs. </li> <li> BE / B. Tech in Civil passed students to get into the Civil  engineering field.</li> <li> Anyone can join this course who wants to advance his or her  career in civil engineering</li><li> A candidate who would like to restart their career after an  educational gap.</li></ul>"
      }
    },{
      "@type": "Question",
      "name": "What is the Unigraphics Nx course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Unigraphics NX is the most advanced Computer-aided design for multipurpose modeling program that lets you model parts of any geometry, in 3D and 2D. Unigraphics NX also called UG NX or Siemens NX is currently being operated by Siemens PLM software.</p> "
      }
    },{
      "@type": "Question",
      "name": "Is it easy to learn Unigraphics Nx?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> Unigraphics NX is quite easy to use when it comes to designing software for computers. If you put in the effort, then a maximum of three months will be enough to understand the entire course. You will be perfect in Unigraphics NX software only by practicing. </p> "
      }
    },{
      "@type": "Question",
      "name": "How do I get a Unigraphics Nx certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> TThe certification for this Unigraphics NX training is Siemens NX certifications. While pursuing a career in Unigraphics NX, having certifications can help you stand out from the applicant pool when applying for jobs. </p> "
      }
    },{
      "@type": "Question",
      "name": "Why Unigraphics Nx is used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "  <p> Unigraphics NX is a set of design software tools that can complete an element from its beginning step to analyzing its performance  using simulation. </p><p> Unigraphics NX is employed in many industries, opening the door for professionals and freshers to join the top industries.</p> "
      }
    },{
      "@type": "Question",
      "name": "Where can I practice this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practicesessions at our highly equipped labs.</p>"
      }
    },{
      "@type": "Question",
      "name": "Which institute is best for Unigraphics Nx Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Undoubtedly. Nipuna Technologies is the best institute of Unigraphics courses. We also offer job-oriented and placement  Focused classrooms and Online classes in Guntur gives more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Labs, and well Experienced Trainers. This Training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>"
      }
    },{
      "@type": "Question",
      "name": "How long does it take to learn Unigraphics Nx?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "  <p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch.</p> "
      }
    },
	{
      "@type": "Question",
      "name": "Can I learn Unigraphics Nx online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> AYes, you can learn Unigraphics online Instructor-led also. As we provide all the courses both Classroom & online sessions. </p> "
      }
    },
	{
      "@type": "Question",
      "name": "What are services can I expect from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> After completion of this training, we assist you with resume  preparation, interview preparation, and placement opportunities.</p> "
      }
    }]
  }
  

  unigraphicsBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/CADCourses/unigraphics-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/unigraphics-course-guntur.webp"  
    }]
  }
  

  unigraphicsreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/unigraphics-course-guntur.webp",
      "name": "Nipuna Technologies",
     
      "telephone": "+91 7997927111",
      "address" :{
        "@type": "PostalAddress",
        "door-no" : " 6-4-35, 1st Floor",
  
        "streetAddress": "4/1 Arundelpet",
        "addressLocality": " Opposite Sai Grand,Guntur",
        
        "postalCode": "522002",
        "addressState": "Andhrapradesh, Guntur"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    
    "author": {
      "@type": "Person",
      "name": "Anupama"
    },
    "reviewBody": "<p>   I learned the Unigraphics Course at Nipuna technologies, Guntur and it was a fantastic course. It's an amazing Training including all the tools that you require to use and practice with. Overall my experience was good and the teaching is excellent. I would recommend it to anyone to further learn about Unigraphics. </p>",
    "publisher": {
      "@type": "Organization",
      "name": "Nipuna Technologies"
    }
  }
    

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    
this.canonicalService.setCanonicalURL();

    
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Angular SEO Integration, Music CRUD, Angular Universal',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Nipuna Technologies' },
      { name: 'title', content: '' },

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
