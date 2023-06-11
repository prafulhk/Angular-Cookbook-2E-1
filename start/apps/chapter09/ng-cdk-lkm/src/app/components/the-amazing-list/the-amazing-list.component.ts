import { Component, Input } from '@angular/core';
import { AppUserCard } from '../../interfaces/app-user-card.interface';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TheAmazingListItemComponent } from '../the-amazing-list-item/the-amazing-list-item.component';

@Component({
  selector: 'app-the-amazing-list',
  templateUrl: './the-amazing-list.component.html',
  styleUrls: ['./the-amazing-list.component.scss'],
  standalone: true,
  imports: [CommonModule, ScrollingModule, TheAmazingListItemComponent]
})
export class TheAmazingListComponent {
  @Input() listItems: AppUserCard[] = [];
}
