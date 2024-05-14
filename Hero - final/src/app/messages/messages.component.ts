import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { ClickEvent } from 'devextreme/ui/button';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
click($event: ClickEvent) {
throw new Error('Method not implemented.');
}

  constructor(public messageService: MessageService) {}

}