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
import { MatButtonModule } from '@angular/material/button';

export interface PeriodicElement {
  icon: number;
  name: string;
  title: number;
  info: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {icon: 1, name: 'Hydrogen', title: 1.0079, info: 'H'},
  {icon: 2, name: 'Helium', title: 4.0026, info: 'He'},
  {icon: 3, name: 'Lithium', title: 6.941, info: 'Li'},
  {icon: 4, name: 'Beryllium', title: 9.0122, info: 'Be'},
  {icon: 5, name: 'Boron', title: 10.811, info: 'B'},
  {icon: 6, name: 'Carbon', title: 12.0107, info: 'C'},
  {icon: 7, name: 'Nitrogen', title: 14.0067, info: 'N'},
  {icon: 8, name: 'Oxygen', title: 15.9994, info: 'O'},
  {icon: 9, name: 'Fluorine', title: 18.9984, info: 'F'},
  {icon: 11, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 12, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 13, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 14, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 15, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 16, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 17, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 18, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 19, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 20, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 21, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 22, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 23, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 24, name: 'Neon', title: 20.1797, info: 'Ne'},
  {icon: 25, name: 'Neon', title: 20.1797, info: 'Ne'},
];

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
    MatPaginatorModule,
    MatButtonModule
  ],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionsComponent {
  displayedColumns: string[] = ['icon', 'name', 'title', 'info'];
  dataSource = ELEMENT_DATA;
}
