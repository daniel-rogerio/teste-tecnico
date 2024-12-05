import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-load-spinner',
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './load-spinner.component.html',
  styleUrl: './load-spinner.component.scss'
})
export class LoadSpinnerComponent {
  public loader: LoaderService = inject(LoaderService);
}
