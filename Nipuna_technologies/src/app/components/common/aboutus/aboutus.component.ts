import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MetaServiceService } from 'src/app/Services/meta-service.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private metaTagService: Meta, private canonicalService: MetaServiceService) {}

  ngOnInit(): void {
    

  }

}
