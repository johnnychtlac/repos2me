import { Component, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

import { DeviceDetectorService } from 'ngx-device-detector';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import type { ICtan } from '../../interface/ctan.interface';
import { HeadingService } from '../../service/heading.service';

@Component({
    selector: 'app-ctan',
    templateUrl: './ctan.component.html',
    styleUrl: './ctan.component.css',
    standalone: true,
    imports: [NzButtonModule, NzFlexModule, NzListModule, NzModalModule, NzPaginationModule, NzSpaceModule],
})
export class CtanComponent {
    private readonly http = inject(HttpClient);
    private readonly headingService = inject(HeadingService);
    private readonly deviceService = inject(DeviceDetectorService);
    private readonly modal = inject(NzModalService);

    public readonly title = this.headingService.titleState.title;
    public readonly isPC = this.deviceService.isDesktop();

    // 加载数据
    private readonly ctan = toSignal(this.http.get<ICtan>('/assets/ctan.json'), { initialValue: {
        site: '',
        pkgs: [],
    } });
    // 更改这里的数量不能组件本身的默认值，两者并未绑定
    private readonly countPerPage = 10;
    // 数据总数，组件的属性需要该值
    public readonly totalCount = computed(() => this.ctan().pkgs?.length ?? 0);
    public readonly currentPage = signal<number>(1);
    // 获取数据列表
    public readonly currentPageItems = computed(() => {
        const data = this.ctan().pkgs ?? [];
        const page = this.currentPage();
        const start = (page - 1) * this.countPerPage;
        const end = start + this.countPerPage;
        return data.slice(start, end);
    });
    // 按钮点击获取新的数据列表
    public changePage(page: number): void {
        this.currentPage.set(page);
    }

    public showDetail(id: string): void {
        this.http.get(`/assets/details/${id}.txt`, { responseType: 'text' }).subscribe(data => this.modal.info({
            nzTitle: id,
            nzContent: data,
        }));
    }

    public openDocument(doc: string): void {
        if (this.isPC) {
            window.open(`${this.ctan().site}/${doc}`, '_blank');
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

