import { createAction, props } from '@ngrx/store';

export const TOAST_ERROR = '[Toast] Error toast';
export const TOAST_SUCCESS = '[Toast] Success toast';

export const toastError = createAction(TOAST_ERROR, props<any>());
export const toastSuccess = createAction(TOAST_SUCCESS, props<any>());
