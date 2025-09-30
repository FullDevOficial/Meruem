import { Component, ViewChild } from '@angular/core';
import { Grupos } from "../grupos/grupos";
import { Button } from "../../shared/components/button/button";
import { ListGroup } from "../../shared/components/list-group/list-group";
import { Footer } from "../../shared/components/footer/footer";
import { ModalGeneric } from "../../shared/components/modal-generic/modal-generic";

@Component({
  selector: 'app-home',
  imports: [Grupos, Button, ListGroup, Footer, ModalGeneric],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  showModal: boolean = false;

  openModal(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;

  }
}
