import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base_url } from "../firebase/database"

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({baseUrl:base_url}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ()=> 'products.json'
        }),
        getCategories: builder.query({
            query: () => 'categories.json'
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"` 
        }),
        postOrder: builder.mutation({
            query: ({...order})=>({
                url: 'orders.json',
                method: 'POST',
                body: order
            })
        }),
        getProfilePicture: builder.query({
            query: (localId) => `profilePictures/${localId}.json` 
        }),
        postProfilePicture: builder.mutation({
            query: ({image, localId})=>({
                url:  `profilePictures/${localId}.json`,
                method: 'PUT',
                body: {
                    image: image,
                }
            })
        }),
    })
})

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery, usePostOrderMutation,useGetProfilePictureQuery,usePostProfilePictureMutation} = shopApi;