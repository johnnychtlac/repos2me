import { Component, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

import { ICtan } from '../../interface/ctan.interface';

import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-ctan',
  templateUrl: './ctan.component.html',
  styleUrl: './ctan.component.css',
  standalone: true,
  imports: [NzFlexModule, NzPaginationModule, NzListModule]
})
export class CtanComponent {
  private http = inject(HttpClient);
  private readonly ctans = toSignal<ICtan[] | null>(this.http.get<ICtan[]>('/ctan.json'), { initialValue: null });
  // 更改这里的数量不能组件本身的默认值，两者并未绑定
  private readonly countPerPage = 10;
  // 数据总数，组件的属性需要该值
  public readonly totalCount = computed(() => this.ctans()?.length ?? 0);

  public readonly currentPage = signal<number>(1);

  public readonly currentPageItems = computed(() => {
    const data = this.ctans() ?? [];
    const page = this.currentPage();
    const start = (page - 1) * this.countPerPage;
    const end = start + this.countPerPage;
    return data.slice(start, end);
  });

  public changePage(page: number): void {
    this.currentPage.set(page);
  }
}
