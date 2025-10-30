import { Component } from '@angular/core';
import { NavMenuComponent } from '../../shared/components/nav-menu/nav-menu-component';
import { FooterComponent } from '../../shared/components/footer/footer-component';
import { CustomButtonComponent } from '../../shared/components/custom-button/custom-button';
import { ModalComponent } from '../../shared/components/custom-modal/custom-modal';
import { ModalVolunteerComponent } from '../../shared/components/modal-volunteer/modal-volunteer';
import { SocialComponent } from '../../shared/components/social-component/social-component';

@Component({
  selector: 'app-voluntario-component',
  imports: [
    CustomButtonComponent,
    SocialComponent,
    FooterComponent,
    ModalComponent,
    ModalVolunteerComponent,
    NavMenuComponent,
  ],
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

  onFormSubmit(_payload: {
    nome: string;
    email: string;
    linkedin: string;
    telefone: string;
    pais: string;
    aceitartermos: boolean;
  }) {
    this.closeModal();
  }
}
