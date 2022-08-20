import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {
    const keywords = this.metaTagService.getTag('name=keywords');    

  }
  ngOnInit() {

    this.canonicalService.setCanonicalURL();
    this.metaTagService.addTag({ name: 'keywords', content: 'about angular, javascript, typescript, meta, seo' });  
    setTimeout(() => {  
      this.metaTagService.updateTag(  
        { name: 'keywords', content: 'about angular, javascript, typescript, meta' },  
        'name=keywords'  
      )  
    }, 4000)  ;
    
    this.metaTagService.addTags([
      {name: 'keywords',content: 'Angular SEO Integration, Music CRUD, Angular Universal'},
        {name: 'Title',content: 'Angular_title SEO Integration, Music CRUD, Angular Universal'},
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'About us_nipuna' },
      { name: 'description', content: 'About us ' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }
    ]);
  }
}
