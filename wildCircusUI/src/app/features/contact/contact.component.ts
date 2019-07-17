import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    public messageService: MessageService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  newMessage(message){
    this.messageService.createMessage(message).subscribe(()=>{
      this.toastr.success('Votre message a bien été envoyé')
    },
    (err) => {
      this.toastr.warning('Envoi impossible')
    });

  }
}
