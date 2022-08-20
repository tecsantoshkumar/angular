import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MetaServiceService } from 'src/app/Services/meta-service.service';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor( private activatedRoute: ActivatedRoute,private canonicalService: MetaServiceService, public router: Router, private titleService: Title,
        private metaService: Meta) { }

    ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
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

    switcherClassApplied = false;
    switcherToggleClass() {
        this.switcherClassApplied = !this.switcherClassApplied;
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }



getChild(activatedRoute: ActivatedRoute): any {
if (activatedRoute.firstChild)
  return this.getChild(activatedRoute.firstChild);
else
  return activatedRoute;
}


}