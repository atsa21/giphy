import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifDialogComponent } from './gif-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [GifDialogComponent],
  imports: [CommonModule, MatDialogModule]
})
export class GifDialogModule { }
