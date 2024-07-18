import { configureStore } from '@reduxjs/toolkit'
import CurrencySlice from './reducer/CurrencySlice'
const store = configureStore({
    reducer: {
        CurrencySlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}),
})

export default store