import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IGif } from '../../interfaces';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GifDialogComponent } from '../../modals/gif-dialog/gif-dialog.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() gifCard!: IGif;

  constructor(public dialog: MatDialog) {}

  public openGifDialog(): void {
    const dialogConfig = new MatDialogConfig<IGif>();
    dialogConfig.data = this.gifCard;

    this.dialog.open(GifDialogComponent, dialogConfig);
  }
}
