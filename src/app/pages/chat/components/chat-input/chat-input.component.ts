import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {

  newMessageText: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  submit(message: string): void {
    // TODO: Save text to Firebase Back-end
    console.log('New Message: ', message);

    // Reset input
    this.newMessageText = '';
  }

}
