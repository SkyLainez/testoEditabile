import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-academy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-academy.component.html',
  styleUrls: ['./hello-academy.component.css'],
})
export class HelloAcademyComponent implements OnInit {
  who: string;
  isDisabled: boolean;
  color: string;
  myName: string;
  canEdit: boolean;
  paragraph: string;
  
  constructor() {
    console.log("Esecuzione Costruttore HelloAcademyComponent");
    this.reset();
  }

  ngOnInit() {
    console.log("Esecuzione OnInit HelloAcademyComponent");
  }

  changeWho(): void {
    console.log("Esecuzione changeWho");
    const anotherWho: string = ' E buon lavoro!';
    this.who += anotherWho;
    this.isDisabled = true;
    this.color = "red";
  }

  reset(): void {
    console.log("esecuzione RESET");
    this.color = "blue";
    this.isDisabled = false;
    this.who = 'Ebit Academy';
    this.canEdit = false;
    this.paragraph = "I'm read-only!";
  }

  onEditClick(): void {
    this.canEdit = !this.canEdit;
  }

}
