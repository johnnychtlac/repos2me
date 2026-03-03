import { Component, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

import { DeviceDetectorService } from 'ngx-device-detector';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

import { ICtan } from '../../interface/ctan.interface';
import { HeadingService } from '../../service/heading.service';

@Component({
  selector: 'app-ctan',
  templateUrl: './ctan.component.html',
  styleUrl: './ctan.component.css',
  standalone: true,
  imports: [NzButtonModule, NzFlexModule, NzListModule, NzModalModule, NzPaginationModule],
})
export class CtanComponent {
  private http = inject(HttpClient);

  private readonly headingService = inject(HeadingService);
  public readonly title = this.headingService.titleState.title;

  private readonly deviceService = inject(DeviceDetectorService);
  public readonly isPC = this.deviceService.isDesktop();

  private readonly modal = inject(NzModalService);

  // 加载数据
  private readonly ctans = toSignal<ICtan[] | null>(this.http.get<ICtan[]>('/ctan.json'), { initialValue: null });
  // 更改这里的数量不能组件本身的默认值，两者并未绑定
  private readonly countPerPage = 10;
  // 数据总数，组件的属性需要该值
  public readonly totalCount = computed(() => this.ctans()?.length ?? 0);
  public readonly currentPage = signal<number>(1);
  // 获取数据列表
  public readonly currentPageItems = computed(() => {
    const data = this.ctans() ?? [];
    const page = this.currentPage();
    const start = (page - 1) * this.countPerPage;
    const end = start + this.countPerPage;
    return data.slice(start, end);
  });
  // 按钮点击获取新的数据列表
  public changePage(page: number): void {
    this.currentPage.set(page);
  }

  public openDocument(doc: string): void {
    if (this.isPC) {
      window.open('https://mirrors.aliyun.com/CTAN/' + doc, '_blank');
    } else {
      this.modal.warning({
        nzTitle: '移动设备警告',
        nzContent: '请在桌面端点击下载官方文档',
      });
    }
  }

  constructor() {
    this.headingService.setTitle('CTAN');
  }
}


