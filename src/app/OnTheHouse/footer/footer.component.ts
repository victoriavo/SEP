import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'footercustom',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

    @Input() textcolor: string;
  

}