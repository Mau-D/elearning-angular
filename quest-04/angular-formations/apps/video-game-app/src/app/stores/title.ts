import { computed, Injectable, Signal, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class Title {
  private readonly titleMaj = computed(() => {
    console.info('computed', this.titleMaj);
    return this.title().toUpperCase();
  });
  private readonly title = signal('Mon titre du service');
  private readonly obs$ = toObservable(this.title); //Pour utiliser les opérateurs en le transformant en observable
  dispatch(title: string): void {
    this.title.set(title);
  }
  get titleAsSignalS(): Signal<string> {
    return this.title;
  }
  get asMaj(): Signal<string> {
    return this.titleMaj;
  }
}
