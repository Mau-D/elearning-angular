import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-route-title',
  standalone: true,
  imports: [],
  templateUrl: './route-title.html',
  styleUrls: ['./route-title.css'],
})
export class RouteTitle implements OnInit {
  private readonly title = inject(Title);

  ngOnInit(): void {
    // Set a meaningful document title when this route/component is initialized
    this.title.setTitle('Ah que Johnny');
    console.info(this.title.getTitle());
  }
}
