import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'X-RapidAPI-Key': '8a352687a5msh5338b6e60e4ffc0p1d5c0fjsn327233432788',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest = (url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        })
    })
})

export const {useGetCryptosQuery} = cryptoApi;