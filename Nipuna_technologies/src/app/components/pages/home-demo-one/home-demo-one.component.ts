import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-home-demo-one',
  templateUrl: './home-demo-one.component.html',
  styleUrls: ['./home-demo-one.component.scss']
})
export class HomeDemoOneComponent implements OnInit {

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) { }

  ngOnInit(): void {

this.canonicalService.setCanonicalURL();
    this.metaTagService.addTags([
      {
        name: 'keywords', content: 'Angular SEO Integration, Music CRUD, Angular Universal',},
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Nipuna Technologies' },
      { name: 'description', content: 'Nipuna Technologies is the Best Software Training Institute in Guntur for MS Office, Tally, C, Java, Python, Oracle, Digital Marketing, Hardware, AWS, .NET, DTP, Spoken English Courses in Guntur.' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }
    ]);
  }

}
