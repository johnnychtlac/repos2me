import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { HeadingService } from './service/heading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzLayoutModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly headingService = inject(HeadingService);
  public readonly title = this.headingService.titleState.title;
  constructor() {
    this.headingService.setTitle('repos2me');
  }
}
