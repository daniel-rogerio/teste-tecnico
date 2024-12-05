import { Component, ChangeDetectionStrategy, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageModalComponent {
  readonly dialogRef: any = inject(MatDialogRef<ImageModalComponent>);
  public data: any = inject(MAT_DIALOG_DATA);
}