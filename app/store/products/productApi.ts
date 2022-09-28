import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import build from 'next/dist/build'
import { IProduct } from './productTypes'

export const productApi = createApi({
    reducerPath: 'api/products',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
    endpoints: build => ({
        getProducts: build.query<IProduct[], number>({
            query: (limit = 5) => `products?limit=${limit}`
        })
    })
})

export const {
    useGetProductsQuery
} = productApi