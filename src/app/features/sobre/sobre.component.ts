import { Component } from '@angular/core';
import { NavMenuComponent } from "../../shared/components/nav-menu/nav-menu-component";
import { FooterComponent } from "../../shared/components/footer/footer-component";
import { CustomButtonComponent } from "../../shared/components/custom-button/custom-button";
import { SocialComponent } from "../../shared/components/social-component/social-component";

@Component({
  selector: 'app-sobre-component',
  imports: [CustomButtonComponent, FooterComponent, NavMenuComponent, SocialComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent {}
