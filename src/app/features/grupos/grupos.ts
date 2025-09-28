import { Component, Input } from '@angular/core';
import { Button } from "../../shared/components/button/button";

@Component({
  selector: 'app-grupos',
  imports: [Button],
  templateUrl: './grupos.html',
  styleUrl: './grupos.scss'
})
export class Grupos {
  @Input() label: string = "Geral 1";
  @Input() src: "fulldev.png" | "codequeens.png" = "fulldev.png"

}
