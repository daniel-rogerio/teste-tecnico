import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-details',
  imports: [
    CommonModule,
    HeaderComponent,
    MatCardModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent {

}
