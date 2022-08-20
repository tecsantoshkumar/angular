import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-solidworks',
  templateUrl: './solidworks.component.html',
  styleUrls: ['./solidworks.component.scss']
})
export class SolidworksComponent implements OnInit {

  solidworksFaqs = 
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the qualifications for SolidWorks Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul> <li> Any graduates, Non-graduates who want to pursue their career in Designing world-class road designs. </li> <li> BE / B. Tech in Civil passed students to get into the Civil engineering field.</li> <li> Anyone can join this course who wants to advance his or her career in civil engineering</li> <li> A candidate who would like to restart their career after an educational gap.</li></ul>"
      }
    },{
      "@type": "Question",
      "name": "What is the SolidWorks course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> SolidWorks is a popular software tool that can be used beginning from the concept of the design until the final manufacturing of the product. It is the most widely used tool for designing and it  supports efficient learning of 3D modeling. The use of these programs could bring numerous advantages to users.</p> "
      }
    },{
      "@type": "Question",
      "name": "How do I get a SolidWorks certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> The certification for this SolidWorks course are having three Certifications. While pursuing a career in SolidWorks, having certifications can help you stand out from the applicant pool when applying for jobs. </p> "
      }
    },{
      "@type": "Question",
      "name": "Why SolidWorks is used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p> SolidWorks helps in translating new ideas into designs quickly and effectively. SolidWorks can help the designer or engineer efficiently communicate their design ideas to someone or users who is not a technical person. </p> "
      }
    },{
      "@type": "Question",
      "name": "Why SolidWorks is used in Mechanical engineering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>SolidWorks is basically preferred by all Mechanical engineers, designers, and students because it offers various advantages/facilities over the traditional 2D design. Therefore, learning 3D modeling tools like 3D CAD or SolidWorks is a must since they are among the most commonly used 3D CAD tools used in the market.</p>  "
      }
    },{
      "@type": "Question",
      "name": "Is it easy to learn SolidWorks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Solid works is quite easy to use when it comes to designing software for computers. If you put in the effort, then a maximum of three months will be enough to understand the entire course. You will be perfect in the SolidWorks software only by practicing.</p>"
      }
    },{
      "@type": "Question",
      "name": "Where can I practice this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> We provide A/C Class Rooms, High Configured Lab with well Experienced Trainers. Our trainers will assist you in Practice sessions at our highly equipped labs.</p> "
      }
    },{
      "@type": "Question",
      "name": "Which institute is best for SolidWorks Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "  <p> Undoubtedly. Nipuna Technologies is the best institute for SolidWorks courses. We also offer job-oriented and placement Focused classrooms and Online classes in Guntur giving more prominence given to real-time exposure by the expert trainers. We provide A/C Class Rooms, High Configured Labs, and well Experienced Trainers. This Training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p> "
      }
    },
	{
      "@type": "Question",
      "name": "How long does it take to learn SolidWorks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Approximately 60 Hrs. we schedule a flexible timetable for our students, you can choose any batch. </p> "
      }
    },
	{
      "@type": "Question",
      "name": "Can I learn SolidWorks online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " <p> Yes, you can learn SolidWorks online Instructor-led also. As we provide all the courses both Classroom & online sessions.</p> "
      }
    }]
  }
  
  

  solidworksBreadcrumb =
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "https://www.nipunatechnologies.com/CADCourses/solidworks-training-institute-guntur",
      "item": "https://www.nipunatechnologies.com/assets/images/course/solidworks-training-guntur.webp"  
    }]
  }
  

  solidworksreviews=
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "organization",
      "image": "https://www.nipunatechnologies.com/assets/images/course/solidworks-training-guntur.webp",
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
      "name": "venkat"
    },
    "reviewBody": "<p> I have completed SolidWorks Course from Nipuna Technologies. It provides the training was informative and instructive. The course was very good and the instructor had a good understanding of SolidWorks. The institute is equipped with good infrastructure for classrooms and the material is great and efficient. This training has enabled me to gain a thorough understanding of SolidWorks. I personally suggest that people sign up with Nipuna Technologies for all CADD courses. </p>",
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
