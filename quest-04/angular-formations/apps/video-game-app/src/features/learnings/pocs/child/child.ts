import { Component, inject } from '@angular/core';
import { Title } from '../../../../app/stores/title';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  private readonly service = inject(Title);
  titreS = this.service.titleAsSignalS;
  titleMaj = this.service.asMaj;
}
