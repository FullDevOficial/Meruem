import { Component } from '@angular/core';
import { NavMenuComponent } from "../../shared/components/nav-menu/nav-menu-component";
import { FooterComponent } from "../../shared/components/footer/footer-component";
import { CustomButtonComponent } from "../../shared/components/custom-button/custom-button";
import { ModalComponent } from "../../shared/components/custom-modal/custom-modal";
import { SocialComponent } from "../../shared/components/social-component/social-component";

@Component({
  selector: 'app-voluntario-component',
  imports: [CustomButtonComponent, SocialComponent, FooterComponent, ModalComponent, NavMenuComponent],
  templateUrl: './voluntario.component.html',
  styleUrl: './voluntario.component.scss',
})
export class VoluntarioComponent {
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;

  }
}
