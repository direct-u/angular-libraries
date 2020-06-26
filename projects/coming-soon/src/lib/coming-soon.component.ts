import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'du-coming-soon',
  templateUrl: 'coming-soon.component.html',
  styleUrls: ['coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  @Input() logoName;
  @Input() comingSoonText;
  @Input() footer;
  @Input() countDownDateStr;
  countDownDate;
  countDownString = '';

  constructor() {
    this.countDownString = '';
  }

  ngOnInit(): void {
    // TODO: check for date string not null and format
    this.countDownDate = new Date(this.countDownDateStr);
    setInterval(() => {
      this.countDown();
    }, 1000);
  }

  private countDown() {
    const distance = this.countDownDate.getTime() - new Date().getTime();

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.countDownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
