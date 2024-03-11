import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import bucketReducer from "./reducer/bucketSlice";
import userLocationReducer from "./reducer/userLocationSlice";

const store = configureStore({
    reducer: {
        bucket: bucketReducer,
        product: productReducer,
        userLocation: userLocationReducer,
    }
})

export default store;