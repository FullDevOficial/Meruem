import { Component, Input } from '@angular/core';
import { Button } from "../../shared/components/button/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grupos',
  imports: [Button, CommonModule],
  templateUrl: './grupos.html',
  styleUrl: './grupos.scss'
})
export class Grupos {
  @Input() src: "fulldev.png" | "codequeens.png" = "fulldev.png"
  @Input() parentType: 'home' | 'modal' = 'home';
  @Input() showIcon= false;

}
