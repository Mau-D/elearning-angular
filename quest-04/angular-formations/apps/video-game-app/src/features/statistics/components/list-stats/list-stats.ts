import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatsList } from '../../models/statistic';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-stats',
  imports: [AsyncPipe],
  templateUrl: './list-stats.html',
  styleUrl: './list-stats.css',
})
export class ListStats implements OnInit {
  private readonly route = inject(ActivatedRoute);
  protected readonly stats$ = this.route.data.pipe(
    map<{ [key: string | symbol]: any }, StatsList>((data) => data['stats'])
  );
  // statsS = toSignal(this.stats$); //Utiliser un SIgnal pour les computed ou faire des modifications des données reçues
  protected readonly title$ = this.route.data.pipe(
    map<{ [key: string | symbol]: any }, string>((data) => data['title'])
  );
  protected readonly titleColor$ = this.route.data.pipe(
    map<{ [key: string | symbol]: any }, string>((data) => data['titleColor'])
  );
  ngOnInit(): void {
    this.stats$.subscribe((stats) => {
      console.info(stats);
    });
   
  }
}
