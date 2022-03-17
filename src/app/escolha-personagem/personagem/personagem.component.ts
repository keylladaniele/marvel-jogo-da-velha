import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  @Input() character: any;

  constructor() { }

  ngOnInit(): void {
  }

}
