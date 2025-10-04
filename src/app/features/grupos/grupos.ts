import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { GruposMembershipModalComponent } from './grupos-membership-modal';

@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [ButtonComponent, CommonModule, GruposMembershipModalComponent],
  templateUrl: './grupos.html',
  styleUrl: './grupos.scss',
})
export class GruposComponent {
  @Input() src: 'fulldev.png' | 'codequeens.png' = 'fulldev.png';
  @Input() parentType: 'home' | 'modal' = 'home';
  @Input() showIcon = false;
  
  // Estado do modal
  isMembershipModalOpen = false;

  // Métodos para controlar o modal
  openMembershipModal() {
    this.isMembershipModalOpen = true;
  }

  closeMembershipModal() {
    this.isMembershipModalOpen = false;
  }

  onMembershipConfirmed(data: {nome: string, telefone: string}) {
    console.log('Inscrição confirmada:', data);
    // Aqui você pode implementar a lógica de inscrição
    // Por exemplo, enviar dados para um serviço
    this.closeMembershipModal();
  }
}
