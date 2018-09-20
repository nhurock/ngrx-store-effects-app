import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { BACK, FORWARD, Go, GO } from './app.action';

@Injectable()
export class AppEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
  ) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(GO),
    map((action: Go) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      return this.router.navigate(path, { queryParams, ...extras });
    }),
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(BACK),
    tap(() => this.location.back()),
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(FORWARD),
    tap(() => this.location.forward()),
  );
}
