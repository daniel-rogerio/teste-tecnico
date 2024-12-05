import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { CardChampionSkinComponent } from '../../components/card-champion-skin/card-champion-skin.component';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../../components/image-modal/image-modal.component';

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

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ImageModalComponent, {
      minWidth: '70vw',
      minHeight: '80vmin',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        title: 'Teste',
        img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg'
      }
    });
  }
}
