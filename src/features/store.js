import { configureStore } from "@reduxjs/toolkit";
import items from './itemSlice'
export default configureStore({
  reducer:{
    items,
  },
});

