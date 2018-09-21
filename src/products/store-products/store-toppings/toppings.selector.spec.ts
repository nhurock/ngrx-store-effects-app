import { TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { Topping } from '../../models/topping.model';
import { productsReducers, ProductsState } from '../products.reducer';
import { toppingsReducer } from './toppings.reducer';
import { getToppingsEntities } from './toppings.selector';

describe('Toppings Selectors', () => {
  let store: Store<ProductsState>;
  const toppings: Topping[] = [
    { id: 1, name: 'bacon' },
    { id: 2, name: 'pepperoni' },
    { id: 3, name: 'tomato' },
  ];

  const entities = {
    1: toppings[0],
    2: toppings[1],
    3: toppings[2],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...productsReducers,
          products: combineReducers(toppingsReducer),
        }),
      ],
    });
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getToppingsEntities', () => {});
});
