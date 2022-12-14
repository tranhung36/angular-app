import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h4>
      Angular Status
    </h4>
  `,
  styles: [
    "h4{color:green;font-size:34px;font-weight:bold;font-style:italic}"
  ]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
