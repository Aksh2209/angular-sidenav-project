import { Component, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'ticket-component',
  templateUrl: 'ticket.component.html'
})
export class TicketComponent {
  @ViewChild('sidenav', { static: true }) public el: any;

  @HostListener('swiperight', ['$event']) public swipePrev(event: any) {
  this.el.show();
  }
}