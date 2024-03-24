import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMessageTypes } from '../enums/e-message-types.enum';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  private message: string = '';
  private snackBarClass: string = '';

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, messageType: EMessageTypes): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: [messageType]
    });
  }
}
