import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { ModalMembershipComponent } from '../../shared/components/modal-membership/modal-membership';

@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [ButtonComponent, CommonModule, ModalMembershipComponent],
  templateUrl: './grupos.html',
  styleUrl: './grupos.scss',
})
export class GruposComponent {
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

  onMembershipConfirmed(data: {nome: string, telefone: string, pais: string, grupo: string}) {
    console.log('Usuário adicionado ao grupo:', data);
  }

  onAccessGroup() {
    console.log('Acessar grupo:', this.groupName);
    // Implementar a lógica de acesso ao grupo (API, etc)
    this.closeMembershipModal();
  }
}
