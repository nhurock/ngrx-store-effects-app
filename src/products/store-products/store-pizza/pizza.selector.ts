import { createSelector } from '@ngrx/store';
import { getRouterState } from '../../../app/store-app/app.selector';
import { Pizza } from '../../models/pizza.model';
import { ProductsState } from '../products.reducer';
import { getProductsState } from '../products.selector';
import { getSelectedToppings, getToppingsEntities } from '../store-toppings';
import { PizzaState } from './pizza.reducer';

export const getPizzaState = createSelector(
  getProductsState,
  (products: ProductsState) => products.pizzas,
);
export const getPizzasEntities = createSelector(
  getPizzaState,
  (state: PizzaState) => state.entities,
);
export const getAllPizzas = createSelector(getPizzasEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});
export const getSelectedPizza = createSelector(
  getPizzaState,
  getRouterState,
  (state: PizzaState, router): Pizza => {
    return router.state && state.entities[router.state.params.pizzaId];
  },
);
export const getPizzaVisualized = createSelector(
  getSelectedPizza,
  getToppingsEntities,
  getSelectedToppings,
  (pizza, toppingsEntities, selectedToppings) => {
    const toppings = selectedToppings.map(id => toppingsEntities[id]);
    return {
      ...pizza,
      toppings,
    };
  },
);
export const getPizzasLoaded = createSelector(
  getPizzaState,
  (state: PizzaState) => state.loaded,
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  (state: PizzaState) => state.loading,
);
