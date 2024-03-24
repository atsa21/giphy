import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IGif } from '../../interfaces';

@Component({
  selector: 'app-gif-dialog',
  templateUrl: './gif-dialog.component.html',
  styleUrls: ['./gif-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifDialogComponent implements OnInit {
  public gifData!: IGif;

  constructor(@Inject(MAT_DIALOG_DATA) private readonly data: IGif) {}

  ngOnInit(): void {
    this.gifData = this.data;
  }
}
