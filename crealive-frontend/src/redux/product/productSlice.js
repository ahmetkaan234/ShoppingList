import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getProductsAsync = createAsyncThunk('products/getProductsAsync',async()=>{
  const res = await axios.get('https://shoppinglisahmet.herokuapp.com/products')
  return res.data;

})



function compareNumbers(a, b) {
  return a.id - b.id;
}

function sortByName(a,b){
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

function sortByPrice(a,b) {
  return Number(a.price.replace("$","")) - Number(b.price.replace("$",""))
}

function sortByPrices(a,b) {
  
  return   Number(b.price.replace("$","")) - Number(a.price.replace("$","")) 
}

export const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    selectedItem: null,
    counter: 0,
    shoppingList: [],
    filteredItems:[]
  },
  reducers: {
  

    setSelectedItem: (state, action) => {
      state.selectedItem = state.items.find(
        (item) => item.id == action.payload
      );
    },

    cardItems: (state, action) => {
      const a = state.shoppingList.find(
        (item) => item.id === action.payload.id
      );
      if (a) {
        state.shoppingList.sort(function (a, b) {
          return parseInt(a.id) - parseInt(b.id);
        });
        state.shoppingList[a.id - 1].quantity++;
      } else {
        state.shoppingList.sort(compareNumbers);
        state.shoppingList.push(action.payload);
      }
    },
    removeItems: (state, action) => {
      state.shoppingList = state.shoppingList.filter(
        (item) => item.id !== action.payload
      );
    },
    setShoppingListItemQA: (state, action) => {
      const a = state.shoppingList.find(
        (item) => item.id === action.payload.id
      );
      if (action.payload.type === "plus") {
        a.quantity += 1;
      } else {
        if (a.quantity > 1) a.quantity -= 1;
      }
    },
    setFilteredItems:(state,action) =>{
      if(action.payload.type ==="1"){
        state.filteredItems.sort(sortByName)
      }
      else if(action.payload.type ==="2"){
        state.filteredItems.sort(sortByPrice)
      }
      else if(action.payload.type ==="3"){
        state.filteredItems.sort(sortByPrices)
      }

    }

  },
  extraReducers : {
      [getProductsAsync.fulfilled] : (state,action)=>{
        state.items = action.payload;
        state.filteredItems = action.payload;
      }
  }
  
});

export const {
  setSelectedItem,
  cardItems,
  removeItems,
  setShoppingListItemQA,
  setFilteredItems
 
} = productSlice.actions;
export default productSlice.reducer;

// state.shoppingList.push(action.payload);
