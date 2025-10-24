import { Component, inject } from '@angular/core';
import { GetAllPeopleService } from '../../services/get-all-people-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-filter-video-games',
  imports: [AsyncPipe],
  templateUrl: './filter-video-games.html',
  styleUrl: './filter-video-games.css',
})
export class FilterVideoGames {
  private readonly peopleService = inject(GetAllPeopleService);
  people$ = this.peopleService.getAll();
}
