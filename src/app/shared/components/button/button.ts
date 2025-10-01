import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() showIcon= false;
  
  @Input() label: string = "Entrar no grupo";
  @Input() type: "button" | "submit" = "button";
  @Input() color: "link" | "primary" | "secundary" | "warning" = "link";
  
  //Link
  @Input() routerLink?:string;  /* Link interno */
  @Input() href?:string;      /* Link externo */
  @Input() target: "_self" | "_blank" = "_self"


  @Output() click = new EventEmitter<void>();

  handleClick(){
    if(!this.routerLink && !this.href){
      this.click.emit()
    }
  }
}