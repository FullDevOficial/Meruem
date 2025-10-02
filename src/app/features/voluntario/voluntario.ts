import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { FooterComponent } from '../../shared/components/footer/footer';
import { ModalGenericComponent } from '../../shared/components/modal-generic/modal-generic';
import { NavMenuComponent } from '../../shared/components/nav-menu/nav-menu';

@Component({
  selector: 'app-voluntario',
  imports: [NavMenuComponent, FooterComponent, ButtonComponent, ModalGenericComponent],
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
}
