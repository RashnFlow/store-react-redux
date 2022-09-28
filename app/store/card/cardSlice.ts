import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../products/productTypes";

const initialState: IProduct[] = []

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IProduct>) => {
            state.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<{id: number}>) => {
            return state.filter(p => p.id !== action.payload.id)
        }
    }
})

export const cardReucer = cardSlice.reducer
export const cardActions = cardSlice.actions