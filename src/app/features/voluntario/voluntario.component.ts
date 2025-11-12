import { Component } from '@angular/core';
import { NavMenuComponent } from '../../shared/components/nav-menu/nav-menu-component';
import { FooterComponent } from '../../shared/components/footer/footer-component';
import { CustomButtonComponent } from '../../shared/components/custom-button/custom-button';
import { SocialComponent } from '../../shared/components/social-component/social-component';
import { InputComponent } from "../../shared/components/custom-input/custom-input";
import { ModalMembershipComponent } from "../../shared";

@Component({
  selector: 'app-voluntario-component',
  imports: [
    CustomButtonComponent,
    SocialComponent,
    FooterComponent,
    NavMenuComponent,
    InputComponent,
    ModalMembershipComponent
],
  templateUrl: './voluntario.component.html',
  styleUrl: './voluntario.component.scss',
})
export class VoluntarioComponent {
  showModal: boolean = true;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
