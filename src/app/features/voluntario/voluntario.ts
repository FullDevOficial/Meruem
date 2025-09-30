import { Component } from '@angular/core';
import { NavMenu } from "../../shared/components/nav-menu/nav-menu";
import { Footer } from "../../shared/components/footer/footer";
import { Button } from "../../shared/components/button/button";
import { ModalGeneric } from "../../shared/components/modal-generic/modal-generic";

@Component({
  selector: 'app-voluntario',
  imports: [NavMenu, Footer, Button, ModalGeneric],
  templateUrl: './voluntario.html',
  styleUrl: './voluntario.scss'
})
export class Voluntario {
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;

  }

}
