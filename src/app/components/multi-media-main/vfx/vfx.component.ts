import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-vfx',
  templateUrl: './vfx.component.html',
  styleUrls: ['./vfx.component.scss']
})
export class VfxComponent implements OnInit {

	vfxFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "How long will it take you to learn VFX courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 90 days. We schedule a flexible timetable for our students, you can choose any batch. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "What are Visual Effects used for?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Visual Effects is used for creating high-end Visual Effects by using animation, Visual effects, rendering, 3D animation used in films & other media.  </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How much does the VFX course cost?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> The fees Structure of VFX Courses is economical. However, please contact us to obtain the discounted course fees. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I learn the VFX Courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Undoubtedly, Nipuna Technologies is the best VFX online training provider in Guntur. We also offer job-oriented and placement Focused classrooms VFX and Online VFX training classes in Guntur with more prominence given to real-time exposure and hands-on experience by the expert trainers. We provide A/C Class Rooms, High Configured Lab & well Experienced Trainers. This training program at Nipuna technologies is specially designed for both Graduates and working professionals. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Can I study VFX online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Nipuna Technologies provide classrooms and VFX Online Instructor-led training in Guntur, join our 90 hrs. training with a graphic designer, VFX animator, Trainer to learn the VFX course and ask questions.</p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Who is my Trainer?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Your instructor has been 9+ years of experience as a certified VFX professional. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": "Do I get placement assistance after VFX  Training Programs?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Yes, we provide 100% placement assistance & will help you to be getting a job as soon as you complete the courses. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What if I miss VFX classes?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "  <p> You will never miss any session. You can select any one of two options:</p><p> 1. View the class recordings that we send through mail daily.</p> <p>2. You can attend the missed session of VFX courses in any other live batch.</p>"
		  }
		},
		{
		  "@type": "Question",
		  "name": "What services could I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> After completion of this training, we provide a VFX course and assist you with resume preparation, interview preparation, and placement opportunities. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": "VFX Course Eligibility?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> The minimum eligibility criteria of the VFX course in VFX is Class 12/HSC and also to be a graduate to pursue PG diploma courses in the VFX. No need for any technical background for taking the VFX course.  </p>  "
		  }
		}]
	  }
	  
  
	vfxBreadcrumb =
	{
	  "@context": "https://schema.org/", 
	  "@type": "BreadcrumbList", 
	  "itemListElement": [{
		"@type": "ListItem", 
		"position": 1, 
		"name": "https://www.nipunatechnologies.com/MultiMedia/Vfx-training-institute-guntur",
		"item": "https://www.nipunatechnologies.com/assets/images/course/Course_VFX%20_Guntur.webp"  
	  }]
	}
	
  
	vfxreviews=
	{
	  "@context": "https://schema.org/",
	  "@type": "Review",
	  "itemReviewed": {
		"@type": "organization",
		"image": "https://www.nipunatechnologies.com/assets/images/course/Course_VFX%20_Guntur.webp",
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
		"name": "Karthik"
	  },
	  "reviewBody": "<p> I've completed my VFX online course from Guntur with Nipuna Technologies, the trainer is an extremely experienced professional, and his method of teaching every concept is exceptional and he provides each concept through live examples. This is a great method for the concepts of the courses to learn quickly. I would like to thank Nipuna Technologies and the trainer to help me improve my skills. </p>",
	  "publisher": {
		"@type": "Organization",
		"name": "Nipuna Technologies"
	  }
	}
	  

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

	ngOnInit(): void {
	  
	  // this.canonicalService.setCanonicalURL();
  
	  
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
	}  relatedCoursesSlides: OwlOptions = {
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