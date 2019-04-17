import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  Name: string;
  Mail: string;
  Subject: string;
  Message: string;

  constructor() {
    this.Name = '';
    this.Mail = '';
    this.Subject = '';
    this.Message = '';
  }

  ngOnInit() {
  }

  /**
   * rubric60
   * The send button should create an alert based on the message sent
   */
  sendMail(): void {
    // In the real world it shouldn't return void really...
    alert(this.Name + ', you are about to sumbit this message:\r\n'
    + 'Email for response: ' + this.Mail + '\r\n'
    + 'Subject: ' + this.Subject + '\r\n'
    + 'Message: ' + this.Message
    );
  }

}
