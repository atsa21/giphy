import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { SnackBarService } from './snack-bar.service';
import { EMessageTypes } from '../enums/e-message-types.enum';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private snack: SnackBarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          const errorMessage = error.error.meta.msg ? error.error.meta.msg : 'An unknown error occured!';
          this.snack.openSnackBar(errorMessage, EMessageTypes.Error);
          return throwError(error);
        })
    );
  }
}