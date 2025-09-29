import { Component } from '@angular/core';
import { Grupos } from "../grupos/grupos";
import { Button } from "../../shared/components/button/button";
import { ListGroup } from "../../shared/components/list-group/list-group";

@Component({
  selector: 'app-home',
  imports: [Grupos, Button, ListGroup],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
