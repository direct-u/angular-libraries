import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  logoName = 'Direct-U';
  comingSoonText = 'Coming Soon';
  footer = '2020 Direct-U. All rights reserved';
  countDownDateStr = '2021-01-01'; // TODO: change static date to dynamic date

  constructor() {
  }

  ngOnInit(): void {
  }

}
