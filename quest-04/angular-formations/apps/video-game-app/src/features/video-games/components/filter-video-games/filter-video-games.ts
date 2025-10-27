import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';
import { GetAllPersonApplicatif } from '../../services/get-all-person.applicatif';
import { Person } from '../../services/models/person';

@Component({
  selector: 'app-filter-video-games',
  imports: [AsyncPipe],
  templateUrl: './filter-video-games.html',
  styleUrl: './filter-video-games.css',
})
export class FilterVideoGames {
  private readonly peopleService = inject(GetAllPersonApplicatif);
  // people$: Observable<Person[]> = this.peopleService.getAll().pipe(
  //   map((result) =>
  //     result.results.map((item) => ({ id: +item.uid, surname: item.name }))
  //   ) //appelé à chaque next de l'Observable
  // );
  people$: Observable<Person[]> = this.peopleService.getAll().pipe(
    filter(items => items.length > 0),
    tap(items => console.info(items)));
}
