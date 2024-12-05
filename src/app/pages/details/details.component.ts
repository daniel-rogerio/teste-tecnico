import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { CardChampionSkinComponent } from '../../components/card-champion-skin/card-champion-skin.component';

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

}
