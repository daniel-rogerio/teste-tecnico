import { Component, ChangeDetectionStrategy, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChampionsService } from '../../services/champions.service';
import { CookieService } from 'ngx-cookie-service';

export function changePaginatorLanguage() {
  const paginator = new MatPaginatorIntl();

  paginator.itemsPerPageLabel = 'Itens por página:';
  paginator.nextPageLabel = 'Próxima página';
  paginator.previousPageLabel = 'Página anterior';

  return paginator;
}

@Component({
  selector: 'app-champions',
  imports: [
    HeaderComponent,
    CommonModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatIcon,
    MatPaginatorModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: changePaginatorLanguage()
    }
  ],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionsComponent implements OnInit {
  private championsService: ChampionsService = inject(ChampionsService);
  private cookieService: CookieService = inject(CookieService);
  private token: string = this.cookieService.get('USER_COOKIE')
  displayedColumns: string[] = ['icon', 'name', 'title', 'info'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource;
  champions: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getChampions()
    this.dataSource.paginator = this.paginator
  }

  getChampions(): void {
    this.championsService.getAllChampions(this.token)
    .subscribe({
      next: (response) => {
        response && (this.champions = response);
        this.dataSource.data = this.champions;
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => console.log(error)
    });
  }

  filterResults(text: string): void {
    if (!text) this.dataSource.data = this.champions;

    this.dataSource.data = this.champions.filter((champion: any) => {
      return champion.name.toLowerCase().includes(text.toLowerCase());
    });
  }
}
