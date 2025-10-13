import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  imports: [CommonModule],
  templateUrl: './custom-modal.html',
  styleUrl: './custom-modal.scss',
})
export class ModalComponent {
  @Input() title?: string = 'Title';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Output() closeModal = new EventEmitter<void>();
  @Input() isOpen: boolean = false;

  onClose() {
    this.closeModal.emit();
  }
}
