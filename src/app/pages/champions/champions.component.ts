import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-champions',
  imports: [
    HeaderComponent,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIcon,
    MatPaginatorModule
  ],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionsComponent {
  displayedColumns: string[] = ['icon', 'name', 'title', 'info'];
}
