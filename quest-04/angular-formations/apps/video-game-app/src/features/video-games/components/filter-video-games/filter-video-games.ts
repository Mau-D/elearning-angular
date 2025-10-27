// import { AsyncPipe } from '@angular/common';
import { Component, inject} from '@angular/core';
import { filter, Observable, Subscription, tap } from 'rxjs';
import { GetAllPersonApplicatif } from '../../services/get-all-person.applicatif';
import { Person } from '../../services/models/person';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-filter-video-games',
  // imports: [AsyncPipe],
  templateUrl: './filter-video-games.html',
  styleUrl: './filter-video-games.css',
})
// export class FilterVideoGames implements OnInit, OnDestroy {
export class FilterVideoGames  {
  private readonly subscription = new Subscription();
  private readonly peopleService = inject(GetAllPersonApplicatif);
  // people$: Observable<Person[]> = this.peopleService.getAll().pipe(
  //   map((result) =>
  //     result.results.map((item) => ({ id: +item.uid, surname: item.name }))
  //   ) //appelé à chaque next de l'Observable
  // );
  people$: Observable<Person[]> = this.peopleService.getAll().pipe(
    filter((items) => items.length > 0),
    tap((items) => console.info(items))
  );
  people$$ = toSignal(this.people$);//on ne le voit pas, mais appel via un effect et donc appel du subscribe

  // ngOnInit(): void {
  //   const currentSubscription = this.people$.subscribe({
  //     next: (items) => {
  //       console.info(items);
  //     },
  //   });
  //   this.subscription.add(currentSubscription);
  // }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
