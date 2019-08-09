import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './Actions';
import { NecklacesService } from "../necklaces.service";

@Injectable()
export class ShopEffects {
    constructor(
        private actions$: Actions,
        private necklacesService: NecklacesService
    ) { }
    @Effect()
    loadNecklaces$ = this.actions$.pipe(
        ofType(ActionTypes.LoadItems), mergeMap(() => this.necklacesService.getAll().pipe(map(necklaces => {
            return { type: ActionTypes.LoadSuccess, payload: necklaces };
        }),
            catchError(() => EMPTY)
        )
        )
    );
};