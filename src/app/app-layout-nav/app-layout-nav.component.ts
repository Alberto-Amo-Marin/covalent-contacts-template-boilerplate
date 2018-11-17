import { Component, OnInit } from '@angular/core';
import { LayoutScreenService } from '../layout-screen.service';


@Component({
  selector: 'app-layout-nav',
  templateUrl: './app-layout-nav.component.html',
  styleUrls: ['./app-layout-nav.component.scss']
})
export class AppLayoutNavComponent implements OnInit {

  title = "Contacts";

  routes: Object[] = [
    {
      title: 'Inbox',
      route: '/',
      icon: 'email',
    }, {
      title: 'Snoozed',
      route: '/',
      icon: 'access_time',
    }, {
      title: 'Drafts',
      route: '/',
      icon: 'drafts',
    }, {
      title: 'Sent',
      route: '/',
      icon: 'send',
    }, {
      title: 'Trash',
      route: '/',
      icon: 'delete',
    },
  ];

  constructor(public layoutScreen : LayoutScreenService) {
    layoutScreen.screenResizing();
  }

  ngOnInit() {
  }

}
