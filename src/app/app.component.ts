import { Component, ElementRef, ViewChild } from '@angular/core';
import { MyCards } from './dhared/interfaces/cards.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("inputName") inputName: ElementRef;
  @ViewChild("inputText") text: ElementRef;

  title = 'project11';
  card: MyCards[] = [];
  number: number = 0;



  addCard() {
    let cards: MyCards = { id: this.number++, name: this.inputName.nativeElement.value, inputText: this.text.nativeElement.value, date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() }
    this.card.push(cards);
    console.log(this.card[0]);
  }
  getClear() {
    this.inputName.nativeElement.value = "";
    this.text.nativeElement.value = "";
  }
  deliteCard(index) {
    this.card.splice(index, 1);
  }

}
