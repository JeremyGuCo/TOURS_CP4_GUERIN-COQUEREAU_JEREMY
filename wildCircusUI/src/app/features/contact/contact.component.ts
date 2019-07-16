import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    public messageService: MessageService,
  ) { }

  ngOnInit() {
  }

  newMessage(message){
    this.messageService.createMessage(message).subscribe();

  }
}
