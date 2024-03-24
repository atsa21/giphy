import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifDialogModule } from '../../modals/gif-dialog/gif-dialog.module';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, GifDialogModule],
  exports: [CardComponent],
})
export class CardModule {
}
