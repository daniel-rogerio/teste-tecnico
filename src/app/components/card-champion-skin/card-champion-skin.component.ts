import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-champion-skin',
  imports: [
    MatCardModule
  ],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {}}
  ],
  templateUrl: './card-champion-skin.component.html',
  styleUrl: './card-champion-skin.component.scss'
})
export class CardChampionSkinComponent {
  @Input() data: any;
}
