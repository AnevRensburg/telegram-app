import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent{
  
  @Output() dismiss = new EventEmitter();

  constructor () { }

  onDismissClick() {
    this.dismiss.emit();
    console.log("Dismiss button clicked");
  }

}
