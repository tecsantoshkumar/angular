import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class MetaServiceService {
  constructor(@Inject(DOCUMENT) private dom: any ,private title: Title, private meta: Meta) { }
  setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.dom.URL : url;
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canURL);
  }


  
  // updateMeta(route: string){
  //   if(Object.prototype.hasOwnProperty.call(META_INFO, route)){
  //     const {title, description} = META_INFO[route];
  //     this.updateTitle(title);
  //     this.updateDescription(description)
  //   }
  // }

  updateTitle(title: string) {
    if (title) {
      this.title.setTitle(title);
    }
  }

  updateDescription(description: string) {
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }
}