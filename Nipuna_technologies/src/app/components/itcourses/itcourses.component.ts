import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-itcourses',
  templateUrl: './itcourses.component.html',
  styleUrls: ['./itcourses.component.scss']
})
export class ITCOURSESComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
    )
      .subscribe(() => {
        var route = this.getChild(this.activatedRoute)
        var data = route.snapshot.data;
        this.titleService.setTitle(data.title);
        if (data.descrption) {
          this.metaService.updateTag({ name: 'description', content: data.descrption })
        } else {
          this.metaService.removeTag("name='description'")
        }
      })
  }
  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild)
      return this.getChild(activatedRoute.firstChild);
    else
      return activatedRoute;
  }

}
