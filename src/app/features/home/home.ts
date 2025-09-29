import { Component } from '@angular/core';
import { Grupos } from "../grupos/grupos";
import { Button } from "../../shared/components/button/button";

@Component({
  selector: 'app-home',
  imports: [Grupos, Button],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
