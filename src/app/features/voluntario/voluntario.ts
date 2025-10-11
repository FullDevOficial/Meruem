import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { FooterComponent } from '../../shared/components/footer/footer';
import { ModalVolunteerComponent } from '../../shared/components/modal-volunteer/modal-volunteer';
import { NavMenuComponent } from '../../shared/components/nav-menu/nav-menu';

@Component({
  selector: 'app-voluntario',
  imports: [NavMenuComponent, FooterComponent, ButtonComponent, ModalVolunteerComponent],
  templateUrl: './voluntario.html',
  styleUrl: './voluntario.scss',
})
export class VoluntarioComponent {
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onFormSubmit(formData: {
    nome: string;
    email: string;
    linkedin: string;
    telefone: string;
    pais: string;
    aceitartermos: boolean;
  }) {
    console.log('Dados do voluntário:', formData);
    // Implementar a lógica de envio dos dados (API, etc)
  }
}
