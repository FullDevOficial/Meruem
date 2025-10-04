import { Component } from '@angular/core';
import { GruposComponent } from "../grupos/grupos.component";
import { CustomButtonComponent } from "../../shared/components/custom-button/custom-button";
import { FooterComponent } from "../../shared/components/footer/footer-component";
import { ModalComponent } from "../../shared/components/custom-modal/custom-modal";
import { SocialComponent } from "../../shared/components/social-component/social-component";

@Component({
  selector: 'app-home-component',
  imports: [GruposComponent, CustomButtonComponent, GruposComponent, FooterComponent, ModalComponent, SocialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showModal: boolean = false;

  openModal(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }
}
