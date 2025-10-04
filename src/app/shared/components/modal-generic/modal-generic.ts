import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal-generic',
  imports: [CommonModule, MatIconModule],
  templateUrl: './modal-generic.html',
  styleUrl: './modal-generic.scss',
})
export class ModalGenericComponent {
  @Input() title?: string = 'Title';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() showBanner?: boolean = false;
  @Input() bannerText?: string = '';
  @Input() showHeader?: boolean = true;
  @Input() showFooter?: boolean = true;
  @Input() disableBackdropClose?: boolean = false;
  @Input() confirmButtonText?: string = 'Confirmar';
  @Input() confirmButtonDisabled?: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
  @Input() isOpen: boolean = false;

  onClose() {
    this.close.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }

  onBackdropClick() {
    if (!this.disableBackdropClose) {
      this.onClose();
    }
  }
}
