import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { FooterComponent } from '../../shared/components/footer/footer';
import { ListGroupComponent } from '../../shared/components/list-group/list-group';
import { ModalGenericComponent } from '../../shared/components/modal-generic/modal-generic';
import { GruposComponent } from '../grupos/grupos';

@Component({
  selector: 'app-home',
  imports: [
    GruposComponent,
    ButtonComponent,
    ListGroupComponent,
    FooterComponent,
    ModalGenericComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
