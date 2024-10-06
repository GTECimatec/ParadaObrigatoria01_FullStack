import { createStore } from 'redux';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        
        return state;
      }
      return { ...state, cart: [...state.cart, action.payload] };

    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };

    default:
      return state;
  }
};

const store = createStore(cartReducer);

export default store;
