import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onlineclasses',
  templateUrl: './onlineclasses.component.html',
  styleUrls: ['./onlineclasses.component.scss']
})
export class OnlineclassesComponent implements OnInit {

  constructor(
		public router: Router
	) { }

  ngOnInit(): void {
  }

}
