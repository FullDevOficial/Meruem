import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CustomButtonComponent } from '../../shared/components/custom-button/custom-button';

@Component({
  selector: 'app-grupos-component',
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.scss',
  template: ``,
})
export class GruposComponent {
  @Input() text = 'Grupos';
  @Input() memberCount: number = 0;
  @Input() src: 'fulldev.png' | 'codequeens.png' = 'fulldev.png';
  @Input() parentType: 'home' | 'modal' = 'home';
  @Input() showIcon = false;
}
