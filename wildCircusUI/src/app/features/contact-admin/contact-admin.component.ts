import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';
import { Message } from 'src/app/shared/models/message.model';

@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.scss']
})
export class ContactAdminComponent implements OnInit {

  public messages: Message[] = [];
  
  constructor(
    public messageService: MessageService,
  ) { }

  ngOnInit() {
    this.messageService.getAllMessages().subscribe(allMessages => this.messages = allMessages)
  }

}
