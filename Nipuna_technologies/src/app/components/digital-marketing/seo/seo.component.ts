import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss']
})
export class SEOComponent implements OnInit {


	seoFaqs = 
  
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
		  "@type": "Question",
		  "name": "SEO Course Eligibility?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> The minimum eligibility criteria of the SEO course is to be a graduate. No need for any technical background for taking the Digital Marketing course.  </p><p> Any fresh graduates, non-graduates, or diploma holders can take the course by all means. </p><ul><li> Students or Working Professionals </li><li> Branding / Sales / Marketing Professionals </li><li> graduates, non-graduates, or diploma holders</li><li> Entrepreneurs, Startups </li><li> Housewives </li></ul>"
		  }
		},{
		  "@type": "Question",
		  "name": "How long will it take you to learn SEO courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Approximately 30 days. We schedule a flexible timetable for our students, you can choose any batch. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "What is an SEO course?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Search engine optimization (SEO) refers to the method of improving the quality of your website to increase its visibility when people search for products or services that are related to your business on Google, Bing, and another search engine. The more visibility and higher rankings your web pages appear in search results the more you will be able to attract the attention of new and existing customers of your business. Here is everything you need to know that you can understand of search engine algorithms and technical SEO. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "How much does the SEO course cost?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> The fees Structure of SEO Courses is economical. However, please contact us to obtain a discount on this course fees. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Where can I learn the SEO Courses?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> Undoubtedly, Nipuna Technologies is the best online SEO course in	Guntur. We also offer job-oriented and placement Focused classrooms	SEO and Online SEO classes in Guntur with more prominence given to	real-time exposure and hands-on experience by the expert trainers.	We provide A/C Class Rooms, High Configured Lab & well Experienced	Trainers. This training program at Nipuna technologies is specially designed for both Graduates and working professionals.</p>  "
		  }
		},{
		  "@type": "Question",
		  "name": "Can I study SEO online?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p> Nipuna Technologies provide classrooms and SEO Online Instructor-led training in Guntur,  join our 60 hrs. Training with expert trainers	to learn this course and ask questions. </p>"
		  }
		},{
		  "@type": "Question",
		  "name": " Who is my Trainer?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Your instructor has 9+ years of experience as a certified WordPress professional. </p> "
		  }
		},{
		  "@type": "Question",
		  "name": "Do I get placement assistance after SEO Training Programs?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "<p>Yes, we provide 100% placement assistance & will help you to get a	job as soon as you complete the courses. </p>  "
		  }
		},
		{
		  "@type": "Question",
		  "name": " What if I miss SEO classes?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": "  <p> You will never miss any session. You can select any one of two	options:</p>	<p> 1. View the class recordings that we send through mail daily.</p>	<p> 2. You can attend the missed session of SEO courses in any other live batch. </p> "
		  }
		},
		{
		  "@type": "Question",
		  "name": "What services could I expect from you?",
		  "acceptedAnswer": {
			"@type": "Answer",
			"text": " <p> After completion of this course, we provide an SEO course and assist	you with resume preparation, interview preparation, and placement	opportunities.</p>  "
		  }
		}]
	  }
	
  
	seoBreadcrumb =
	{
	  "@context": "https://schema.org/", 
	  "@type": "BreadcrumbList", 
	  "itemListElement": [{
		"@type": "ListItem", 
		"position": 1, 
		"name": "https://www.nipunatechnologies.com/DigitalMarketing/Seo-training-institute-guntur",
		"item": "https://www.nipunatechnologies.com/assets/images/course/seo-course-guntur.webp"  
	  }]
	}
	
  
	seoreviews=
	{
	  "@context": "https://schema.org/",
	  "@type": "Review",
	  "itemReviewed": {
		"@type": "organization",
		"image": "https://www.nipunatechnologies.com/assets/images/course/seo-course-guntur.webp",
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
		"name": "Archana"
	  },
	  "reviewBody": "<p> I have successfully completed an SEO course at Nipuna Technologies, I can confidently say that it's the best effective training institution in the field of Digital Marketing located in Guntur. My trainer is an expert with Digital Marketing and covers every aspect of SEO. The Trainer has explained the course to ensure that anyone can grasp it without difficulty. The attractive aspect of this training program is its simplicity and focus on the job. Based on my own experiences, I am able to say that Nipuna Technologies is, without doubt, the top institute of Digital Marketing training. So, I would personally recommend Nipuna technologies as one of the best institutes for anyone who is looking to master the art of digital marketing. </p>",
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