import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { CardChampionSkinComponent } from '../../components/card-champion-skin/card-champion-skin.component';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../../components/image-modal/image-modal.component';
import { ActivatedRoute } from '@angular/router';
import { ChampionsService } from '../../services/champions.service';
import { ChampionData } from '../../interfaces/champions/ChampionData';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-details',
  imports: [
    CommonModule,
    HeaderComponent,
    MatCardModule,
    CardChampionSkinComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent {
  readonly dialog = inject(MatDialog);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private championsService: ChampionsService = inject(ChampionsService);
  private cookieService: CookieService = inject(CookieService);
  
  champions!: ChampionData;
  skins: any[] = [];
  championId = '';

  ngOnInit(): void {
    const token: string = this.cookieService.get('USER_COOKIE')
    this.championId = this.route.snapshot.params['id'];
    this.getChampionById(this.championId, token)
  }

  getChampionById(id: string, token: string) {
    this.championsService.getChampionsById(id, token).subscribe({
      next: (response) => {
        response && (this.champions = response)
        console.log(this.champions.id)
        this.skins = response.skins || [];
        console.log(this.skins)
      }
    })
  }

  openDialog(skinSplash: any, skinTitle: any, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ImageModalComponent, {
      minWidth: '70vw',
      minHeight: '80vmin',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        title: skinTitle,
        img: skinSplash
      }
    });
    console.log(skinSplash)
    console.log(skinTitle)
  }
}
