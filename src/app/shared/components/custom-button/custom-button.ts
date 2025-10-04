import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-custom-button-component',
  imports: [MaterialModule, CommonModule, RouterModule,],
  standalone:true,
  styleUrl: './custom-button.scss',
  template: `
    @if(routerLink){
      <a [routerLink]="routerLink" [ngClass]="color" class="button">
        <ng-content></ng-content>
      </a>
    }

    @if (href && !routerLink) {
      <a [href]="href" [target]="target" [ngClass]="color" class="button">
        <ng-content></ng-content>
      </a>
    }

    @if(!routerLink && !href){
    <button [type]="type" [ngClass]="color" class="button" [disabled]="loading" (click)="onClick()">
      {{ text }}

      @if (showIcon) { <img src="link-external.svg" alt="Icone link externo"> }
      @if (loading) {<mat-spinner diameter="20"></mat-spinner>}
      
    </button>
    }
  `
})
export class CustomButtonComponent {
  @Input() text = 'Botão';
  @Input() showIcon = false;
  @Input() label: string = "Entrar no grupo";
  @Input() type: "button" | "submit" = "button";
  @Input() color: "link" | "primary" | "secundary" | "warning" = "link";
  @Input() loading = false;

  //Link
  @Input() routerLink?: string;  /* Link interno */
  @Input() href?: string;      /* Link externo */
  @Input() target: "_self" | "_blank" = "_self"


  @Output() buttonClick = new EventEmitter<void>();

  onClick() { this.buttonClick.emit(); }
}