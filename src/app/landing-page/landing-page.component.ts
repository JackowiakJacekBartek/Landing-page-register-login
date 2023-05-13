import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegisterPopUpComponent} from "./register-pop-up/register-pop-up.component";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(public popUp: MatDialog) {
  }
  openDialog(){
    this.popUp.open(RegisterPopUpComponent);
  }
}
