import { ActionReducerMap } from '@ngrx/store';
import { pizzaReducer, PizzaState } from './store-pizza';
import { toppingsReducer, ToppingsState } from './store-toppings';

export interface ProductsState {
  pizzas: PizzaState;
  toppings: ToppingsState;
}

export const productsReducers: ActionReducerMap<ProductsState> = {
  pizzas: pizzaReducer,
  toppings: toppingsReducer,
};
