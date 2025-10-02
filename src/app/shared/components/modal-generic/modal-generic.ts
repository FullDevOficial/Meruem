import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-generic',
  imports: [CommonModule],
  templateUrl: './modal-generic.html',
  styleUrl: './modal-generic.scss',
})
export class ModalGenericComponent {
  @Input() title?: string = 'Title';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Output() close = new EventEmitter<void>();
  @Input() isOpen: boolean = false;

  onClose() {
    this.close.emit();
  }
}
