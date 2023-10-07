import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name:"cart",
   initialState:{ //kullanılacak stateler initialState içerisine yazılacak
    products:[],
    quantity:0,
    total: 0,
   },
   reducers:{ //fonksiyonlar ise reducer içerisine yazılacak 
    addProduct: (state, action) =>{
      state.products.push(action.payload);
      state.quantity +=1;
      state.total += action.payload.price;

    },
    reset: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
   }
});

export const {addProduct, reset} = cartSlice.actions;
export default cartSlice.reducer;
