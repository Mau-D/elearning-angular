import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Title {
  private readonly title = signal('Mon titre du service');
  dispatch(title: string): void {
    this.title.set(title);
  }
  get titleAsSignalS(): Signal<string>{
    return this.title;
  }
}
