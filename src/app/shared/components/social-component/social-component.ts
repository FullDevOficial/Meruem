import { Component } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button";

@Component({
  selector: 'app-social-component',
  imports: [CustomButtonComponent],
  templateUrl: './social-component.html',
  styleUrl: './social-component.scss'
})
export class SocialComponent {

}
