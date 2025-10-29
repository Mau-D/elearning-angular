import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-main-menu',
  imports: [RouterLinkWithHref, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css'
})
export class MainMenu {

}
