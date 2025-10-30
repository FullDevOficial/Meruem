import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CustomButtonComponent } from '../../shared/components/custom-button/custom-button';
import { ModalMembershipComponent } from '../../shared/components/modal-membership/modal-membership';

@Component({
  selector: 'app-grupos-component',
  imports: [CommonModule, CustomButtonComponent, ModalMembershipComponent],
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.scss',
})
export class GruposComponent {
  @Input() text = 'Grupos';
  @Input() src: 'fulldev.png' | 'codequeens.png' = 'fulldev.png';
  @Input() parentType: 'home' | 'modal' = 'home';
  @Input() showIcon = false;
  @Input() groupName: string = '';

  isMembershipModalOpen = false;

  openMembershipModal() {
    this.isMembershipModalOpen = true;
  }

  closeMembershipModal() {
    this.isMembershipModalOpen = false;
  }

  onMembershipConfirmed(_data: { nome: string; telefone: string; pais: string; grupo: string }) {
    // Implementar lógica para adicionar usuário ao grupo
  }

  onAccessGroup() {
    // Implementar a lógica de acesso ao grupo (API, etc)
    this.closeMembershipModal();
  }
}
