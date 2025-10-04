import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ModalGenericComponent } from '../../shared/components/modal-generic/modal-generic';

@Component({
  selector: 'app-grupos-membership-modal',
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
  template: `
    <app-modal-generic 
      [isOpen]="isOpen"
      [title]="'Geral 1'"
      [showBanner]="true"
      [bannerText]="'Para participar do grupo, preencha os campos abaixo.'"
      [showFooter]="true"
      (close)="onClose()"
      size="md">
      
      <!-- Conteúdo do Modal -->
      <div slot="body" class="modal-content">
        <!-- Campo Nome -->
        <div class="input-group">
          <label class="input-label">Nome:</label>
          <mat-form-field appearance="outline" class="full-width">
            <input matInput 
                   placeholder="Insira seu nome" 
                   [formControl]="nomeControl"
                   type="text">
          </mat-form-field>
        </div>

        <!-- Campo Telefone -->
        <div class="input-group">
          <label class="input-label">Número:</label>
          <mat-form-field appearance="outline" class="full-width">
            <input matInput 
                   placeholder="(21) 9 88460135" 
                   [formControl]="telefoneControl"
                   type="tel">
            <mat-icon matSuffix>phone</mat-icon>
          </mat-form-field>
        </div>

        <!-- Checkbox de termos -->
        <div class="checkbox-container">
          <mat-checkbox [formControl]="termosControl">
            Concordo com os termos de usuário
          </mat-checkbox>
        </div>
      </div>

      <!-- Rodapé do Modal com botão personalizado -->
      <div slot="footer">
        <button 
          class="confirm-button" 
          (click)="onConfirm()"
          [disabled]="!termosControl.value || !nomeControl.value || !telefoneControl.value">
          {{ confirmButtonText }}
        </button>
      </div>
    </app-modal-generic>
  `,
  styles: [`
    .modal-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .input-label {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 400;
      color: white;
      margin: 0;
      padding: 0;
    }

    .full-width {
      width: 100%;
    }

    .checkbox-container {
      margin-top: 16px;
      
      mat-checkbox {
        color: white;
        
        ::ng-deep .mat-checkbox-frame {
          border-color: white !important;
        }
        
        ::ng-deep .mat-checkbox-checked .mat-checkbox-background {
          background-color: #ff6b35 !important;
        }
        
        ::ng-deep .mat-checkbox-label {
          color: white !important;
          font-size: 16px;
        }
      }
    }

    .confirm-button {
      background: linear-gradient(135deg, #ff6b35, #e74c3c);
      color: white;
      border: none;
      padding: 14px 32px;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      min-width: 160px;

      &:hover:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    ::ng-deep .mat-mdc-form-field-subscript-wrapper {
      display: none;
    }

    ::ng-deep .mat-mdc-form-field {
      .mat-mdc-form-field-outline {
        color: rgba(255, 255, 255, 0.3) !important;
      }
      
      .mat-mdc-form-field-outline-thick {
        color: #ff6b35 !important;
      }
      
      .mat-mdc-input-element {
        color: white !important;
      }
      
      .mat-mdc-form-field-label {
        color: white !important;
      }
      
      .mat-mdc-form-field-input-control {
        color: white !important;
      }
    }
  `]
})
export class GruposMembershipModalComponent {
  @Input() isOpen: boolean = false;
  @Input() confirmButtonText: string = 'Verificar e entrar';
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<{nome: string, telefone: string}>();

  nomeControl = new FormControl('');
  telefoneControl = new FormControl('');
  termosControl = new FormControl(false);

  onClose() {
    this.close.emit();
  }

  onConfirm() {
    if (this.termosControl.value && this.nomeControl.value && this.telefoneControl.value) {
      this.confirm.emit({
        nome: this.nomeControl.value || '',
        telefone: this.telefoneControl.value || ''
      });
    }
  }
}
