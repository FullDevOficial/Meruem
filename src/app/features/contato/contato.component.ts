import { Component } from '@angular/core';
import { NavMenuComponent } from '../../shared/components/nav-menu/nav-menu-component';
import { FooterComponent } from '../../shared/components/footer/footer-component';
import { CustomButtonComponent } from '../../shared';
import { SocialComponent } from '../../shared/components/social-component/social-component';

@Component({
  selector: 'app-contato-component',
  imports: [NavMenuComponent, FooterComponent, CustomButtonComponent, SocialComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
