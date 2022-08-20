import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) { }

  ngOnInit(): void {

this.canonicalService.setCanonicalURL();
    this.metaTagService.addTags([
      {
        name: 'keywords', content: 'Angular SEO Integration, Music CRUD, Angular Universal',},
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Nipuna Technologies' },
      { name: 'description', content: 'Nipuna Technologies is the Best Software Training Institute in Guntur Latest From Our Blogs' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }
    ]);
  }

}
