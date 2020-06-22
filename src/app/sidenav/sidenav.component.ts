import { Component } from '@angular/core';

@Component({
  selector: 'sidenav-component',
  templateUrl: 'sidenav.component.html'
})
export class SidenavComponent {
  events: string[] = [];
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}