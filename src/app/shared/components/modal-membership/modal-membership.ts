import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ModalGenericComponent } from '../modal-generic/modal-generic';
import { OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal-membership',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    ModalGenericComponent
  ],
  templateUrl: './modal-membership.html',
  styleUrl: './modal-membership.scss'
})
export class ModalMembershipComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() confirmButtonText: string = 'Verificar e entrar';
  @Input() groupName: string = 'Geral'; 
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<{nome: string, telefone: string, pais: string, grupo: string}>();

  nomeControl = new FormControl('');
  telefoneControl = new FormControl('');
  paisControl = new FormControl('+55'); 
  termosControl = new FormControl(false);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && !changes['isOpen'].currentValue) {
      this.resetForm();
    }
  }

  onClose() {
    this.resetForm();
    this.close.emit();
  }

  private resetForm() {
    this.nomeControl.setValue('');
    this.telefoneControl.setValue('');
    this.paisControl.setValue('+55');
    this.termosControl.setValue(false);
  }

  isFormValid(): boolean {
    const nomeValid = this.nomeControl.value ? this.nomeControl.value.trim().length > 0 : false;
    const telefoneValid = this.telefoneControl.value ? this.telefoneControl.value.trim().length > 0 : false;
    const paisValid = this.paisControl.value ? this.paisControl.value.trim().length > 0 : false;
    const termosValid = this.termosControl.value === true;
    
    return nomeValid && telefoneValid && paisValid && termosValid;
  }

  onConfirm() {
    if (this.isFormValid()) {
      this.confirm.emit({
        nome: this.nomeControl.value ? this.nomeControl.value.trim() : '',
        telefone: this.telefoneControl.value ? this.telefoneControl.value.trim() : '',
        pais: this.paisControl.value ? this.paisControl.value.trim() : '+55',
        grupo: this.groupName
      });
      this.resetForm();
    }
  }
}
