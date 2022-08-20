import { AfterViewInit, ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd, ActivatedRoute  } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { DisableRightClickServiceService } from './Services/disable-right-click-service.service';
import { Meta, Title } from '@angular/platform-browser';
declare let $: any;
declare let ga: Function;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent  implements AfterViewInit{
    title = 'Nipuna Technologies';
    Advancedjavaorg={ "@context": "https://schema.org",
"@type": "Organization",
"name": "Nipuna Technologies",
"legalName" : "Nipuna Technologies",
"url": "https://www.nipunatechnologies.com/",
"logo": "https://www.nipunatechnologies.com/assets/images/logo.png",
"foundingDate": "2022",
"founders": [
{
"@type": "Person",
"name": "RAJA"
} ],
"address": {
"@type": "PostalAddress",
"streetAddress": "Door No : 6-4-35, 1st Floor, 4/1 Arundelpet,",
"addressLocality": " Opposite Sai Grand,Guntur, Andhra Pradesh 522002",
"addressRegion": "IND",
"postalCode": "522002",
"addressCountry": "INDIA"
},
"contactPoint": {
"@type": "ContactPoint",
"contactType": "customer support",
"telephone": "+917997927111",
"email": "admin@nipunatechnologies.com"
},
"sameAs": [ 
"https://www.facebook.com/NipunaTechnologies/",
"https://maps.google.com/?cid=752287483685534777",
"https://www.instagram.com/nipuna_technologies/",
"https://api.whatsapp.com/send?phone=917997927111&text=HI"
]}

    location: any;
    routerSubscription: any;
    constructor(private changeDetectorRef: ChangeDetectorRef, private router: Router,
        private activatedRoute: ActivatedRoute, private rightClickDisable: DisableRightClickServiceService, 
        private renderer: Renderer2,  private titleService: Title,
        private metaService: Meta) {
          changeDetectorRef.detach()
    }

    ngOnInit() {
                //  this.rightClickDisable.disableRightClick();

        this.recallJsFuntions();
        this.router.events.pipe(
          filter((event: any) => event instanceof NavigationEnd),
        )
          .subscribe(() => {
            var route = this.getChild(this.activatedRoute)
            var data = route.snapshot.data;
            this.titleService.setTitle(data.title);
            if (data.description) {
              this.metaService.updateTag({ name: 'description', content: data.description })
            } else {
             // this.metaService.removeTag("name='description'")
            }
          })
      }
      getChild(activatedRoute: ActivatedRoute): any {
        if (activatedRoute.firstChild)
          return this.getChild(activatedRoute.firstChild);
        else
          return activatedRoute;
      }


 recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }


    ngAfterViewInit() {
        let loader = this.renderer.selectRootElement('#loader');
        this.renderer.setStyle(loader, 'display', 'none');
      }



}