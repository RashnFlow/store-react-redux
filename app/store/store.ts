import { configureStore, Store } from "@reduxjs/toolkit";
import { cardReucer } from "./card/cardSlice";
import { productApi } from "./products/productApi";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        card: cardReucer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(productApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>