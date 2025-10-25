import { Component, inject } from '@angular/core';
import { GetAllPeopleService } from '../../services/get-all-people-service';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';
import { PeopleApiResult } from '../../services/models';
import { Person } from '../../services/models/person';

@Component({
  selector: 'app-filter-video-games',
  imports: [AsyncPipe],
  templateUrl: './filter-video-games.html',
  styleUrl: './filter-video-games.css',
})
export class FilterVideoGames {
  private readonly peopleService = inject(GetAllPeopleService);
  people$: Observable<Person[]> = this.peopleService.getAll().pipe(
    map((result) =>
      result.results.map((item) => ({ id: +item.uid, surname: item.name }))
    ) //appelé à chaque next de l'Observable
  );
}
