import { Injectable } from '@angular/core';

import { signalState, patchState } from '@ngrx/signals';

@Injectable({
  providedIn: 'root',
})
export class HeadingService {
  public readonly titleState = signalState({ title: '' });

  public setTitle(content: string): void {
    patchState(this.titleState, (state) => ({ title: content }));
  }
}
