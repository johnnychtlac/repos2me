import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [RouterLink, NzFlexModule, NzCardModule, NzButtonModule]
})
export class HomeComponent {}
